var http = require('http');
var path = require('path');
var express = require('express');
var app = express();
var history = '';

app.use(express.static(path.join(__dirname)));

app.get('*', function(req, res, next) {
  res.sendFile("index.html");
});


var server = http.createServer(app);
var io = require('socket.io')(server);


io.on('connection', function (socket) {
	socket.emit('msg', { msg: history }); 			// Sobald jemand connectet, bekommt er die history zugeschickt

	socket.on('msg',function(msg){ 				// Nachrichten lauschen
		socket.broadcast.emit('msg', { msg: msg }); 	// Nachrichten die empfangen wurden allen anderen zuschicken
		history += msg;					// Zur History hinzufuegen fuer spaetere Benutzer
    	})
});

server.listen(8080); 						// Port setzen und initiieren
