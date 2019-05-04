const mongoose = require('mongoose');
const { Schema } = mongoose;

const senderSchema = new Schema({
    email: String,
});

module.exports = senderSchema;