const requireLogin = require('../middlewares/requireLogin');
const mongoose = require('mongoose');
const { ObjectId } = mongoose.Types;

const Post = mongoose.model('post');

module.exports = app => {
    app.get('/api/posts/recent/topthree', async (req, res) => {
        const recent = await Post.find().sort( {$natural: -1}).limit(4);
        recent.shift();
        res.send(recent);
    });

    app.get('/api/posts/pastpost', async (req, res) => {  
        console.log(req.query._id); 
        const post = await Post.findOne(ObjectId(req.query._id))
            res.send(post);
    });

    app.get('/api/posts/recent', async (req, res) => {
        const posts = await Post.find().sort( {$natural: -1}).limit(1);
            res.send(posts);
    });

    

    app.post('/api/posts/add', requireLogin, async (req, res) => {
        const { title, body , category, timestamp } = req.body;

        const post = new Post({
            title,
            body, 
            category,
            timestamp,
            _user: req.user.id,
        })
        await post.save();
    }); 
}