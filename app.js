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



app.set("view engine", "pug")
app.set("views", path.join(__dirname, "views"))



const aodashRoute = require("./routes/aoDashroute");
const loginRoute = require("./routes/loginroute")
const signupRoute = require("./routes/signuproute")
const registerUfRoute = require("./routes/registeredUFroute")
const urbanfarmerRoute = require("./routes/urbanfarmerroute")
const productuploadRoute = require('./routes/productuploadroute')
const uploadedproductRoute = require('./routes/uploadedproducts')
const fodashRoute = require('./routes/foDashroute');


//passport middleware
app.use(passport.initialize());
app.use(passport.session());
passport.use(User.createStrategy());   //identifies what authentication we use which in this case is local 
passport.use(User.createStrategy());   //identifies what authentication we use which in this case is local 
passport.serializeUser(User.serializeUser()); //gives a session an ID that the browser can use to tract it
passport.deserializeUser(User.deserializeUser());

// passport.use(aoUser.createStrategy());   //identifies what authentication we use which in this case is local 
// passport.use(aoUser.createStrategy());   //identifies what authentication we use which in this case is local 
// passport.serializeUser(aoUser.serializeUser()); //gives a session an ID that the browser can use to tract it
// passport.deserializeUser(aoUser.deserializeUser());



//creating a connection between the controller and the database
mongoose.connect(config.database, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})

const db = mongoose.connection;
//checking if db has connected
db.once("open", () => {
  console.log("connected to db")
});
db.on("error", (err) => {
  console.error(err)
})




app.use("/", loginRoute)
app.use("/", signupRoute)
app.use("/", registerUfRoute)
app.use("/", urbanfarmerRoute)
app.use("/", productuploadRoute)
app.use("/", uploadedproductRoute)
app.use('/', aodashRoute)
app.use('/', fodashRoute)

app.get("*", (req, res) => {
  res.status(404).send("page does not exist")
})


app.listen(3500, () => console.log('listening to port 3500'));
