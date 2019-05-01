const mongoose = require("mongoose");


const { Schema } = mongoose;

const commentSchema = new Schema({
   comment: { 
    type:String,
    required: true,
   },
   timeStamp: {
    type: Date,
    default: Date.now(),
   },
   userId: {
   type: String
   }
});

mongoose.model('contact', commentSchema);