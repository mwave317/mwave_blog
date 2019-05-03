const mongoose = require("mongoose");


const { Schema } = mongoose;

const contactSchema = new Schema({
    sender: { 
        type: String,
        required: true,
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