var dustbin, dustbinImg;
var backgroundImg;
var bananaImg;
var chipsImg;
var plasticBagImg;
var appleImg;
var bananaGroup, appleGroup, plasticBagGroup, chipsGroup;


function preload(){
  dustbinImg = loadImage("Dustbin.png");
  backgroundImg = loadImage("Background.jpg");
  bananaImg = loadImage("Banana peel.png");
  chipsImg = loadImage("chips.jpg");
  plasticBagImg = loadImage("plasticBag.jpg");
  appleImg = loadImage("apple.png");
}


function setup() {
dustbin = createSprite(100, 200, 50, 50);
dustbin.addImage(dustbinImg);
dustbin.scale = 0.1;

  createCanvas(800,400);
bananaGroup = new Group();
appleGroup = new Group();
plasticBagGroup = new Group();
chipsGroup = new Group();

}

function draw() {
  background(backgroundImg);  

  dustbin.x = World.mouseX;
  dustbin.y = World.mouseY;

  createBanana();
  createChips();
  createPlasticBag();
  createApple();
if(dustbin.isTouching(bananaGroup))
{
  bananaGroup.destroy();
}
  drawSprites();
}

function createBanana() {
  if (World.frameCount % 410 == 0) {
   var banana = createSprite(Math.round(random(50, width-50),50, 10, 10));
    banana.addImage(bananaImg);
    banana.scale=0.07;
    banana.velocityY = 3; 
    banana.lifetime = 180; 
    bananaGroup.add(banana); 
  }    
  }

function createChips() {
  if (World.frameCount % 410 == 0) {
   var chips = createSprite(Math.round(random(50, width-50),40, 10, 10));
    chips.addImage(chipsImg);
    chips.scale=0.04;
    chips.velocityY = 4; 
    chips.lifetime = 180; 
    chipsGroup.add(chips); 
   }    
  }

function createPlasticBag() {
  if (World.frameCount % 410 == 0) {
    var plasticBag = createSprite(Math.round(random(50, width-50),90, 10, 10));
    plasticBag.addImage(plasticBagImg);
    plasticBag.scale=0.09;
    plasticBag.velocityY = 5; 
    plasticBag.lifetime = 180; 
    plasticBagGroup.add(plasticBag); 
  }    
   }

function createApple() {
   if (World.frameCount % 410 == 0) {
    var apple = createSprite(Math.round(random(50, width-50),60, 10, 10));
    apple.addImage(appleImg);
    apple.scale=0.13;
    apple.velocityY = 2; 
    apple.lifetime = 180; 
    appleGroup.add(apple); 
  }    
   }
  
  
  
   