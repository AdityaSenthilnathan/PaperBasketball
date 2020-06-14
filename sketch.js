var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var paper1, ground;
var dustbin1, dustbin2, dustbin3;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:1.5, isStatic:false});
	//World.add(world, packageBody);
	


	ground = new Ground (400,620, 800, 10);
	paper1 = new Paper (250, 250, 10);
	dustbin1 = new DustBin (400 + 200,610, 200, 20);
	dustbin2 = new DustBin (490 + 200,570, 20, 100);
	dustbin3 = new DustBin (290 + 200,570, 20, 100);
	Engine.run(engine);

  
}


function draw() {

  rectMode(CENTER);
  background(0);
  Engine.update(engine);
  paper1.display();
  ground.display();
  dustbin1.display();
  dustbin3.display();
  dustbin2.display();
  //console.log(paper1.body.position);
  
  drawSprites();
  
 
}

//function keyIsDown("down")

function keyPressed(){
    if (keyIsDown(UP_ARROW)) {

		//console.log(paper1.body);
		//console.log(paper1.body.position);
		Matter.Body.applyForce(paper1.body, paper1.body.position,{x:10,y:-15});
		//Body.applyForce(paper1.body , paper1.body.position, {x:1, y:-1});

	}
	

}