const express = require('express');
const router = express.Router();
const connectEnsureLogin = require("connect-ensure-login")
const RegisterFO = require("../models/registeredFO")


//posting into the database
router.post("/aodash", async (req, res) => {
  console.log(req.body)
  try {
    const registerfo = new RegisterFO(req.body);
    let UserName = await RegisterFO.findOne({ username: req.body.username })
    if (UserName) {
      return res.send("This username already exists")
    }
    else {
      await RegisterFO.register(registerfo, req.body.password, (error) => {
        if (error) {
          throw error    //works like console.log(error)
        }
        res.redirect("/farmerOne")
      })
    }
  }
  catch (error) {
    res.status(400).send("sorry it seems there is trouble accessing this page")
    console.log(error)
  }
});


//retrieving from the database
router.get("/aodash", connectEnsureLogin.ensureLoggedIn(), async (req, res) => {
  if (req.user.role === 'agricofficer') {
    try {
      let items = await RegisterFO.find();
      // console.log(items)
      res.render("aoDash", { farmerOnes: items })    //we render a file
    }
    catch (err) {
      console.log(err)
      res.send("failed to retrieve student details")
    }

  } else {
    res.redirect("/login")
  }

})


//editing a database
router.get("/edit_farmerOne/:id", async (req, res) => {
  try {
    const item = await RegisterFO.findOne({ _id: req.params.id });
    res.render("edit_farmerOne", { farmerOne: item });
  }
  catch (error) {
    res.send("could not find farmerOne");
    console.log(error)
  }
});

router.post("/edit_farmerOne/", async (req, res) => {
  try {
    await RegisterFO.findOneAndUpdate({ _id: req.query.id }, req.body)
    res.redirect("/aodash")
  }
  catch (err) {
    res.send("failed to update farmerOne details")
    console.log(err)
  }
});



module.exports = router