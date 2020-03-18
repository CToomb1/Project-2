const express = require('express');
const path = require('path');
const dbitems = require('./lib/db_items.js');

const PORT = process.env.PORT || 1338;
const app = express();

app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, './public/index.html'));
});

app.get('/shifts', (req, res) => {
    res.sendFile(path.join(__dirname, './public/shifts.html'));
});

app.get('/api/shifts', (req, res) => {
    // let results = dbitems.viewShifts();
    // res.json(results);

    dbitems.viewShifts(function(data) {
        res.json(data);
    });
});

app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}!`);
});