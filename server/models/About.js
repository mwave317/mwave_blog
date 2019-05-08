const mongoose = require("mongoose");
const { Schema } = mongoose;

const aboutSchema = new Schema({
    body: {
        type: String,
        required: true,
    },
    _user: { 
        type: Schema.Types.ObjectId,
        ref: 'User',
    },
});

mongoose.model('about', aboutSchema);