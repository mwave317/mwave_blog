const sendgrid = require('sendgrid');
const helper = sendgrid.mail;
const keys = require('../config/keys');

class Mailer extends helper.Mail {
    constructor({subject, senders }, content) {
        super();
        console.log('This is the content from inside the Mailer', content);
        console.log('This is the sender in the Mailer', senders);
        console.log('This is the subject inside the Mailer', subject);
        this.sgApi = sendgrid(keys.sendGridKey);
        this.senders = senders;
        this.from_email = this.senders;
        this.subject = subject;
        this.body = new helper.Content('text/html', content);
        this.recipient = new helper.Email('mwave317@gmail.com');
        

        this.addContent(this.body);
        // this.addSender();
    }

    formatAddresses() {
        return this.senders.map(({ email }) => {
          return new helper.Email(email);
        });
      }

    addSender() {
        for (let s in senders) {
            console.log(s);
        }
        const personalize = new helper.Personalization();
        // senders.forEach(sender => {
        //     personalize.addTo(sender);
        // });
        this.addPersonalization(personalize);
        console.log('This should be the sender added to the personalize', personalize);
    }

    async send() {
        try {
            const request = await this.sgApi.emptyRequest({
            method: 'POST',
            path: '/v3/mail/send',
            body: this.toJSON(),
        });
            const response = await this.sgApi.API(request);
        return response;
        } catch (err) {
            console.log(err.response.body.errors);
        }
    }
}

module.exports = Mailer;