const requireLogin = require('../middlewares/requireLogin');

module.exports = app => {
    app.post('https://mwave317.herokuapp.com/api/reply', requireLogin, (req, res) => {
        
    });
}