const express = require("express");
const app = express();
const path = require('path');
const mongoose = require("mongoose");
const bodyParser = require('body-parser');
const passport = require('passport');
const session = require("express-session");
const user = require("./models/registeredFO");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname,"public")));  //middle ware for images, css and jS

//session middleware and it has to be up not down
app.use(session({
  secret: "secret",      //protects our session from being used by other people
  resave: false,         // helps u resume your journey so we dont want it to remember
  saveUninitialized: false 
}));

app.set("view engine","pug")
app.set("views", path.join(__dirname,"views"))


const config = require("./config/database");



const registerFoRoute = require("./routes/registeredFOroute");
const farmerOneRoute = require("./routes/farmerOneroute")
const loginRoute = require("./routes/loginroute")


//passport middleware
app.use(passport.initialize());
app.use(passport.session());
passport.use(user.createStrategy());   //identifies what authentication we use which in this case is local 
passport.serializeUser(user.serializeUser()); //gives a session an ID that the browser can use to tract it
passport.deserializeUser(user.deserializeUser());


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


 app.use ("/", registerFoRoute)
 app.use ("/", farmerOneRoute)
 app.use ("/", loginRoute)





app.listen(3500,() => console.log('listening to port 3500'));
