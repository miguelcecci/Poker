var socket;
var playerList = [];
var hand = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  socket = io.connect();
  background(255);
  socket.on('update-hand', function(a) {
    hand = a;
  })

}

function draw() {
  createCanvas(windowWidth, windowHeight);
  background(255);
  textAlign(CENTER);
  text(hand, windowWidth/2, windowHeight/2);
}
