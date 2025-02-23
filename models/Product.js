const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
    name: { type: String, required: true },
    price: { type: Number, required: true },
    farmer: { type: mongoose.Schema.Types.ObjectId, ref: "Farmer", required: true },
    sold: { type: Boolean, default: false }
});

module.exports = mongoose.model("Product", ProductSchema);
