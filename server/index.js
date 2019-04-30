const express = require('express');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const passport = require('passport');
require('./models/AddPost');
require('./models/User');
require('./services/passport');
const keys = require('./config/keys');



mongoose.connect(keys.mongoURI, { useNewUrlParser: true})
.then(()=> console.log("Mongodb Connected"))
.catch(err => console.log(err));

const app = express();

app.use(
    cookieSession( {
        maxAge: 30 * 24 * 60 * 60 *1000, 
        keys: [keys.cookieKey],
    })
);

app.use(passport.initialize());
app.use(passport.session());

require('./routes/authRoutes')(app);

if (process.env.NODE_ENV === 'production') {
    app.use(express.static('build'));

    const path = require('path');
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, '../client/build', 'index.html'));
    })
}




const PORT = process.env.PORT || 4000; 
app.listen(PORT);