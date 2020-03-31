var canvas, backgroundImage;
var car1, car2, car3, car4;
var cars;
var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;
var p1, p2, p3, p4, ground, track;
var form, player, game;

function preload(){
  p1 = loadImage('New folder/car1.png');
  p2 = loadImage('New folder/car2.png');
  p3 = loadImage('New folder/car3.png');
  p4 = loadImage('New folder/car4.png');
  ground = loadImage('New folder/ground.png');
  track = loadImage('New folder/track.jpg');
}

function setup(){
  canvas = createCanvas(displayWidth,displayHeight);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
  
}

function draw(){
  if(playerCount === 4){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();
  }
  if(gameState === 2){
    game.end();
  }
}
