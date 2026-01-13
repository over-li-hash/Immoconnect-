const mongoose = require("mongoose");

module.exports = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("MongoDB connecté");
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};
