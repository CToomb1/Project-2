<<<<<<< HEAD
const express = require('express');
const routes = require('./routes');
const sequelize = require('./config/connection');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// if you have a front-end...use express.static('public')

// turn on routes
app.use(routes);

// turn on connection to db and server
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log('Now listening'));
=======
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
>>>>>>> 7a62daf37679c47afc72f09fdc4ca48d288d4854
});