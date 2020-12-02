var fixedRect,movingRect;

function setup() {
  createCanvas(800,400);
  fixedRect=createSprite(200,200,80,50);
  movingRect=createSprite(400,200,50,50);
}

function draw() {
  background("pink"); 
  movingRect.x=World.mouseX;
  movingRect.y=World.mouseY; 
  console.log(movingRect.x-fixedRect.x);
  if(movingRect.x-fixedRect.x<fixedRect.width/2+movingRect.width/2 && fixedRect.x-movingRect.x<fixedRect.width/2+movingRect.width/2)
  {
    movingRect.shapeColor="red";
    fixedRect.shapeColor="red";
  }
  else {
    movingRect.shapeColor="green";
    fixedRect.shapeColor="green";
  }
  drawSprites();
}