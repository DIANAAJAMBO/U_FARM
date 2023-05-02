//importing environments
const express = require('express');
const router = express.Router();
const connectEnsureLogin = require("connect-ensure-login") //page can only be accessed upon login
const RegisterFO = require("../models/registeredFO")
const User = require('../models/users')


//posting farmerOne into the database
router.post("/aodash", async (req, res) => {
    console.log(req.body)
    try {
        const items = new RegisterFO(req.body);
        const user = new User(req.body)
        let UserName = await User.findOne({ username: req.body.username }) //checking whether username already exists
        if (UserName) {
            return res.send("This username already exists")
        }
        else {
            await items.save()
            await User.register(user, req.body.password, (error) => {   //method hashes the password
                if (error) {
                    throw error    //works like console.log(error)
                }
                res.redirect("/aodash")
            })
        }
    }
    catch (error) {
        res.status(400).send("sorry it seems there is trouble accessing this page")
        console.log(error)
    }
});


//retrieving farmerOnes from the database
router.get("/aodash",connectEnsureLogin.ensureLoggedIn(), async (req, res) => {
    if (req.user.role == "agricofficer") {   //only agricofficer can login and see this page
        try {
            let items = await RegisterFO.find();
            res.render("aoDash", { farmerOnes: items })    //keyword used to get the value of items in that class
        }
        catch (err) {
            console.log(err)
            res.send("failed to retrieve farmerOne details")
        }
    } else {
        res.redirect("/login")
    }

})


//editing a database
router.get("/edit_farmerOne/:id", async (req, res) => {    //allows retreival of a specific document based on unique identifier
    try {
        const item = await RegisterFO.findOne({ _id: req.params.id });  //method for retrieving a single document based on the parameter value
        res.render("edit_farmerOne", { farmerOne: item });
    }
    catch (error) {
        res.send("could not find farmerOne");
        console.log(error)
    }
});

// updating the details of a single document
router.post("/edit_farmerOne/", async (req, res) => { 
    try {
        await RegisterFO.findOneAndUpdate({ _id: req.query.id }, req.body)
        res.redirect("/aodash")
    }
    catch (err) {
        res.send("failed to update farmerOne details")
        console.log(err)
    }
});



module.exports = router