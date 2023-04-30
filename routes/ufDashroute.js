const express = require('express');
const router = express.Router();
const multer = require('multer');
const Produce = require('../models/produce');

/*
This block of code sets up the storage configuration for multer. It creates a disk storage engine that gives you full control over storing files to disk.
The 'destination' function specifies the folder where files should be stored. In this case, it is set to the 'public/productimages' folder.
The 'filename' function specifies the name of the file within the folder. In this case, it uses the original name of the uploaded file.
*/
let storage = multer.diskStorage({
  destination: (req, file, cb) => { cb(null, "public/productimages") },
  filename: (req, file, cb) => { cb(null, file.originalname) }
});

let imageupload = multer({ storage: storage });


//posting into the database
router.post("/upload", imageupload.single('productimage'), async (req, res) => {
  try {
    const products = new Products(req.body);
    products.productimage = req.file.filename
    await products.save()
    res.redirect("/ufdash")      //we redirect to a path
    console.log(req.body)
  }
  catch (err) {
    // res.status(400).render("register")
    console.log(err)
  }
})


//retrieving uploaded produce from the database
router.get("/ufdash", async (req, res) => {
  try {
    let Items = await Produce.find();
    // console.log(items)
    res.render("ufDash", { produce: Items })    //we render a file
  }
  catch (err) {
    console.log(err)
    res.send("failed to retrieve")
  }
})



module.exports = router