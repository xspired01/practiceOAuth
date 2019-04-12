const express = require("express");
const mongoose = require("mongoose");
const passport = require("passport");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const cors = require("cors");
const session = require("express-session");
const app = express();
const port = process.env.PORT || 7000;

// hides Express is the backend server, reduces hacks
app.disable("x-powered-by");

//load User model
require("./models/User");

//passport Config
require("./config/passport")(passport);

// Auth Routes
const auth = require("./routes/auth");

//Load Keys
const keys = require("./config/keys");

// map Mongoose global promises
mongoose.Promise = global.Promise;

// Connect to Mongoose
mongoose
  .connect(keys.mongoURI, { useNewUrlParser: true })
  .then(() => console.log("MongoDB connected!"))
  .catch(err => console.log(err));

// enable use of CORS or Cross Origin Resources.
app.use(cors());

// cookieParser settings
app.use(cookieParser());
app.use(
  session({
    secret: "secret",
    resave: false,
    saveUninitialized: false
  })
);

// bodyParser settings
// urlencoded true means go deep & flatten nested objects. false means go shallow, only flatten top level
// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(bodyParser.json());

// passport settings
app.use(passport.initialize());
app.use(passport.session());

// set globals var for users
app.use((req, res, next) => {
  res.locals.user = req.user || null;
  next();
});

// Auth Routes
app.use("/auth", auth);

app.get("/", (req, res) => {
  res.send("GET route works for HOME");
});

app.get("/dashboard", (req, res) => {
  res.send("This is the DASHBOARD ROUTE. Simple OAuth works");
});

// run server, actually tell server to monitor port for connections
app.listen(port, () => {
  console.log(`Server started and listening on port ${port}`);
});
