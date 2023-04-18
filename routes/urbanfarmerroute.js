const express = require('express');
const router = express.Router();



router.get("/urbanfarmer",(req,res)=>{
    res.render("urbanfarmers")
  })

 




module.exports = router