const express = require("express")
const router = express.Router();
const requestmodel=require("../models/request")
const confirmedmodel=require("../models/confirmedreq")
const recievedmodel=require("../models/recievedreq")



////request endpoint no 1
router.post("/request", async (req, res) => {

  try {
    


    let data=req.body;  
   console.log(data)
   
     
   const details = requestmodel({
    
    pickup : data.pickup,
    destination: data.destination,
    date: data.date,
    time: data.time,
    user: {
      name:data.user.name,
      email:data.user.email
    },
    img : data.img
    // confirmation: String,
    


       
       
       
      
     })

   details.save().then(()=>{
        
       console.log("request created")
       res.json(req.body);
       })
    
  } catch (error) {
    console.log(error.message)
    
  }
    

    
    

})


////request endpoint no 2
router.post("/recievedreq", async (req, res) => {

  try {
    data=req.body;  
   console.log(data)
    let bool=await recievedmodel.findOne(req.body);
    console.log(bool)
    // console.log(!bool);

    if(bool){
      res.json({success:"false",message:"You cant make multiple same offers"})
    }
    else{
      const details = recievedmodel({
        pickup : data.pickup,
        destination: data.destination,
        date: data.date,
        time: data.time,
         user: {
          name:data.user.name,
          email:data.user.email
        },
         driver: {
          name:data.driver.name,
          phone:data.driver.phone
        },
        // confirmation: String,
        
        price:data.price,
        img:data.img,
        
        
    
           
           
           
          
         })
    
       details.save().then(()=>{
            
           console.log("recieved request created")
           res.json({success:"true",message:"Offer posted successfully"});
           })

    }
     

    
  } catch (error) {
    res.json({success:"false",message:"internal server error occurred"});
    
    
  }

    
})
////request endpoint no 3
router.post("/confirmedreq", async (req, res) => {

  try {
    data=req.body;  
  //  console.log(data)
   let a={
    pickup : data.pickup,
    destination: data.destination,
    date: data.date,
    time: data.time,
     user: {
      name:data.user.name,
      email:data.user.email
    },
     driver: {
      name:data.driver.name,
      phone:data.driver.phone
    },
    // confirmation: String,
    
    price:data.price
       
       
       
      
     }
     
   const details = confirmedmodel(a)

   details.save().then(()=>{
        
       console.log("confirmed request created")
       res.json({success:"true",message:"Ride successfuly Scheduled"});
       })
    
  } catch (error) {
    console.log(error.message)
    res.json({success:"false",message:"internal server error occurred"});
    
  }

    
})
module.exports = router;
