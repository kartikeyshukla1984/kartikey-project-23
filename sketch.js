var grid = 50;
var width = 1366;
var carGroup1,logGroup1;
var grassHeight = 100;
var gameState = "play";
var carAnimation, logAnimation, playerAnimation;
var school;
var cars;
var player;

var keyPressed;
var carImage,car2Image,logImage,log2Image,playerImage;


function preload()
{
 carImage = loadAnimation("images/car1.png");
 car2Image = loadAnimation("images/car2.png");
 logImage = loadAnimation("images/log1.png");
 log2Image = loadAnimation("images/log2.png");
 playerImage = loadAnimation("images/Player-03.png");
}

function setup() {
  createCanvas(1366,2700);
  carGroup1 = new Group();
  logGroup1 = new Group();
    

  

  for( var i=0;i<6;i++){
    var bottomGrass1 = createSprite(683,height-50-(i*400),width,grassHeight)
    if(i%2===0){
      var road = createSprite(683,height-150-(i*400)-grassHeight,width,300);
      road.shapeColor="black";
      
    }
    bottomGrass1.shapeColor="grey";
  }

  

   for( var i=0;i<40; i++)
   {
     logs = new Log(-3);
    logGroup1.add(logs.sot);
   }

   
   


  for(var i=0;i<40; i++)
  {
    cars = new Car(2);
    carGroup1.add(cars.sit);

  }

    
 
  player = new Player(width/2,height-25);
   
 }

function draw() {
  background("skyblue");
  


  translate(0,-player.spt.y+height-150);

  if(carGroup1.isTouching(player.spt)){
    player.spt.x=width/2;
    player.spt.y=height-75;
    }
 
    if(logGroup1.isTouching(player.spt)){
      player.spt.xplayer.spt.x-3;
    }
    else if((player.spt.y > height-1550 && player.spt.y<height-1300) || 
            (player.spt.y < height-500 && player.spt.y<height-850)||
            (player.spt.y>height)||
            (player.spt.x<0)||
            (player.spt.x>width)){

              player.spt.x = width/2;
              player.spt.y = height-75;

    }
 

  

  for(i=1;i<carGroup1.length;i++) {
    if(carGroup1[i].x>width)
    {
     carGroup1[i].x=0;
    }
    if(carGroup1[i].x<0)
    {
      carGroup1[i].x=width;
    }
  }

 
 
 

  for(i=1;i<logGroup1.length;i++){
    if(logGroup1[i].x<0)
    {
    logGroup1[i].x=width;
    }
  }
 
  
  drawSprites();
}


function keyPressed()
{
  if(keyCode == UP_ARROW){
    player.move(0,-2);
  }else if(keyCode == DOWN_ARROW){ 
    player.move(0,2);
  }else if(keyCode == LEFT_ARROW){
    player.move(-2,0);
  }else if(keyCode == RIGHT_ARROW){
    player.move(2,0);
  }
}