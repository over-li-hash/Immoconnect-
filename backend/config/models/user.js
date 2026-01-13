const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  name: String,
  email: { type: String, unique: true },
  role: { type: String, enum: ["agent", "client"] },
  verified: { type: Boolean, default: false }
});

module.exports = mongoose.model("User", UserSchema);
