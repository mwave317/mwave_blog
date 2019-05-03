const mongoose = require("mongoose");
const { Schema } = mongoose;
const CommentSchema = require('./Comment');

const postSchema = new Schema({
    title: {
        type: String,
        required: [true,
            'Please enter a title.']
    },

    body: {
        type: String,
        required: [true, 'Plese enter a post.']
    },

    timestamp: {
        type: Date,
        default: Date.now(),
    }, 

    category: {
        type: String,
        required: [true]
    },
    _comment: {
        type: Schema.Types.ObjectId,
        ref: 'Comment',
        body: [CommentSchema]
     }
});


mongoose.model('posts', postSchema);