// const Deck = require("./Deck.js");
// var deck = new Deck();
// deck.deckGenerate();
// deck.printDeck();
// deck.shuffleDeck();
// deck.drawCard();
// deck.printDeck();

console.log("Starting Server...");
console.log("Generating Rooms...");
const Room = require("./Room.js");
var room = new Room(0);

var express = require('express');
var port = 3000;
var app = express();
var server = app.listen(port);

app.use(express.static('Public'));
console.log("server running on port:" + port);

var socket = require('socket.io');
var io = socket(server);


io.sockets.on('connection', newConnection);


function newConnection(socket){
  if(room.players.length < 9){
    console.log('New Player Online, socket connection: ' + socket.id);
    room.newPlayer(socket.id);
    room.startRound(socket);
  }else{
    console.log("Full Room");
  }

  socket.on('disconnect', function() {
     console.log('Got disconnect!' + socket.id);
     room.disconnectPlayer(socket.id);
  });
}
