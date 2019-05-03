const requireLogin = require('../middlewares/requireLogin');

module.exports = app => {
    app.post('/api/reply', requireLogin, (req, res) => {
        
    });
}