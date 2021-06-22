const express = require('express');
const bodyParser = require('body-parser');

const db = require ('./db')

const router = require('./network/routes');

db('mongodb://db_user_platzibackend:bLawWIFGJk69ZUHU@cluster0-shard-00-00.shvvz.mongodb.net:27017,cluster0-shard-00-01.shvvz.mongodb.net:27017,cluster0-shard-00-02.shvvz.mongodb.net:27017/myFirstDatabase?ssl=true&replicaSet=atlas-h6uac6-shard-0&authSource=admin&retryWrites=true&w=majority');

var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
router(app);

app.use('/app', express.static('public'));

app.listen(3000);
console.log('The app is listening at http://localhost:3000')