const express = require('express');
const router = express.Router();



router.get("/customerdash",(req,res)=>{
    res.render("customerDash")
  })

 




module.exports = router