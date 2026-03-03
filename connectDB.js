const mongoose = require("mongoose");
require("dotenv").config();

const connectDataBase = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URL);
    console.log("Good !!!!! Database connected");
  } catch (error) {
    console.log("Error connecting to database:");
  }
};

module.exports = connectDataBase;
