const mongoose = require("mongoose");
const { Schema } = mongoose;


const replySchema = new Schema({
   reply: { 
    type:String,
    required: true,
   },
   timestamp: {
    type: String,
    required: true,
   },
   reviewed: {
    type: Boolean,
    default: false,
   },
   firstName: {
      type: String,
      required: true,
   },

   _user: { 
      type: Schema.Types.ObjectId,
      ref: 'User',
   }, 
   _post: {
      type: Schema.Types.ObjectId,
      ref: 'Post',
   },
   _comment: { 
      type: Schema.Types.ObjectId,
      ref: 'Comment',
   },
});

mongoose.model('reply', replySchema);