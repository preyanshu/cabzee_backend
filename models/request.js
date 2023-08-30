const mongoose = require('mongoose');
const { Schema } = mongoose;

const requestSchema = new Schema({
    
    pickup : String,
    destination: String,
    date: String,
    time: String,
    user:{
        name:String,
        email:String

    },
    // confirmation: String,
    driver:{
        name : String,
        phone :String,
        default:{}
    },
    postdate: {
        type: String,
        default: new Date().toLocaleString() // Set the default value using toLocaleString()
    },
    img: {
        type:String,
        default: "image link user"

    }



    
  });
  requestmodel=mongoose.model("request",requestSchema) 
  
module.exports=requestmodel;