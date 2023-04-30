const express = require('express');
const router = express.Router();
const passport = require('passport');
const User = require("../models/users")



router.get("/login", (req, res) => {
  res.render("login")
})




router.post("/login", passport.authenticate("local", { failureRedirect: "/login" }), async (req, res) => {
  req.session.user = req.user
  let userExist = await User.findOne({
    username: req.user.username, password: req.user.password
  });
  console.log("this user exists", userExist)
  console.log("this is the user session:", req.session)
  if (req.user.role === "agricofficer" && userExist) {
    res.redirect("/aodash")
  }
  else if (req.user.role === "urban farmer" && userExist) {
    res.redirect("/ufdash")
  }
  else if (req.user.role === "farmerOne" && userExist) {
    res.redirect("/fodash")
  }
  else { res.send("you are not registered") }
})

//logging out
router.post("/logout", (req, res) => {
  if (req.session) {
    req.session.destroy((error) => {
      if (error) {
        res.status(400).send("unable to log out User")
      }
      else {
        return res.redirect("/login")
      }
    })
  }
})



module.exports = router