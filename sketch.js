const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;



function setup() {
  createCanvas(800,400);
  
  
  engine = Engine.create();
  world = engine.world;
  
  //creates the stands
  stand1 = new Ground (600,300,300,30);
  

  //creates the pink boxes
  box1 = new PinkBox (550,260,50,50);
  box2 = new PinkBox (500,260,50,50);
  box3 = new PinkBox (520,210,50,50);
  box7 = new PinkBox (570,210,50,50);
  box11 = new PinkBox (600,160,50,50);

  //creates the purple boxes
  box4 = new PurpleBox(600,260,50,50);
  box10 = new PurpleBox (550,160,50,50);
  box14 = new PurpleBox (630,110,50,50);

  //creates the blue boxes
  box5 = new BlueBox (650,260,50,50);
  box9 = new BlueBox (670,210,50,50);
  box12 = new BlueBox (650,160,50,50);
  box15 = new BlueBox (600,60,50,50);

  //creates the white boxes
  box6 = new WhiteBox (700,260,50,50);
  box8 = new WhiteBox (620,210,50,50);
  box13 = new WhiteBox (580,110,50,50);

  //creates the polygon
  polygon = new Polygon (100,100,50);

  //creates the sling
  sling = new SlingShot (polygon.body,{x: 100, y: 200});



  
  Engine.run(engine);
}

function draw() {
  background(255,255,255); 
  
  //displays the stands
  stand1.display();
  

  //displays the boxes
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();
  box9.display();
  box10.display();
  box11.display();
  box12.display();
  box13.display();
  box14.display();
  box15.display();

  //displays the polygon
  polygon.display();

  //displays the sling
  sling.display();
  

  drawSprites();
}

function mouseDragged(){
  if (gameState!=="launched"){
      Matter.Body.setPosition(bird.body, {x: mouseX , y: mouseY});
  }
}


function mouseReleased(){
  slingshot.fly();
  gameState = "launched";
}

function keyPressed(){
  if(keyCode === 32){
     // slingshot.attach(bird.body);
  }
}