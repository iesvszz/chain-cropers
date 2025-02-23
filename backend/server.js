const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json()); // Ensures JSON body is parsed

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log("MongoDB Connected"))
.catch(err => console.log("MongoDB Connection Error:", err));

// Import Routes
const farmerRoutes = require("./routes/farmers");
const productRoutes = require("./routes/products");
const paymentRoutes = require("./routes/payments");

// Use Routes
app.use("/farmers", farmerRoutes);
app.use("/products", productRoutes); 
app.use("/payments", paymentRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
