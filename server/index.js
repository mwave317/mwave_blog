const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cookieSession = require('cookie-session');
const passport = require('passport');
const keys = require('./config/keys');
require('./models/User');
require('./models/Post');
require('./models/Contact');
require('./models/Comment');
require('./models/About');
require('./models/Reply');
require('./services/passport');


mongoose.connect(keys.mongoURI, { useNewUrlParser: true})
.then(()=> console.log("Mongodb Connected"))
.catch(err => console.log(err));

const app = express();

app.use(bodyParser.json());
app.use(
    cookieSession( {
        maxAge: 30 * 24 * 60 * 60 *1000, 
        keys: [keys.cookieKey],
    })
);

app.use(passport.initialize());
app.use(passport.session());

require('./routes/authRoutes')(app);
require('./routes/postRoute')(app);
require('./routes/contactRoutes')(app);
require('./routes/commentRoutes')(app);
require('./routes/replyRoutes')(app);


if (process.env.NODE_ENV === 'production') {
    const path = require('path');
    app.use(express.static(path.resolve(__dirname, '../client/build')));

    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, '../client/build', 'index.html'));
    })
}

const PORT = process.env.PORT || 4000; 
app.listen(PORT);