
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint = Matter.Constraint;
var GroundOb;
var block1, block2, block3, block4, block5, block6, block7, block8, block9;
var world, polygon;
var launchingForce=80;

function preload()
{
	polygon=loadImage("images/polygon.png")
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
  world = engine.world;


  polygon = Bodies.circle(50, 200, 20);
  World.add(world, polygon);
  
  block1 = new Block(330, 235, 30, 40);
  block2 = new Block(360, 235, 30, 40);
  block3 = new Block(390, 235, 30, 40);
  block4 = new Block(420, 235, 30, 40);
  block5 = new Block(450, 235, 30, 40);

  block6 = new Block(360, 195, 30, 40);
  block7 = new Block(390, 195, 30, 40);
  block8 = new Block(420, 195, 30, 40);

  block9 = new Block(390, 155, 30, 40);

  GroundOb = new Ground(width/2, 700, width, 25);
  slingShot = new Launcher(this.polygon,{x:100,y:200});






	var render = Render.create({
		element: document.body,
		engine: engine,
		options: {
		  width: 1300,
		  height: 600,
		  wireframes: false
		}
    });
    
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  textSize(18);
  text("Drag the Hexagon Stone and Release it, to launch it towards the blocks");
  image(polygon, 100,450,200,300);

  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  block8.display();
  block9.display();

  GroundOb.display()
  launcherOb.display()
}


function mouseDragged()
{
	Matter.Body.setPosition(polygon.body, {x:mouseX, y:mouseY}) 
}

function mouseReleased()
{
	launcherObject.fly();
}