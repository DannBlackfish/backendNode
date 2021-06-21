const express = require('express');
const router = express.Router();

var app = express();

app.use(router);

router.get('/message', function(req, res){
    res.send('List of messages');
})

router.post('/message', function(req, res){
    res.send('Add message');
})

// app.use('/', function (req, res) {
//     res.send('Hola');
// });

app.listen(3000);

console.log('The app is listening at http://localhost:3000')
