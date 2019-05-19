const requireLogin = require('../middlewares/requireLogin');
const mongoose = require('mongoose');
const { ObjectId } = mongoose.Types;
const Comment = mongoose.model('comment');

module.exports = app => {
    app.get('/api/comment/not_verified', async (req, res) => {
        const comments = await Comment.find( {reviewed: false});
        res.send(comments);
    });

    app.get('/api/comment/verified', async (req, res) => {
        const comments = await Comment.aggregate([
            { $match: { "_post" : ObjectId("5cd793573fadb2277a443287") }},
            { $match: { "reviewed" : { $eq: true }}},
        
            {
                $lookup: {
                    from: "replies",
                    localField: "_id",
                    foreignField: "_comment",
                    as: "replies"
                }        
            },
        {
            $replaceRoot: { newRoot: { $mergeObjects: [ { $arrayElemAt: [ "$replies", 1 ] }, "$$ROOT" ] } }
        },
            { $project: { replies: {
                $filter: {
                    "input": "$replies",
                    "as": "reply",
                    "cond": { "$eq": [ "$$reply.reviewed", true ]}
                }
            }, comment: 1 , firstName: 1, timestamp: 1}},
        ])
        res.send(comments);
    });

    app.post('/api/comment/add', requireLogin, (req, res) => {
        const { comment, _post, firstName , _user, timestamp} = req.body;

        const addComment = new Comment ({
            comment,
            firstName,
            _post,
            _user,
            timestamp,
            _user: req.user.id,
            
        });
        addComment.save();
    });

    app.patch('/api/comment/verified/update', async (req, res) => { 
        const updateAComment = await Comment.updateOne( {_id : req.body.commentId}, { $set: { verified: req.body.verified}});
        res.send(updateAComment);
    });

    app.delete('/api/comment/verified/delete', async (req, res) => { 
        const deleteAComment = await Comment.deleteOne( {_id : req.body.commentId});
        res.send(deleteAComment);
    });
}