require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const ListingRoutes = require("./routes/listings");

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connecté"))
  .catch(err => console.error(err));

app.use("/api/listings", ListingRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Backend lancé sur ${PORT}`));
