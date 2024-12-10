const express = require("express");
const app = express();
const PORT = process.env.PORT || 3030;

// Home route
app.get('/', (req, res) => {
    res.send('Ghassan Sleyman');
});

// Students route
app.get('/students', (req, res) => {
    let data = [
        { name: 'Ghassan', age: 20 },
        { name: 'Afif', age: 21 },
        { name: 'Wael', age: 18 }
    ];
    res.send(data);
});

// Sleyman route
app.get('/sleyman', (req, res) => {
    res.send('Bla Bla Bla');
});

// Server start
app.listen(PORT, () => {
  console.log(`server started on port ${PORT}`);
});
