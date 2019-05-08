const requireLogin = require('../middlewares/requireLogin');
const mongoose = require('mongoose');
const Post = mongoose.model('post');

module.exports = app => {

    app.get('https://mwave317.herokuapp.com/api/posts/recent', async (req, res) => {
        const posts = await Post.find().sort( {$natural: -1}).limit(1);
            res.send(posts);
    });

    app.get('https://mwave317.herokuapp.com/api/posts/recent/topthree', async (req, res) => {
        const recent = await Post.find().sort( {$natural: -1}).limit(4);
        recent.shift();
        res.send(recent);
    })

    app.get('https://mwave317.herokuapp.com/api/posts/:postId', (req, res) => {
        res.send(res);
    });

    app.post('https://mwave317.herokuapp.com/api/posts/add', requireLogin, async (req, res) => {
        const { title, body , category, comment } = req.body;

        const post = new Post({
            title,
            body, 
            category,
            comment,
            _user: req.user.id,
        })
        await post.save();
    }); 

    app.put('https://mwave317.herokuapp.com/api/posts/:postId', requireLogin, async (req, res) => {

    });

    app.delete('https://mwave317.herokuapp.com/api/posts/:postId', requireLogin, async (req, res) => {

    });
}