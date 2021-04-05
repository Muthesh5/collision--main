
var fixedRect, movingRect;
var a, b;
var c;

function setup() {
  createCanvas(1200,800);
 
 
  movingRect = createSprite(800, 400,80,30);
  movingRect.shapeColor = "green";

  fixedRect = createSprite(100, 100, 50, 50);
  fixedRect.shapeColor = "green";
  
  c = createSprite(200,200,90,30);
  c.shapeColor ="green";


  
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  if(isTouching(movingRect,c))
  {
    movingRect.shapeColor = "blue";
    c.shapeColor = "blue";
  }
  
  else {
    movingRect.shapeColor = "green";
  
    c.shapeColor = "green"
  }
 

//bounceOff(movingRect,fixedRect)
  drawSprites();
}



 



