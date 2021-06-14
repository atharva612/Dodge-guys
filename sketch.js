var playerCount;
var allplayers;
var RUNNERS,player1,player2,player3,player4;
var song1,song2,song3;
var gameState=0;
var database;
var form,player,game;
function preload(){

song1=loadSound("SONG1.mp3");
song2=loadSound("SONG2.mp3");
song3=loadSound("SONG3.mp3");



}
function setup(){
  Canvas=createCanvas(displayWidth-50,displayHeight-80);
   database=firebase.database();
   
game=new GAME();

game.start();




}

function draw(){

  
  if(playerCount === 4){
    gameState=1;
  }
  if(gameState === 1){
    clear();
    game.play();
  }


  if(gameState===2){
    game.end();

  }
  
 

}