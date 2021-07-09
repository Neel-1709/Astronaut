var bg;
var sleep;
var brush;
var gym;
var eat;
var drink;
var move;
var astronaut;
function preload(){
bg = loadAnimation("iss.png");
sleep = loadAnimation("sleep.png");
brush = loadAnimation("brush.png");
gym = loadAnimation("gym11.png","gym12.png","gym1.png","gym2.png");
eat = loadAnimation("eat1.png","eat2.png");
drink = loadAnimation("drink1.png","drink2.png");
move = loadAnimation("move.png","move1.png");


}
function setup() {
  createCanvas(800,400);
  astronaut = createSprite(400, 200, 50, 50);
  astronaut.addAnimation("sleeping",sleep)
  astronaut.scale = 0.5;
}
createEgdeSprites();
function draw() {
  background(bg);  
  
  astronaut.bounceOff(Egdes)
  if(keyDown("UP_ARROW") ) {
  astronaut.addImage("brushing",brush);
//  astronaut.changeAnimation("brushing");
  astronaut.y = 350;
  astronaut.x = 400
  astronaut.velocityX = 0;
  astronaut.velocityY = 0;
  }
  if(keyDown("DOWN_ARROW") ) {
    astronaut.addAnimation("exercising",gym);
    //astronaut.changeAnimation("exercising");
    astronaut.y = 50;
    astronaut.x = 400;
    astronaut.velocityX = 0;
    astronaut.velocityY = 0;
    }
    if(keyDown("RIGHT_ARROW") ) {
      astronaut.addAnimation("eating",eat);
     // astronaut.changeAnimation("eating");
      astronaut.y = 200;
      astronaut.x = 50
      astronaut.velocityX = 0;
      astronaut.velocityY = 0;
      }
      if(keyDown("LEFT_ARROW") ) {
        astronaut.addAnimation("brushing",brush);
       // astronaut.changeAnimation("brushing");
        astronaut.y = 200;
        astronaut.x = 750
        astronaut.velocityX = 0;
        astronaut.velocityY = 0;
        }
  drawSprites();
}
