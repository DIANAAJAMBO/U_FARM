const express = require('express');
const router = express.Router();
const connectEnsureLogin = require("connect-ensure-login")
const RegisterUF = require("../models/registeredUF")
const User = require('../models/users')
const Produce = require('../models/produce');

//posting into the database
router.post("/fodash", async (req, res) => {
  console.log(req.body)
  try {
    const items = new RegisterUF(req.body);
    const user = new User(req.body)
    let Username = await User.findOne({ username: req.body.username })
    if (Username) {
      return res.send("This urban farmer already exists")
    }
    else {
      items.save()
      User.register(user, req.body.password, (error) => {
        if (error) {
          throw error
        }
        res.redirect("/fodash")
      })
    }
  }
  catch (error) {
    res.status(400).send("sorry it seems there is trouble accessing this page")
    console.log(error)
  }
});


//retrieving urban farmers and produce from the database
router.get("/fodash", async (req, res) => {
  try {
    let items = await RegisterUF.find();
    let Items = await Produce.find();
    res.render("foDash", { urbanfarmers: items,produce: Items })    //we render a file
  }
  catch (err) {
    console.log(err)
    res.send("failed to retrieve details")
  }


});



//editing status for produce upload.
router.get("/edit_produceupload/:id", async (req, res) => {
  try {
    const Item = await Produce.findOne({ _id: req.params.id });
    res.render("edit_produceupload", { produce: Item });
  }
  catch (error) {
    res.send("could not find produce");
    console.log(error)
  }
});

router.post("/edit_produceupload/", async (req, res) => {
  try {
    await Produce.findOneAndUpdate({ _id: req.query.id }, req.body)
    res.redirect("/uploadedproduct")
  }
  catch (err) {
    res.send("failed to update produce details")
    console.log(err)
  }
});


module.exports = router