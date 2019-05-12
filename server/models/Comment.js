const mongoose = require("mongoose");
const { Schema } = mongoose;

const commentSchema = new Schema({
   comment: { 
    type:String,
   },
   timestamp: {
     type: String,
     required: [true]
   },
   verified: {
    type: Boolean,
    default: false,
   },
   firstName: {
      type: String,
   },
   _user: { 
      type: Schema.Types.ObjectId,
      ref: 'User',
   },
   _post: {
      type: Schema.Types.ObjectId,
      ref: 'Post',
   },
});

mongoose.model('comment', commentSchema);