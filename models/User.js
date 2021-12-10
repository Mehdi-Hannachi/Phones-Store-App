const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  firstName: String,
  lastName: String,
  adress: String,
  phoneNumber: String,
  email: String,
  password: String,
});

module.exports = User = mongoose.model("user", userSchema);
