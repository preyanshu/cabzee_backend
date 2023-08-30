const express = require("express")
const router = express.Router();
const drivermodel=require("../models/Driver")


router.post("/", async (req, res) => {

  try {
    data=req.body;  
   console.log(data)

   let bool=await drivermodel.findOne({phone_no: data.phone_no});
   console.log(bool)
        if(bool){
            res.status(400).json({success:"false",message:"Phone no already registered"})
        }
        else{
          const details = drivermodel({
       
            name:data.name
            ,
            phone_no :data.phone_no,
            
           
          })
     
        details.save().then(()=>{
             
            console.log({success:"true",message:"Driver Successfully Registered"})
            res.json({success:"true",message:"Driver Successfully Registered"});
            })

        }
  

  
     
  
    
  } catch (error) {
    res.status(500).json({success:"false",message:error.message})
    
  }
    

    
    

})
//2nd route 
router.get("/get/:phoneno", async (req, res) => {

    try{let phone=req.params.phoneno;
  
        // let data=await requestmodel.find();
        let data=await drivermodel.findOne({"phone_no":phone});
        res.json({name:data.name});

        
    

        
  

  
     
  
    
  } catch (error) {
    res.status(500).json({success:"false",error:error.message})
    
  }
    

    
    

})
module.exports = router;
