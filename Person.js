const mongoose = require("mongoose");
// create schema
const PersonSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
  },
  favoriteFood: {
    type: [String],
  },
  // name is required, age is number and favorite food array of string
});
// create module
module.exports = mongoose.model("Person", PersonSchema);
