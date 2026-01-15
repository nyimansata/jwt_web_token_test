const mongoose = require("mongoose");

const UserSchema = mongoose.Schema({
  Name: {
    type: String,
    require: true,
  },
  Email: {
    type: String,
    require: true,
    // unique: true,
  },
  Password: {
    type: String,
    require: true,
  },
  role: {
    type: String,
    enum: ["student", "admin"],
  },
});

module.exports = mongoose.model("User", UserSchema);
