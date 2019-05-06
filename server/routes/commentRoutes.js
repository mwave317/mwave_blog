const requireLogin = require('../middlewares/requireLogin');
const mongoose = require('mongoose');
const Comment = mongoose.model('comment');

module.exports = app => {
    app.post('/api/comment', requireLogin, (req, res) => {
        const { comment, timestamp, verified } = req.body;

        const addComment = new Comment ({
            comment,
            timestamp,
            verified,

        });
        console.log('Do you see the comment', addComment);
        addComment.save();
    });
}