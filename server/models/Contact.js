import mongoose from 'mongoose';


const { Schema } = mongoose;

const contactSchema = new Schema({
    title: String,
    body: String,
    subject: String,
    recipient: String,
});

mongoose.model('contact', contactSchema);