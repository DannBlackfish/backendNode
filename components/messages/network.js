const express = require('express');
const response = require('../../network/response');
const controller = require('./controller')
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

    controller.addMessage(req.body.user, req.body.message)
        .then((fullMessage) => {
            response.success(req, res, fullMessage, 201);
        })
        .catch(e => {
            response.error(req, res, 'null information', 400, 'Controller error');
        });
});

module.exports = router;