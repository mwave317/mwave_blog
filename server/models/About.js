const mongoose = require("mongoose");


const { Schema } = mongoose;

const aboutSchema = new Schema({
    body: {
        type: String,
        required: true,
    },

});