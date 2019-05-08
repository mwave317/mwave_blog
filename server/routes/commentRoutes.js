const requireLogin = require('../middlewares/requireLogin');
const mongoose = require('mongoose');
const Comment = mongoose.model('comment');

module.exports = app => {
    app.get('/api/comment/', (req, res) => {
        res.send(res);
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