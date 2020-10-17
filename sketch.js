
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score
var ground
var score
function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(400,400)
 monkey = createSprite(120,320,20,20)
 monkey.addAnimation("a",monkey_running)
 ground = createSprite(300,360,800,10)
  FoodGroup = new Group()
   obstacleGroup = new Group()
  score = 0
}


function draw() {
background("lightGreen")
  monkey.scale = 0.12
  if (keyDown("space")&&monkey.y>(317)){
    monkey.velocityY = -13
  }
 
   monkey.velocityY = monkey.velocityY + 0.8
  monkey.collide(ground)
  console.log(monkey.y)
   text("press space for jump",10,15)
  text("press up arrow for super jump",10,30)
   if(FoodGroup.isTouching(monkey)){
       FoodGroup.destroyEach()
     score = score + 1
    }
  monkey.collide(obstacleGroup)
  text ("banana:  " + score,300,50)
  spawnobstacles()
  spawnbanana()
    drawSprites()
}

function keyPressed(){
  if (keyCode === UP_ARROW && monkey.y>(317)){
    monkey.velocityY = -16
  }
}

function spawnbanana() {
  if (frameCount % 100 === 0) {
    banana = createSprite(400,120,40,10);
    banana.y = Math.round(random(130,250));
    banana.addImage(bananaImage);
    banana.scale = 0.05;
    banana.velocityX = -3;
    
        banana.lifetime = 200;
        
    FoodGroup.add(banana);
  }
  
}

function spawnobstacles() {
  if (frameCount % 300 === 0) {
     obstacle= createSprite(400,320,40,10);
    obstacle.addImage(obstacleImage);
    obstacle.scale = 0.25;
    obstacle.velocityX = -3;
    
        obstacle.lifetime = 200;
        
    obstacleGroup.add(obstacle);
  }
  
}


