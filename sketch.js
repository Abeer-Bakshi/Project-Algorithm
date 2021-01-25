
var movingRect ,fixedRect;

function setup() {
  createCanvas(800,400);
  movingRect =createSprite(400, 200, 70, 50);
  fixedRect =createSprite(300,200,70,50);
movingRect.shapeColor ="red";
fixedRect.shapeColor ="blue";
}

function draw() {
  background(255,255,255);  
  movingRect.x = mouseX;
  movingRect.y=mouseY;  
  console.log(movingRect.x -fixedRect.x);
console.log("width/2 value:" + (movingRect.width/2 +fixedRect.width/2))
//collision detection condition
if((movingRect.x-fixedRect.x < movingRect.width/2 +fixedRect.width/2)
&& (fixedRect.x-movingRect.x < movingRect.width/2 +fixedRect.width/2)
&& (movingRect.y-fixedRect.y < movingRect.height/2 + fixedRect.height/2)
&& (fixedRect.y-movingRect.y < movingRect.height/2 + fixedRect.height/2)
)
{
  movingRect.shapeColor ="green";
  fixedRect.shapeColor ="green";
}else
{
  movingRect.shapeColor ="red";
  fixedRect.shapeColor ="blue";
}  










drawSprites();
}