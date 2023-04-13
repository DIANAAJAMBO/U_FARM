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





module.exports = router