const mongoose = require('mongoose');
const requireLogin = require('../middlewares/requireLogin');
const Mailer = require('../services/Mailer');
const contactTemplate = require('../services/contactTemplate');
const Contact = mongoose.model('contact');

module.exports = app => {
    app.post('/api/contact', requireLogin, (req, res) => {
        const { subject, body, senders, recipient } = req.body;
        console.log('This is the body from inside the contactRoutes', body);
        console.log('This is subject coming from inside the contactRotue', subject);
        console.log('This is sender coming from inside the contactRotues', senders);
        const contact = new Contact({
            subject,
            body,
            senders,
            recipient,
            _user: req.user.id,
            timestamp: Date.now(),
        });
        console.log('This is the body before the contact', body);
        console.log('This is the contact inside the contactRoutes', contact);
        const mailer = new Mailer(contact, contactTemplate(contact));
        console.log('This is what is contained in the mailer', mailer);
        mailer.send();
    });
}