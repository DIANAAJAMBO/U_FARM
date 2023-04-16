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


  //editing a database
router.get("/edit_farmerOne/:id",async(req,res)=>{
  try{
    const item = await RegisterFO.findOne({_id:req.params.id});
    res.render("edit_farmerOne",{farmerOne:item});
  }
  catch(error){
    res.send("could not find farmerOne");
    console.log(error)
  }
});

router.post("/edit_farmerOne/",async(req,res)=>{
  try{
    await RegisterFO.findOneAndUpdate({_id:req.query.id},req.body)
    res.redirect("/farmerOne")
  }
  catch(err){
    res.send("failed to update farmerOne details")
    console.log(err)
  }
});



module.exports = router