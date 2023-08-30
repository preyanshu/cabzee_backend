const express = require("express")
const router = express.Router();
const usermodel=require("../models/users")

router.post("/", async (req, res) => {

  try {
    data=req.body;  
   console.log(data)
   let bool=await usermodel.findOne({email: data.email});
   console.log(bool)
        if(bool){
            res.status(400).json({success:"false",error:" already exist"})
        }
        else{
          const details = usermodel({
       
            name:data.name
            ,
            email :data.email,
            
           
          })
     
        details.save().then(()=>{
             
            console.log("user registered")
            res.json(req.body);
            })

        }
     
   
    
  } catch (error) {
    res.status(500).json({success:"false",error:error.message})
    
  }
    

    
    

})
module.exports = router;

