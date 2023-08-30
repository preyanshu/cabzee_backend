const express = require("express")
const router = express.Router();
const requestmodel=require("../models/request")
const confirmedmodel=require("../models/confirmedreq")
const recievedmodel=require("../models/recievedreq")



//route 1
router.get("/request/:usertype", async (req, res) => {
    
    let type=req.params.usertype;
    if(type=="user"){
        // let data=await requestmodel.find();
        let data=await requestmodel.find({"user.email":req.header("email")});
        res.json(data);

        
    }
    else if(type=="driver"){
        let data=await requestmodel.find();
        res.json(data);


    }






    

    

    
    

})
//route 2
router.get("/recievedreq/:usertype", async (req, res) => {

    let type=req.params.usertype;
    if(type=="user"){
        // let data=await requestmodel.find();
        let data=await recievedmodel.find({"user.email":req.header("email")});
        res.json(data);

        
    }
    else if(type=="driver"){
        let data=await recievedmodel.find({"driver.phone":req.header("phone")});
        res.json(data);


    }






    

    

    
    

})
//route 3
router.get("/confirmedreq/:usertype", async (req, res) => {
    let type=req.params.usertype;
    if(type=="user"){
        // let data=await requestmodel.find();
        let data=await confirmedmodel.find({"user.email":req.header("email")});
        res.json(data);

        
    }
    else if(type=="driver"){
        let data=await confirmedmodel.find({"driver.phone":req.header("phone")});
        res.json(data);


    }




    

    

    
    

})

module.exports = router;