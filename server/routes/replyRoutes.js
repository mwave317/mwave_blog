const requireLogin = require('../middlewares/requireLogin');
const mongoose = require('mongoose');
const Reply = mongoose.model('reply');

module.exports = app => {
    app.post('/api/reply/add', requireLogin, (req, res) => {
        const { reply, _comment, _post, firstName, timestamp } = req.body;

        const addReply = new Reply ({
            reply,
            firstName,
            timestamp,
            _comment,
            _post,
            _user: req.user.id,
        });
        addReply.save();
    });
}