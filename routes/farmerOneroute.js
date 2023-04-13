const express = require('express');
const router = express.Router();



router.get("/farmerOne",(req,res)=>{
    res.render("farmerOnes")
  })

 




module.exports = router