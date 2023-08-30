const mongoose = require('mongoose');
const { Schema } = mongoose;

const driverSchema = new Schema({
    
    name : String,
    phone_no: String,
    amount: String,
    date:{
        type: Date,
        default: Date.now
    },
    type:{
        type: String,
        default:"driver"
    },
  });
  drivermodel=mongoose.model("driver",driverSchema) 
  
module.exports=drivermodel;