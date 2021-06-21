const express = require('express');

var app = express();

app.use('/', function (req, res) {
    res.send('Hola');
});

app.listen(3000);

console.log('The app is listening at http://localhost:3000')
