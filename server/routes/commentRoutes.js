const requireLogin = require('../middlewares/requireLogin');
const mongoose = require('mongoose');
const Comment = mongoose.model('comment');

module.exports = app => {
    app.get('/api/comment/not_verified', async (req, res) => {
        const comments = await Comment.find( {verfied: { $exists: false}});
        res.send(comments);
    });

    app.post('/api/comment/add', requireLogin, (req, res) => {
        console.log(req.body);
        const { comment, _post, firstName , timestamp} = req.body;

        const addComment = new Comment ({
            comment,
            firstName,
            _post,
            timestamp,
            _user: req.user.id,
            
        });
        addComment.save();
    });

    app.patch('/api/comment/verified/update', async (req, res) => { 
        console.log(req.body);
        const updateAComment = await Comment.updateOne( {_id : req.body.commentId}, { $set: { verified: req.body.verified}});
        res.send(updateAComment);
    });

    app.delete('/api/comment/verified/delete', async (req, res) => { 
        console.log(req.body)
        const deleteAComment = await Comment.deleteOne( {_id : req.body.commentId});
        res.send(deleteAComment);
    });
}