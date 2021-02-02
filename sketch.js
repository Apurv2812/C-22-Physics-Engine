const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine,world,ground,ball;

function setup() {
  createCanvas(800,400);
  engine=Engine.create();
  world=engine.world;

var ground_option={
  isStatic:true
}

  ground=Bodies.rectangle(400,390,800,20,ground_option)
  World.add(world,ground);
  //adding our world's body to matter.js World

  var ball_option={
    restitution: 1
  }

  ball=Bodies.circle(200,100,20,ball_option)
  World.add(world,ball)

  console.log(ground);
}

function draw() {
  background(0);  
Engine.update(engine);
  rectMode(CENTER);
  rect(ground.position.x,ground.position.y,800,20);

  ellipseMode(CENTER);
  ellipse(ball.position.x,ball.position.y,20,20)
}