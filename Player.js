class Player
{
   constructor(x,y){
       this.sptx = x;
       this.spty = y;
       this.spt=createSprite(this.sptx,this.spty,50,50);
       this.spt.shapeColor="orange";
   }
   move(xdir,ydir){
    this.spt.x+= xdir*grid;
    this.spt.y += ydir*grid;
    
   
}
  


}