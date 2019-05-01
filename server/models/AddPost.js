const mongoose = require("mongoose");
const { Schema } = mongoose;

const addPostSchema = new Schema({
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
    }
});


mongoose.model("posts", addPostSchema);