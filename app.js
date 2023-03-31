const express = require("express");
const app = express();
const path = require('path');
const mongoose = require("mongoose");
const bodyParser = require('body-parser');


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.set("view engine","pug")
app.set("views", path.join(__dirname,"views"))


const config = require("./config/database");



const registerFoRoute = require("./routes/registerFOroute");

//creating a connection between the controller and the database
mongoose.connect(config.database,{
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  
  const db = mongoose.connection;
  //checking if db has connected
  db.once("open",()=>{
    console.log("connected to db")
  });
  db.on("error",(err)=>{
  console.error(err)
  })


  app.use ("/",registerFoRoute)






app.listen(3500,() => console.log('listening to port 3500'));
