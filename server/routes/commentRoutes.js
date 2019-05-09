const requireLogin = require('../middlewares/requireLogin');
const mongoose = require('mongoose');
const Comment = mongoose.model('comment');

module.exports = app => {
    app.get('/api/comment/not_verified', async (req, res) => {
        const comments = await Comment.find( {verfied: { $exists: false}});
        res.send(comments);
    });

    app.patch('/api/comment/update', async (req, res) => {
        
        commentId = req.body.commentId;
        console.log(req.body.commentId, req.body.verfied);
        const comments = await Comment.updateOne( {_id : commentId}, { $set: { verified: true}});
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