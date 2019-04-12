const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//create Schema
//if only use one Auth Schema, can make googleID required.
//if going to use several Facebook, Github, LinkedIn, etc. should be required:false
const UserSchema = new Schema({
  googleID: {
    type: String,
    required: false
  },
  firstName: {
    type: String
  },
  lastName: {
    type: String
  },
  image: {
    type: String
  }
});

// create collection and add schema
mongoose.model("users", UserSchema);
