const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var engine, world;
var ground;
var pin1, pin2, pin3, pin4, pin5, pin6, pin7, pin8, pin9, pin10, pin11;
var ball;
var constraint1;

function setup(){
	createCanvas(600, 600);

	engine = Engine.create();
	world = engine.world;

	ground = new Ground (300,600,600,20);
	ball = new Ball (175,350,30);
	constraint1 = new Rope (ball.body, {x: 175, y: 100});
	
	pin1 = new Pins (340,555,30,80);
	pin2 = new Pins (385,555,30,80);
	pin3 = new Pins (430,555,30,80);
	pin4 = new Pins (475,555,30,80);
	pin5 = new Pins (362.5,485,30,80);
	pin6 = new Pins (405.5,485,30,80);
    pin7 = new Pins (450.5,485,30,80);
	pin8 = new Pins (385,415,30,80);
	pin9 = new Pins (430,415,30,80);
//  pin10 = new Pins (410.5,345,30,80);
//	pin11 = new Pins (0,0,30,80)

	Engine.run(engine); 
}

function draw() {
  rectMode(CENTER);
  background(245);
  Engine.update(engine)


  ground.display();
  constraint1.display();
  ball.display();

  pin1.display();
  pin2.display();
  pin3.display();
  pin4.display();
  pin5.display();
  pin6.display();
  pin7.display();
  pin8.display();
  pin9.display();
  //pin10.display();
  //pin11.display();

  drawSprites();	
}

function mouseDragged(){
	Matter.Body.setPosition(ball.body, {x: mouseX, y: mouseY})
}