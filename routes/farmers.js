const express = require("express");
const Farmer = require("../models/Farmer");
const router = express.Router();

router.post("/register", async (req, res) => {
    const { name, walletAddress, location } = req.body;
    const farmer = new Farmer({ name, walletAddress, location });
    await farmer.save();
    res.json(farmer);
});

router.get("/", async (req, res) => {
    const farmers = await Farmer.find();
    res.json(farmers);
});

module.exports = router;
