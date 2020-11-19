var car, wall;
var speed, weight;

function setup() {
  createCanvas(800,400,1600,400);
  car=createSprite(50,200,50,50);
  car.debug=true;
  car.velocityX=speed;
  wall=createSprite(1500,200,60, height/2);
  wall.shapeColor="blue"(80,80,80);
  wall.debug=true;

  speed=random(55,90);
weight=random(400,1500);

}

function draw() {
  background(255,255,255);  

  if(wall.x-car.x<(ca.width+wall.width)/2)
{
  car.velocityX=0;
  var deformation=0.5 * weight * speed* speed/22509;
  if(deformation>180)
{
  car.shapeColor="red"(255,0,0);
}
if(deformation<180 && deformation>100)
{
  car.shapeColor="yellow"(230,230,0);
}
if(deformation<100)
{
  car.shapeColor="green"(0,255,0);
  }
  drawSprites();
}
}
