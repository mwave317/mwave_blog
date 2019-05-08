const mongoose = require("mongoose");
const { Schema } = mongoose;
const CommentSchema = require('./Comment');

const postSchema = new Schema({
    title: {
        type: String,
        required: [true]
    },

    body: {
        type: String,
        required: [true]
    },

    timestamp: {
        type: Date,
        default: Date.now(),
    }, 

    category: {
        type: String,
        required: [true]
    },
    _user: { 
        type: Schema.Types.ObjectId,
        ref: 'User',
     },
    _comment: {
        type: Schema.Types.ObjectId,
        ref: 'Comment',
        body: [CommentSchema]
     }
});


mongoose.model('post', postSchema);