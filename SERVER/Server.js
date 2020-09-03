const express = require('express');
const app = express();
const server = require('http').Server(app);
const io = require('socket.io')(server);
server.listen(3000);


io.on("connection", function (socket) {
    console.log('Co nguoi ket noi toi server ==>', socket.id)
});
