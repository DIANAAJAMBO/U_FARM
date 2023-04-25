const express = require('express');
const router = express.Router();



router.get("/fodash",(req,res)=>{
    res.render("foDash")
  })

 




module.exports = router