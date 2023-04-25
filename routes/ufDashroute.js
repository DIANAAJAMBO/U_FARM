const express = require('express');
const router = express.Router();



router.get("/ufdash",(req,res)=>{
    res.render("ufDash")
  })

 




module.exports = router