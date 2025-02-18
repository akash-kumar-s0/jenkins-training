const express = require("express");

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware (Parse JSON requests)
app.use(express.json());

// Simple GET route
app.get("/", (req, res) => {
    res.json({ message: "Hello, World! 🌍" });
});

// Start Server
app.listen(PORT, () => {
    console.log(`✅ Server is running on http://localhost:${PORT}`);
});