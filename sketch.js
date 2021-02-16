
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ground
var ball
var dustbinObj


function preload()
{

}

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world; 

	//Create the Bodies Here.
    ground = new Ground(width/2, 650, width, 10);
	ball=new Paper(width/2-300,height-105,25)
	Engine.run(engine);
  dustbinObj = new Dustbin(680, 640);
}


function draw() {
  rectMode(CENTER);
  background("red");
  ground.display()
  dustbinObj.display()
  ball.display()
  drawSprites() 
 
}

function keyPressed(){
  if (keyCode === UP_ARROW) {
    Matter.Body.applyForce(ball.body,ball.body.position,{x:550,y:-550})
  }
}

