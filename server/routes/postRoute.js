const requireLogin = require('../middlewares/requireLogin');

module.exports = app => {
    app.post('/api/addpost', requireLogin, (req, res) => {
        const { title, body , category, comment} = req.body;

        const post = new Post({
            title,
            body, 
            category,
            comment: comment.split(',').map(comment =>  ({ comment })),
            _user: req.user.id,
        })
    });
}