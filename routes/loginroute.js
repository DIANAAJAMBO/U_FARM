const express = require('express');
const router = express.Router();
const passport = require('passport');
const RegisterFO = require("../models/registeredFO")
const RegisterUF = require("../models/registeredUF")
const User = require("../models/registeredUser")

router.get("/login", (req, res) => {
  res.render("login")
})


router.post("/login", passport.authenticate("local", {failureRedirect: "/login"}), async(req,res)=>{
  req.session.user = req.user;
  
  if(req.user.role == "agricofficer"){
    const aoUser = await AoUser.findOne({ username: req.user.username, password: req.user.password });
    if(aoUser){
      req.session.aoUser = aoUser;
      res.redirect("/aodash");
    } else {
      res.send("you are not registered");
    }
  } else if(req.user.role == "urban farmer"){
    const ufUser = await RegisterUF.findOne({ username: req.user.username, password: req.user.password });
    if(ufUser){
      req.session.ufUser = ufUser;
      res.redirect("/ufdash");
    } else {
      res.send("you are not registered");
    }
  } else if(req.user.role == "farmerOne"){
    const foUser = await RegisterFO.findOne({ username: req.user.username, password: req.user.password });
    if(foUser){
      req.session.foUser = foUser;
      res.redirect("/fodash");
    } else {
      res.send("you are not registered");
    }
  }else if(req.user.role == "customer"){
    const gpUser = await User.findOne({ username: req.user.username, password: req.user.password });
    if(gpUser){
      req.session.gpUser = gpUser;
      res.redirect("/customerDash");
    } else {
      res.send("you are not registered");
    }
  }
});






module.exports = router