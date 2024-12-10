const express = require("express");
const path = require("path");
const app = express();
const PORT = process.env.PORT || 3030;

// Serve static files from the 'images' directory
app.use('/images', express.static(path.join(__dirname, 'images')));

// Serve index.html from the same folder as server.js
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Start server
app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});
