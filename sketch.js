function setup() {
  createCanvas(800,400);
  fixedrect = createSprite(400, 200, 50, 50);
  movingrect = createSprite(300,200,25,40);
  bounceoffrect = createSprite(350,200,40,60);
  bounceoffrect.velocityY = 3

  bouncerect = createSprite(350,300,10,80);
 
  bouncerect.velocityY = -3

  fixedrect.shapeColor = "Yellow";
  movingrect.shapeColor = "Red";
  bounceoffrect.shapeColor = "Green";
  bouncerect.shapeColor = "Blue";
}

function draw() {
  background(255,255,255); 
  
  movingrect.y = World.mouseY;
  movingrect.x = World.mouseX;
  
  if(movingrect.x - fixedrect.x <= movingrect.width/2 + fixedrect.width/2 && 
    fixedrect.x - movingrect.x <= fixedrect.width/2 + movingrect.width/2 && movingrect.y - fixedrect.y <= movingrect.height/2 + fixedrect.height/2 && 
    fixedrect.y - movingrect.y <= fixedrect.height/2 + movingrect.height/2) {
    movingrect.shapeColor = "Blue";
    fixedrect.shapeColor = "Green";
  } else {
    fixedrect.shapeColor = "Yellow";
    movingrect.shapeColor = "Red";
  }



  if(bounceoffrect.x - bouncerect.x <= bounceoffrect.width/2 + bouncerect.width/2 && 
    bouncerect.x - bounceoffrect.x <= bouncerect.width/2 + bounceoffrect.width/2) {
     bounceoffrect.velocityX = bounceoffrect.velocityX * -1;
     bouncerect.velocityX = bouncerect.velocityX * -1;
    }

  if(bounceoffrect.y - bouncerect.y <= bounceoffrect.height/2 + bouncerect.height/2 && 
    bouncerect.y - bounceoffrect.y <= bouncerect.height/2 + bounceoffrect.height/2) {
      bounceoffrect.velocityY = bounceoffrect.velocityY * -1;
      bouncerect.velocityY = bouncerect.velocityY * -1;
    }
  drawSprites();
}


