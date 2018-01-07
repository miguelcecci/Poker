const Deck = require('./Deck.js');
const Player = require('./Player.js')

function Room(id){
  this.id = id;
  this.players = [];
  this.deck = new Deck();

  this.newPlayer = function() {
    this.players.push(new Player())
  }

  this.startRound = function(){
    this.deck.deckGenerate();
    this.deck.shuffleDeck();
    for (var i = 0; i < this.players.length; i++) {
      this.players[i].hand.push(this.deck.drawCard());
      this.players[i].hand.push(this.deck.drawCard());
    }
  }



}
module.exports = Room;
