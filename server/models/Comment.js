const mongoose = require("mongoose");
const { Schema } = mongoose;

const commentSchema = new Schema({
   commentId: {
      type: String,
   },
   comment: { 
    type:String,
   },
   timestamp: {
     type: String,
     required: [true]
   },
   reviewed: {
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