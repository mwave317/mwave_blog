const requireLogin = require('../middlewares/requireLogin');
const mongoose = require('mongoose');
const Comment = mongoose.model('comment');

module.exports = app => {
    app.get('/api/comment/', async (req, res) => {
        const comments = await Comment.find( [{$lookup: { from: "comments", localField: _id}}]);
        res.send(comments);
    });
    
    app.post('/api/comment/add', requireLogin, (req, res) => {
        const { comment, _post, } = req.body;

        const addComment = new Comment ({
            comment,
            _post,
            _user: req.user.id,
        });
        addComment.save();
    });
}