const express = require("express")
const router = express.Router();
// const requestmodel=require("../models/request")
// const confirmedmodel=require("../models/confirmedreq")
const recievedmodel=require("../models/recievedreq")

router.put("/", async (req, res) => {

    try {
    let data=req.body;
    let entry=await recievedmodel.findOne(data)
    console.log(entry)
    entry.set({user:{},driver:{}});
  
await entry.save().then(console.log("ubdated 1st user"));


   

res.json({success : "success"});
    
    
    
        
    } catch (error) {
        console.log(error.message)
        res.json({success : "false"});
        
    }
    

    

    
    

})
router.put("/2", async (req, res) => {

    try {
    let data=req.body;
    let entry=await recievedmodel.findOne(data)
    console.log(entry)
    entry.set({user:{}});
  
await entry.save().then(console.log("ubdated 1st user"));


   

res.json({success : "success"});
    
    
    
        
    } catch (error) {
        console.log(error.message)
        res.json({success : "false"});
        
    }
    

    

    
    

})
module.exports = router;