const mongoose = require('mongoose');
const requireLogin = require('../middlewares/requireLogin');
const Mailer = require('../services/Mailer');
const contactTemplate = require('../services/contactTemplate');
const Contact = mongoose.model('contact');

module.exports = app => {
    app.post('/api/contact', requireLogin, (req, res) => {
        const { subject, body, sender } = req.body;

        const contact = new Contact({
            subject,
            body,
            sender,
        });
        const mailer = new Mailer(contact, contactTemplate(contact));
        mailer.send();
    });
}