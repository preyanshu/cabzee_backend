const mongoose=require("mongoose");
require("dotenv").config()
const mongoURI=process.env.DB_URL
const connecttomongo=async()=> {
    await mongoose.connect(mongoURI)
    console.log("connected successfully to database")
}

module.exports=connecttomongo; 