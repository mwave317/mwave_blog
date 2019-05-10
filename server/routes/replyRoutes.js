const requireLogin = require('../middlewares/requireLogin');
const mongoose = require('mongoose');
const Reply = mongoose.model('reply');

module.exports = app => {
    app.post('/api/reply/add', requireLogin, (req, res) => {
        console.log('This is from the reply add', req.body);
        const { reply, _comment, _post, firstName } = req.body;

        const addReply = new Reply ({
            reply,
            firstName,
            _comment,
            _post,
            _user: req.user.id,
        });
        addReply.save();
    });
}