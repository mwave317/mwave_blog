const requireLogin = require('../middlewares/requireLogin');

module.exports = app => {
    app.post('/api/contact', requireLogin, (req, res) => {
        const { subject, body } = req.body;

        const contact = new Contact({
            subject,
            body, 
            _user: req.user.email,
        });
    });
}