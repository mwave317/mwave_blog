const mongoose = require('mongoose');
const sendgrid = require('@sendgrid/mail');
const keys = require('../config/keys');
const requireLogin = require('../middlewares/requireLogin');
const Contact = mongoose.model('contact');

module.exports = app => {
    app.post('https://mwave317.herokuapp.com/api/contact', requireLogin, (req, res) => {
        const { subject, body, from } = req.body;
        const contact = new Contact({
            to: 'mwave.blog@gmail.com',
            from,
            bcc: 'mwave317@gmail.com',
            subject,            
            text: '' + body + '',
            html: '<p>' + body + '</p>',
        });
        sendgrid.setApiKey(keys.sendGridKey);
        sendgrid.send(contact, (err) => {
            if (err) {
                console.log(err)
            }
        });

    });
}