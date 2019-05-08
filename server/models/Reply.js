const mongoose = require("mongoose");
const { Schema } = mongoose;

const replySchema = new Schema({
   reply: { 
    type:String,
    required: true,
   },
   timeStamp: {
    type: Date,
    default: Date.now(),
   },
   reviewed: {
    type: Boolean,
    default: false,
   },
   _user: { 
      type: Schema.Types.ObjectId,
      ref: 'User',
   }, 
   // _comment: { 
   //    type: Schema.Types.ObjectId,
   //    ref: 'Comment',
   // },
});

module.exports = replySchema;