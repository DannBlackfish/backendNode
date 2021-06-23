const express = require('express');
const app = express();
const server = require('http').Server(app);
const io = require('socket.io')(server);

app.use(express.static('public'));

io.on('connection', function(socket) {
    console.log('Nuevo cliente conectado');
    socket.emit('mensaje', 'Welcome!');
});

setInterval(function () {
    io.emit('mensaje', "Hello")
}, 3000);