const requireLogin = require('../middlewares/requireLogin');
const mongoose = require('mongoose');
const Comment = mongoose.model('comment');

module.exports = app => {
    app.get('https://mwave317.herokuapp.com/api/comment/', (req, res) => {
        res.send(res);
    });
    
    app.post('https://mwave317.herokuapp.com/api/comment', requireLogin, (req, res) => {
        const { comment } = req.body;

        const addComment = new Comment ({
            comment,
            _user: req.user.id,
        });
        addComment.save();
    });
}