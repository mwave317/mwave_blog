const mongoose = require("mongoose");
const { Schema } = mongoose;
const SenderSchema = require('./Sender');


const contactSchema = new Schema({
    senders: SenderSchema,
    body: {
        type: String,
    },
    subject: {
        type: String,
    },
    recipient: {
        type: String ,
        default: 'mwave317@gmail.com',
}, 
    _user: { type: Schema.Types.ObjectId, ref: 'User'},
    timeStamp: Date,
});

mongoose.model('contact', contactSchema);