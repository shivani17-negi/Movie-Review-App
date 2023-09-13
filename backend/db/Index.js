const mongoose = require("mongoose");
require('dotenv').config();


mongoose
  .connect('mongodb://localhost:27017/review_app') //mongodb://localhost:27017/review_app
  .then(() => {
    console.log("db is connected!");
  })
  .catch((ex) => {
    console.log("db connection failed: ", ex);
  });
