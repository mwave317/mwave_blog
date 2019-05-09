const requireLogin = require('../middlewares/requireLogin');

module.exports = app => {
    app.post('/api/reply', requireLogin, (req, res) => {
        const { reply, _comment, _post, } = req.body;

        const addComment = new Comment ({
            reply,
            _comment,
            _post,
            _user: req.user.id,
        });
        addComment.save();
    });
}