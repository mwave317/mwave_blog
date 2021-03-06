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
    
    app.patch('/api/about/update', async (req, res) => { 
        const updateAbout = await About.updateOne( {_id : req.body.aboutId}, { $set: { body: req.body.body}});
        res.send(updateAbout);
    });
}