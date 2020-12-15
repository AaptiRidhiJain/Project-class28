
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var tree;
var stone;
var boyImage;
var mango1,mango2,mango3,mango4,mango5;
var ground;

function preload()
{
	boyImage = loadImage("boy.png");
}

function setup() {
	createCanvas(1300, 600);


	engine = Engine.create();
	world = engine.world;

	tree = new Tree(650,300,400,400);
	stone = new Stone(400,400,20,20);
	mango1 = new Mango(450,300,30);
	mango2 = new Mango(350,400,30);
	mango3 = new Mango(450,450,30);
	mango4 = new Mango(300,400,30);
	mango5 = new Mango(200,300,30);
	ground = new Ground(650,580,1300,20);
    

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine);
  tree.display();
  stone.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  ground.display();
  drawSprites();
 
}
