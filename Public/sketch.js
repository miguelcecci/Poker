var socket;
var playerList = [];
var hand = "Waiting for players";

function setup() {
  createCanvas(windowWidth, windowHeight);
  socket = io.connect();
  background(255);
  socket.on('update-hand', function(a) {
    hand = a;
  });

  text(hand, windowWidth/2, windowHeight/2);

}

function draw() {
  createCanvas(windowWidth, windowHeight);
  background(255);
  textAlign(CENTER);
  text(hand, windowWidth/2, windowHeight/2);
}
