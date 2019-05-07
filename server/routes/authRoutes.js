const passport =require('passport');


module.exports = app => {

    app.get(
        '/auth/google', 
        passport.authenticate('google', {
            scope: ['profile', 'email'],
        })
    );
    
    app.get(
        'https://mwave317.herokuapp.com/auth/google/callback', passport.authenticate('google'),
        (req, res) => {
            res.redirect('https://mwave317.herokuapp.com');
        }
    );

    app.get('/api/logout', (req, res) => {
        req.logout();
        res.redirect('/')
    });

    app.get(
        '/api/current_user', (req, res) => {
            res.send(req.user);            
    });
};