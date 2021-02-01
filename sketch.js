var bullet, wall, thickness;
var speed, weight;

function setup() {
  createCanvas(1600, 400);
  createSprite(400, 200, 50, 50);

  thickness = random(22,83);
  speed = random(223,322);
  weight = random(30,53);

  
  bullet = createSprite(50,200,50,50);
  wall = createSprite(1200,200,thickness,height/2);
  wall.shapeColor = color(80,80,80);
}

function draw() {
  background(255,255,255);  
  

  bullet.velocityX = speed;
  
  if(wall.x-bullet.x < (bullet.width + wall.width)/2)
  {
    bullet.velocityX = 0;
    var deformation = (0.5*weight*speed*speed)/(thickness*thickness*thickness);

    if(deformation>10)
    {
      bullet.shapeColor = color(225,0,0);
    }

    else 
    {
      bullet.shapeColor = color(230,230,0);
    }

  drawSprites();
}
}