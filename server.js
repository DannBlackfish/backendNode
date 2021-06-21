const express = require('express');
const bodyParser = require('body-parser');
const router = express.Router();

var app = express();
app.use(bodyParser.json);
app.use(router);

router.get('/message', function(req, res){
    console.log(req.body);
    console.log(req.query);
    res.send('List of messages');
})

router.post('/message', function(req, res){
    res.send('Mensaje' + req.body.text + ' correctly added');
})

// app.use('/', function (req, res) {
//     res.send('Hola');
// });

app.listen(3000);

console.log('The app is listening at http://localhost:3000')
