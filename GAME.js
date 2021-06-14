class GAME{
    constructor(){

    };
    getState(){
        var GameStateref=database.ref('gameState');
        GameStateref.on("value",(data)=>{
            gameState:data.val();

        });

    }
    update(State){
        database.ref('/').update({
            gameState:State()
        });

    
         
        }
    


  async start(){
        if(gameState===0){
            player=new PLAYER();
           
     
        
    var playerCountref=await database.ref('playerCount').once("value");
     if(playerCountref.exists()){
playerCount=playerCountref.val();
player.getCount();
     }
    
     form=new FORM();
     form.display(); 
   
        }
        player1=createSprite(50,200);
        player2=createSprite(100,200);
        player3=createSprite(150,200);
        player4=createSprite(200,200);
     RUNNERS = [player1, player2, player3, player4];

  }


 


play(){
    form.hide();
    textSize(35);
    text("GAME START",120,100);
    PLAYER.getPlayerInfo();

    if (allplayers !== undefined) {
        background("#C68767");
        
        var index = 0;
        var x = 0;
        var y;
  
        var display_position = 130;
        for (var plr in allplayers) {
          index = index + 1;
          x = x + 200;
          y = displayHeight - allplayers[plr].distance;
        //  RUNNERS[index - 1].x = x;
       //RUNNERS [index - 1].y = y;
          if (index === player.index) {
            stroke(10);
            fill("red");
            ellipse(x, y, 60, 60);
         //  RUNNERS[index - 1].shapeColor = "red";
            camera.position.x = displayWidth / 2;
        //    camera.position.y =RUNNERS[index - 1].y;
          

          }
          
}

}
drawSprites();



}
end() {
    console.log("GAME ENDED");
    console.log(player.rank);


  }
}
