const mongoose = require("mongoose");

const ListingSchema = new mongoose.Schema({
  title: String,
  location: String,
  price: Number,
  agent: { type: mongoose.Schema.Types.ObjectId, ref: "User" }
});

module.exports = mongoose.model("Listing", ListingSchema);
