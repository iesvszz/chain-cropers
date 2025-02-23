const express = require("express");
const Product = require("../models/Product");
const Farmer = require("../models/Farmer"); // Ensure Farmer model is imported
const router = express.Router();

// Add a Product (POST /products/add)
router.post("/add", async (req, res) => {
    try {
        const { name, price, farmerId } = req.body;

        if (!name || !price || !farmerId) {
            return res.status(400).json({ error: "All fields are required" });
        }

        // Check if the farmer exists
        const farmer = await Farmer.findById(farmerId);
        if (!farmer) {
            return res.status(404).json({ error: "Farmer not found" });
        }

        // Save product in MongoDB
        const product = new Product({ name, price, farmer: farmerId });
        await product.save();

        res.json({ message: "Product added successfully", product });
    } catch (error) {
        console.error("Error adding product:", error);
        res.status(500).json({ error: "Failed to add product" });
    }
});

// Get All Products (GET /products/)
router.get("/", async (req, res) => {
    try {
        const products = await Product.find().populate("farmer");
        res.json(products);
    } catch (error) {
        console.error("Error fetching products:", error);
        res.status(500).json({ error: "Failed to fetch products" });
    }
});

module.exports = router;
