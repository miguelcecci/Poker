function Deck(){
  this.cards = [];
  this.numberofranks = 3;
  this.numberofsuits = 2;


  this.deckGenerate = function(){
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
  }

  this.shuffleDeck = function() {
    if(this.cards.length == 0){
      console.log('Error, empty deck.');
    }else{
      console.log("Shuffling Deck...");
      for (var i = this.cards.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = this.cards[i];
        this.cards[i] = this.cards[j];
        this.cards[j] = temp;
      }
      console.log(this.cards);
      console.log("Successfully Shuffled");
    }
  }

  this.drawCard = function() {
    if(this.cards.length == 0){
      console.log('Error, empty deck.');
      return 0;
    }else{
      flipedCard = this.cards.pop();
      console.log("Your card is:", flipedCard);
      return flipedCard;
    }
  }

  this.printDeck = function(){
    console.log(this.cards);
  }
}

module.exports = Deck;
