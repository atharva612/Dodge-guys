class PLAYER{
constructor(){
    this.index=null;
    this.name=null;

}
getCount(){
    var playerCountref=database.ref('playerCount');
playerCountref.on("value",(data)=>{
    playerCount=data.val();

});



}
updateCount(count){
database.ref('/').update({
    playerCount:count
});

}
update(){
   var playerIndex="player/player"+this.index;
   database.ref(playerIndex).set({
     name:this.name,
    

   });
   




}
static getPlayerInfo(){
    var PlayerInforef=database.ref('player');
    PlayerInforef.on("value",(data)=>{
allplayers=data.val();

    });

    
}



}

