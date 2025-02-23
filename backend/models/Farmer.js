const mongoose = require("mongoose");

const FarmerSchema = new mongoose.Schema({
    name: String,
    walletAddress: String,  // Ethereum address
    location: String
});

module.exports = mongoose.model("Farmer", FarmerSchema);
