const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var ground;
var particles = [];
var plinkos = [];
var divisions = [];

var divisionHeight = 300;


function setup() {
  createCanvas(490,600);
  engine = Engine.create();
  world = engine.world;

  //divisions = new Division(10,500,20,80)
  ground = new Ground(200,590,800,20);

  for(var k = 0; k <= width; k = k + 80 ) {
    divisions.push(new Division(k,height-divisionHeight/2,10,divisionHeight));

    }
    for(var j = 25; j <= width; j=j+35){
      plinkos.push(new Plinkos(j,30,8));
    }
    for (var j = 40; j<= width;j=j+35){
      plinkos.push(new Plinkos(j,90,8))
    }
    for (var j = 25; j<= width;j=j+35){
      plinkos.push(new Plinkos(j,150,8))
    }
    for (var j = 40; j<= width;j=j+35){
      plinkos.push(new Plinkos(j,210,8))
    }
   
}

function draw() {
  background("black");
  Engine.update(engine);

  ground.display();

  if(frameCount%60===0){
    particles.push(new Particle(random(width/2-150,width/2+150),10,7));
  }
  for(var i = 0; i< particles.length; i++) {
    particles[i].display();
  }

  for(var j = 0; j< plinkos.length; j++) {
    plinkos[j].display();
  }
  for(var k = 0; k < divisions.length; k++) {
    divisions[k].display();
  }
  
  
  drawSprites();
}