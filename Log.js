class Log{
    constructor(speed){
        this.x = random([100,300,500,700,900]);
        this.y = height-random([550,650,750,1350,1450,1550]);
        this.width = 1500;
        this.height = 800;
        this.speed = speed;
        this.sot = createSprite(this.x,this.y,this.width,this.height);
        this.sot.velocityX = this.speed;
        this.sot.shapeColor = "brown";
        this.sot.scale=0.1;
        this.sot.addAnimation("log",logImage);
        this.sot.scale=0.05;
    }

   
}