const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
    
    name : String,
    email: String,
    amount: String,
    date:{
        type: Date,
        default: Date.now
    },
    type:{
        type: String,
        default:"user"
    },
  });
  usermodel=mongoose.model("user",userSchema) 
  
module.exports=usermodel;