const express = require('express');
const router = express.Router();
const RegisterUF = require("../models/registeredUF")


router.get("/registerUF", (req, res) => {
  res.render("registerUF")
})

//   //posting into the database
// router.post("/registerUF", async(req,res)=>{
//     try{
//       const registeruf = new RegisterUF(req.body);
//       await registeruf.save()
//       res.redirect("/urbanfarmers")      //we redirect to a path
//       console.log(req.body)
//     }
//     catch(err){
//       // res.status(400).render("register")
//       console.log(err)
//     }
//   })

//posting into the database
router.post("/registerUF", async (req, res) => {
  console.log(req.body)
  try {
    const registeruf = new RegisterUF(req.body);
    const Username = await RegisterUF.findOne({ username: req.body.username })
    if (Username) {
      return res.send("This urban farmer already exists")
    }
    else {
      await RegisterUF.register(registeruf, req.body.password, (error) => {
        if (error) {
          throw error
        }
        res.redirect("/urbanfarmer")
      })
    }
  }
  catch (error) {
    res.status(400).send("sorry it seems there is trouble accessing this page")
    console.log(error)
  }
});


//retrieving from the database
router.get("/urbanfarmer", async (req, res) => {
  try {
    let items = await RegisterUF.find();
    // console.log(items)
    res.render("urbanfarmers", { urbanfarmers: items })    //we render a file
  }
  catch (err) {
    console.log(err)
    res.send("failed to retrieve urban farmer details")
  }
})


//   //editing a database
// router.get("/edit_farmerOne/:id",async(req,res)=>{
//   try{
//     const item = await RegisterFO.findOne({_id:req.params.id});
//     res.render("edit_farmerOne",{farmerOne:item});
//   }
//   catch(error){
//     res.send("could not find farmerOne");
//     console.log(error)
//   }
// });

// router.post("/edit_farmerOne/",async(req,res)=>{
//   try{
//     await RegisterFO.findOneAndUpdate({_id:req.query.id},req.body)
//     res.redirect("/farmerOne")
//   }
//   catch(err){
//     res.send("failed to update farmerOne details")
//     console.log(err)
//   }
// });



module.exports = router