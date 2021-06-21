const express = require('express');
const bodyParser = require('body-parser');
const router = express.Router();

const response = require('./network/response')

var app = express();
app.use(bodyParser.json());
app.use(router);

router.get('/message', function(req, res){
    console.log(req.headers);
    //specific hedears to our client:
    res.header({
        "custom-header": "Our personalized value"
    })
    //res.send('List of messages');
    response.success(req, res, 'List of messages');
})

router.patch('/message', function(req, res){
    console.log(req.query)
    console.log(req.body)
    res.send('Mensaje' + req.body.text + ' correctly added');
})

router.post('/message', function(req, res){
    console.log(req.query);
    if (req.query.error == "ok") {
        response.error(req, res, 'Error simulated', 400);
    } else {
        response.success(req, res, 'Correctly create', 201);
    }
    //return a status
    //res.status(201).send({error: '', body: 'Created correctly'});
})

// app.use('/', function (req, res) {
//     res.send('Hola');
// });

app.listen(3000);

console.log('The app is listening at http://localhost:3000')
