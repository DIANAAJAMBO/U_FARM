const express = require('express');
const router = express.Router();



router.get("/uploadedproduct",(req,res)=>{
    res.render("uploadedproducts")
  })

 




module.exports = router