
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint =Matter.Constraint;


function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
  bobObject1= new Bob(200,500,20)
  bobObject2= new Bob(300,500,20)
  bobObject3= new Bob(400,500,20)
  bobObject4= new Bob(500,500,20)
  bobObject5= new Bob(600,500,20)
 
  roof=new Roof(400,200,500,20)
  rope1=new Rope(bobObject1.body,roof.body,-120,0);
  rope2=new Rope(bobObject2.body,roof.body,-60,0);
  rope3=new Rope(bobObject3.body,roof.body,0,0);
  rope4=new Rope(bobObject4.body,roof.body,60,0);
  rope5=new Rope(bobObject5.body,roof.body,120,0);
	Engine.run(engine);
 
}


function draw() {
  rectMode(CENTER);
  background(300);
  
  //drawSprites();
 
 roof.display();
 bobObject1.display();
 bobObject2.display();
 bobObject3.display();
 bobObject4.display();
 bobObject5.display();
 rope1.display();
 rope2.display();
 rope3.display();
 rope4.display();
 rope5.display();
}
function keyPressed(){
  if(keyCode===UP_ARROW){
Matter. Body.applyForce(bobObject1.body,bobObject3.body.position,{x:-20,y:-20})
  }
}

function mouseDragged(){
 
    Matter.Body.setPosition(this.bobObject1.body,{x:mouseX,y:mouseY});

}
function mouseReleased(){
 bodyA.fly()
}
