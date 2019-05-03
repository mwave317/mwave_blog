const sendgrid = require('sendgrid');
const helper = sendgrid.mail;
const keys = require('../config/keys');

class Mailer extends helper.Mail {
    constructor({subject, recipient, sender }, content) {
        super();

        this.sgApi = sendgrid(keys.sendGridKey);
        this.from_email = new helper.Email(sender);
        this.subject = subject;
        this.body = new helper.Content('text/html', content);
        this.recipient = recipient;

        this.addContent(this.body);
    }

    async send() {
        const request = this.sgApi.emptyRequest({
            method: 'POST',
            path: '/v3/mail/send',
            body: this.toJSON(),
        });

        const response = await this.sgApi.API(request);
        return response;
    }
}

module.exports = Mailer;