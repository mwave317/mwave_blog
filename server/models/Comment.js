const mongoose = require("mongoose");
const { Schema } = mongoose;

const commentSchema = new Schema({
   comment: { 
    type:String,
   },
   timeStamp: {
    type: Date,
    default: Date.now(),
   },
   verified: {
    type: Boolean,
    default: false,
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