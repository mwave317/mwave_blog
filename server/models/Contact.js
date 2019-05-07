const mongoose = require("mongoose");
const { Schema } = mongoose;


const contactSchema = new Schema({
    from: String,
    bcc: String,
    body: {
        type: String,
    },
    subject: {
        type: String,
    },
    to: {
        type: String,
    },
    text: {
        type: String,
    },
    html: {
        type: String
    },
    _user: { type: Schema.Types.ObjectId, ref: 'User'},
    timeStamp: Date, 
});

mongoose.model('contact', contactSchema);