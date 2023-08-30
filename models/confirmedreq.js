const mongoose = require('mongoose');
const { Schema } = mongoose;

const confirmedSchema = new Schema({
    pickup: String,
    destination: String,
    date: String,
    time: String,
    user: {
        name: String,
        email: String
    },
    driver: {
        name: String,
        phone: String
    },
    price: {
        type: String,
        default: "NA"
    },
    img: {
        type:String,
        default: "image link user"

    },
    postdate: {
        type: String,
        default: new Date().toLocaleString() // Set the default value using toLocaleString()
    }
    
  });
  confirmedmodel=mongoose.model("confirmedreq",confirmedSchema) 
  
module.exports=confirmedmodel;