const express = require('express');
const router = express.Router();
const multer = require('multer');
const Products = require('../models/product');

let storage = multer.diskStorage({
    destination:(req,file,cb)=>{cb(null,"public/productimages")},
    filename:(req,file,cb)=>{cb(null,file.originalname)}
  })
  let imageupload = multer({storage:storage})


router.get("/upload",(req,res)=>{
    res.render("productupload")
  })


 //posting into the database
 router.post("/upload", imageupload.single('productimage'), async(req,res)=>{
    try{
      const products = new Products(req.body);
      products.productimage = req.file.originalname
      await products.save()
      res.redirect("")      //we redirect to a path
      console.log(req.body)
    }
    catch(err){
      // res.status(400).render("register")
      console.log(err)
    }
  }) 
 

 //retrieving from the database
 router.get("",async(req,res)=>{
    try{
      let Items = await Products.find();
      // console.log(items)
      res.render("uploadedproducts",{product:Items})    //we render a file
    }
    catch(err){
      console.log(err)
      res.send("failed to retrieve")
    }
  })



module.exports = router