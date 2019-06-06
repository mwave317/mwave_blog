const requireLogin = require('../middlewares/requireLogin');
const mongoose = require('mongoose');
const Reply = mongoose.model('reply');

module.exports = app => {

    app.get('/api/replies/not_verified', async (req, res) => {
        const reviewReplies = await Reply.find( {reviewed: false});
        res.send(reviewReplies);
    });

    app.post('/api/reply/add', requireLogin, (req, res) => {
        const { reply, _comment, _post, _user, firstName, timestamp } = req.body;

        const addReply = new Reply ({
            reply,
            firstName,
            timestamp,
            _comment,
            _user,
            _post,
            _user: req.user.id,
        });
        addReply.save();
    });

    app.patch('/api/reply/verified/update', async (req, res) => { 
        const updateAReply = await Reply.updateOne( {_id : req.body.replyId}, { $set: { reviewed: req.body.reviewed}});
        res.send(updateAReply);
    });

    app.delete('/api/reply/verified/delete', async (req, res) => { 
        const deleteAReply = await Reply.deleteOne( {_id : req.body.replyId});
        res.send(deleteAReply);
    });
}