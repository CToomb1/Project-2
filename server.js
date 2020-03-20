const express = require('express');
const routes = require('./routes');
const sequelize = require('./config/connection');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, './public/index.html'));
});

app.get('/shifts', (req, res) => {
    res.sendFile(path.join(__dirname, './public/shifts.html'));
});

app.get('/employees', (req, res) => {
    res.sendFile(path.join(__dirname, './public/employees.html'));
});

app.post('/api/emp', (req, res) => {
    dbitems.createEmp(req.body);
    console.log(req.body);
});

app.get('/api/shifts', (req, res) => {
    // let results = dbitems.viewShifts();
    // res.json(results);
});
// if you have a front-end...use express.static('public')

// turn on routes
app.use(routes);

// turn on connection to db and server
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log('Now listening'));
});