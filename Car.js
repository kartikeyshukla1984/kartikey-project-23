class Car{
   constructor(speed){
        this.x = random([100,210,320,440,550,660,770,880,990,1100,1210]);
        this.y = height-random([150,250,350,950,1050,1150,1750,1850,1950]);
        this.sit = createSprite(this.x,this.y);
        this.sit.shapeColor = "blue";
        this.sit.scale=0.5;

        if(this.y==height-250 || this.y==height-1050 || this.y==height-1850)
        {
            speed=speed;
        }
        this.sit.velocityX = 23;
        this.sit.scale=0.05;
        this.sit.addAnimation("car",carImage);
       
        if(this.y==height-250||this.y==height-1050 || this.y==1850){
            speed=-speed;
            
            this.sit.addAnimation("car",car2Image);
            
        }
    }

   
}


