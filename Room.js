const Deck = require('./Deck.js');
const Player = require('./Player.js')

function Room(id){
  this.id = id;
  this.players = [];
  this.deck = new Deck();

  this.newPlayer = function(id) {
    this.players.push(new Player(id));
  }

  this.disconnectPlayer = function(id) {
    for (var i = 0; i < this.players.length; i++) {
      if(this.players[i].id == id){
        this.players.splice(i, 1);
      }
    }
  }


  this.startRound = function(socket){
    if(this.players.length >= 1){
      this.deck.deckGenerate();
      this.deck.shuffleDeck();
      for (var i = 0; i < this.players.length; i++) {
        this.players[i].hand.push(this.deck.drawCard());
        this.players[i].hand.push(this.deck.drawCard());
        console.log(this.players[i].hand);
        socket.emit('update-hand', JSON.stringify(this.players[i].hand));
      }
    }else{
      console.log("waiting for more players");
    }
  }



}
module.exports = Room;
