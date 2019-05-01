const mongoose = require("mongoose");


const { Schema } = mongoose;

const contactSchema = new Schema({
    title: {
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
        required: true,
    }
});

mongoose.model('contact', contactSchema);