const requireLogin = require('../middlewares/requireLogin');

module.exports = app => {
    app.post('/api/comment', requireLogin, (req, res) => {

    });
}