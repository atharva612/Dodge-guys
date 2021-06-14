class FORM{
    constructor(){
    
this.input=createInput();
this.button=createButton("Play");

this.reset=createButton("RESET");
this.greetings=createElement('h2');
this.title=createElement('h2');

this.begin=createButton("BEGIN");



    };




hide(){
    this.input.hide();
this.greetings.hide();
this.button.hide();

this.begin.hide();



}
display(){
  
    var title = createElement('h2');
  
    title.html("DODGE GUYS");
    title.position(displayWidth/2-50, 0);

    this.input.position(displayWidth/2-40,displayHeight/2-80);
    this.button.position(displayWidth/2+30,displayHeight/2);
this.reset.position(displayWidth-100,20);
this.begin.position(displayWidth/2+120,20);

this.button.mousePressed(()=>{
    this.input.hide();
    this.button.hide();
    player.name = this.input.value();
    playerCount+=1;
    player.index = playerCount;
    player.update();
    player.updateCount(playerCount);
    this.greetings.html("Hello_" + player.name+"__Wait for other players to join");

    this.greetings.position(displayWidth/3,displayHeight/4);
  });


this.reset.mousePressed(()=>{
    player.updateCount(0);
    game.update(0);
  });



}
}


