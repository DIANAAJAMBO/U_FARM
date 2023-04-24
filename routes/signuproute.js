const express = require('express');
const router = express.Router();
const User = require("../models/registeredUser")


router.get("/signup", (req, res) => {
  res.render("signup")
})



//posting into the database
router.post("/signup",async(req,res)=>{
  console.log(req.body)
  try{
    const user = new User(req.body);
    let userName = await User.findOne({username: req.body.username})
    if(userName){
      return res.send("This username already exists")
    }
    else {
      await User.register(user,req.body.password,(error)=>{
        if(error){
          throw error    //works like console.log(error)
        }
        res.redirect("/login")
      })
    }
  }
  catch(error){
    res.status(400).send("sorry it seems there is trouble accessing this page")
    console.log(error)
  }
});


module.exports = router