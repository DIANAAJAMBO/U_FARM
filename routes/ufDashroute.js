const express = require('express');
const router = express.Router();
const multer = require('multer');
const connectEnsureLogin = require("connect-ensure-login")
const Produce = require('../models/produce');

//setting up storage config for multer by using a disk storage engine
let storage = multer.diskStorage({
  destination: (req, file, cb) => { cb(null, "public/produceimages") }, //specifies the folder where the files are stored
  filename: (req, file, cb) => { cb(null, file.originalname) } //specifies the name of the file within the folder
});

//middleware function that can be used in a route handler to handle file uploads
let imageupload = multer({ storage: storage });


//posting produce uploads to the database
router.post("/ufdash", imageupload.single('produceimage'), async (req, res) => {
  try {
    const produce = new Produce(req.body);
    produce.produceimage = req.file.filename  //associating the uploaded file with the Produce object
    await produce.save()
    res.redirect("/ufdash")
    console.log(req.body)
  }
  catch (err) {
    console.log(err)
  }
})


//retrieving uploaded produce from the database
router.get("/ufdash", connectEnsureLogin.ensureLoggedIn(), async (req, res) => {
  if (req.user.role == "urbanfarmer") {
    try {
      let Items = await Produce.find();
      res.render("ufDash", { produce: Items })
    }
    catch (err) {
      console.log(err)
      res.send("failed to retrieve")
    }
  }

})



module.exports = router