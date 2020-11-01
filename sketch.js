var car, wall
var speed, weight


function setup() {
  createCanvas(1200,400);

  speed = random (50,90); 
  weight = random (1500,400);

  
  car = createSprite(50,200,50,50);
  car.velocityX = speed;
  wall = createSprite(1200,200,60,height/2);
}

function draw() {
  background(0);  

  if ( wall. x - car. x< wall. width /2 + car. width/2)
{
  car.velocityX=0
  var deformation = 0.5*weight*speed*speed/22500 

  if(deformation<100){
    car.shapeColor = "green"
  }

  if(deformation>100 && deformation < 180){
    car.shapeColor = "yellow"
  }

  if(deformation>180){
    car.shapeColor = "red"
  }

} 
  drawSprites();
}