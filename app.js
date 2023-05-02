//importing environments/models
const express = require("express");
const app = express();
const path = require('path');
const mongoose = require("mongoose");
const bodyParser = require('body-parser');
const passport = require('passport');
const session = require("express-session");
const config = require("./config/database");
const User = require('./models/users')

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));  //middle ware for images, css and jS
app.use(express.static(path.join(__dirname, "public/productimages")));


//session middleware and it has to be up not down
app.use(session({
  secret: "secret",      //protects our session from being used by other people
  resave: false,         // helps u resume your journey so we dont want it to remember
  saveUninitialized: false
}));


//use pug as a templating engine
app.set("view engine", "pug")
app.set("views", path.join(__dirname, "views"))



const aodashRoute = require("./routes/aoDashroute");
const loginRoute = require("./routes/loginroute")
const signupRoute = require("./routes/signuproute")
const fodashRoute = require('./routes/foDashroute');
const ufdashRoute = require('./routes/ufDashroute');

//passport middleware
app.use(passport.initialize());
app.use(passport.session());
passport.use(User.createStrategy());   //identifies what authentication we use which in this case is local 
passport.use(User.createStrategy());   //identifies what authentication we use which in this case is local 
passport.serializeUser(User.serializeUser()); //gives a session an ID that the browser can use to tract it
passport.deserializeUser(User.deserializeUser());


//creating a connection between the controller and the database 
mongoose.connect(config.database, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})

const db = mongoose.connection;
//checking if db has connected using open and error events
db.once("open", () => {
  console.log("connected to db")
});
db.on("error", (err) => {
  console.error(err)
})

//middleware for routes
app.use("/", loginRoute)
app.use("/", signupRoute)
app.use('/', aodashRoute)
app.use('/', fodashRoute)
app.use('/', ufdashRoute)

//accessing a page that doesnt exist
app.get("*", (req, res) => {
  res.status(404).send("page does not exist")
})

// setting up a Node.js web server to listen for incoming HTTP requests on port 3500.
app.listen(3500, () => console.log('listening to port 3500'));
