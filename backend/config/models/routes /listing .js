const router = require("express").Router();
const Listing = require("../models/Listing");

// Récupérer toutes les annonces
router.get("/", async (req, res) => {
  const listings = await Listing.find().populate("agent");
  res.json(listings);
});

// Ajouter une annonce
router.post("/", async (req, res) => {
  const listing = new Listing(req.body);
  await listing.save();
  res.json(listing);
});

module.exports = router;
