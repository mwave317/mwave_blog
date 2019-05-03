const mongoose = require("mongoose");


const { Schema } = mongoose;

const contactSchema = new Schema({
    _user: { 
        type: Schema.Types.ObjectId,
        ref: 'User',
     },
    body: {
        type: String,
        required: true,
    },
    subject: {
        type: String,
        required: true,
    },
    recipient: {
        type: String,
        default: 'mwave317@gmail.com',
    }
});

mongoose.model('contact', contactSchema);