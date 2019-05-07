const requireLogin = require('../middlewares/requireLogin');
const mongoose = require('mongoose');
const Post = mongoose.model('post');

module.exports = app => {
    app.get('/api/post/', (req, res) => {
        res.send(res);
    });

    app.post('/api/addpost', requireLogin, async (req, res) => {
        const { title, body , category, comment} = req.body;

        const post = new Post({
            title,
            body, 
            category,
            comment,
            _user: req.user.id,
        })
        await post.save();
    }); 
}