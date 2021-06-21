const express = require('express');
const response = require('../../network/response');

const router = express.Router();

router.get('/', function(req, res){
    console.log(req.headers);
    //specific hedears to our client:
    res.header({
        "custom-header": "Our personalized value"
    })
    //res.send('List of messages');
    response.success(req, res, 'List of messages');
})

router.patch('/', function(req, res){
    console.log(req.query)
    console.log(req.body)
    res.send('Mensaje' + req.body.text + ' correctly added');
})

router.post('/', function(req, res){
    console.log(req.query);
    if (req.query.error == "ok") {
        response.error(req, res, 'Unexpected error', 500, 'It is just a simulated error');
    } else {
        response.success(req, res, 'Correctly create', 201);
    }
    //return a status
    //res.status(201).send({error: '', body: 'Created correctly'});
})

module.exports = router;