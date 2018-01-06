function Deck(){
  this.cards = [];
  this.numberofranks = 13;
  this.numberofsuits = 4;


  this.deckGenerate = function(callback){
    console.log('Generating Deck...');
    var counter = 0;
    for(i = 0; i < this.numberofranks; i++){
      for(j = 0; j < this.numberofsuits; j++){
        this.cards.push({ranks:i, suits:j})
        console.log(this.cards[counter]);
        counter++;
      }
    }
    console.log('Successfully Generated');
    callback();
  }

  this.shuffleDeck = function(callback) {
    console.log("Shuffling Deck...");
    for (var i = this.cards.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = this.cards[i];
        this.cards[i] = this.cards[j];
        this.cards[j] = temp;
        console.log(this.cards[i]);
    }
    console.log("Successfully Shuffled");
    callback();
  }

  this.drawCard = function(callback) {
    if(this.cards == []){
      console.log('Error, deck was not generated.');
    }else{
      console.log("Your card is:", this.cards.pop());
      // return this.cards[flipedCard];
    }
    callback();
  }

  this.printDeck = function(){
    console.log(this.cards);
  }
}

module.exports = Deck;
