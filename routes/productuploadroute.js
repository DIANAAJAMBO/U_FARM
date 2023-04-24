const express = require('express');
const router = express.Router();
const multer = require('multer');
const Products = require('../models/product');

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




router.get("/upload", (req, res) => {
  res.render("productupload")
  // console.log(req.body)
})


//posting into the database
router.post("/upload", imageupload.single('productimage'), async (req, res) => {
  try {
    const products = new Products(req.body);
    products.productimage = req.file.filename
    await products.save()
    res.redirect("/uploadedproduct")      //we redirect to a path
    console.log(req.body)
  }
  catch (err) {
    // res.status(400).render("register")
    console.log(err)
  }
})


//retrieving from the database
router.get("/uploadedproduct", async (req, res) => {
  try {
    let Items = await Products.find();
    // console.log(items)
    res.render("uploadedproducts", { products: Items })    //we render a file
  }
  catch (err) {
    console.log(err)
    res.send("failed to retrieve")
  }
})

//editing a database
router.get("/edit_produceupload/:id",async(req,res)=>{
  try{
    const Item = await Products.findOne({_id:req.params.id});
    res.render("edit_produceupload",{product:Item});
  }
  catch(error){
    res.send("could not find produce");
    console.log(error)
  }
});

router.post("/edit_produceupload/",async(req,res)=>{
  try{
    await Products.findOneAndUpdate({_id:req.query.id},req.body)
    res.redirect("/uploadedproduct")
  }
  catch(err){
    res.send("failed to update produce details")
    console.log(err)
  }
});




module.exports = router