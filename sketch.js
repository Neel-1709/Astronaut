var bg;
var sleep;
var brush;
var gym;
var eat;
var drink;
var move;
var astronaut;
function preload(){
bg = loadAnimation("Images/iss.png");
sleep = loadAnimation("Images/sleep.png");
brush = loadAnimation("Images/brush.png");
gym = loadAnimation("Images/gym11.png","Images?gym12.png","Images/gym1.png","Images/gym2.png");
eat = loadAnimation("Images/eat1.png","Images/eat2.png");
drink = loadAnimation("Images/drink1.png","Images/drink2.png");
move = loadAnimation("Images/move.png","Images/move1.png");


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
  astronaut.addAnimation("brushing",brush);
  astronaut.changeAnimation("brushing");
  astronaut.y = 350;
  astronaut.x = 400
  astronaut.velocityX = 0;
  astronaut.velocityY = 0;
  }
  if(keyDown("DOWN_ARROW") ) {
    astronaut.addAnimation("exercising",gym);
    astronaut.changeAnimation("exercising");
    astronaut.y = 50;
    astronaut.x = 400;
    astronaut.velocityX = 0;
    astronaut.velocityY = 0;
    }
    if(keyDown("RIGHT_ARROW") ) {
      astronaut.addAnimation("eating",eat);
      astronaut.changeAnimation("eating");
      astronaut.y = 200;
      astronaut.x = 50
      astronaut.velocityX = 0;
      astronaut.velocityY = 0;
      }
      if(keyDown("LEFT_ARROW") ) {
        astronaut.addAnimation("brushing",brush);
        astronaut.changeAnimation("brushing");
        astronaut.y = 200;
        astronaut.x = 750
        astronaut.velocityX = 0;
        astronaut.velocityY = 0;
        }
  drawSprites();
}
