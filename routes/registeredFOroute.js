const express = require('express');
const router = express.Router();
const RegisterFO = require("../models/registeredFO")


router.get("/registerFO",(req,res)=>{
    res.render("registerFO")
  })

  //posting into the database
router.post("/registerFO", async(req,res)=>{
    try{
      const register = new RegisterFO(req.body);
      await register.save()
      res.redirect("/farmerOne")      //we redirect to a path
      console.log(req.body)
    }
    catch(err){
      // res.status(400).render("register")
      console.log(err)
    }
  })


  //retrieving from the database
  router.get("/farmerOne",async(req,res)=>{
    try{
      let items = await RegisterFO.find();
      // console.log(items)
      res.render("farmerOnes",{farmerOnes:items})    //we render a file
    }
    catch(err){
      console.log(err)
      res.send("failed to retrieve student details")
    }
  })




module.exports = router