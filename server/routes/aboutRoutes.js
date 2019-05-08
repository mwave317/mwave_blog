const requireLogin = require('../middlewares/requireLogin');
const mongoose = require('mongoose');
const About = mongoose.model('about');

module.exports = app => {

    app.get('/api/about/about', async (req, res) => {
        const about = await About.find().limit(1);
            res.send(about);
    });

    app.post('/api/about/add', requireLogin, async (req, res) => {
        const { body } = req.body;

        const about = new About({
            body, 
            _user: req.user.id,
        });
        await about.save();
    }); 
}