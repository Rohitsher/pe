const Engine=Matter.Engine
const World=Matter.World
const Bodies=Matter.Bodies

var myengine,myworld
var ball,ground
function setup() {
  createCanvas(400,400)
  myengine=Engine.create();
  myworld=myengine.world;
var option={
isStatic:true
}
 ground=Bodies.rectangle(200,380,400,20,option)
World.add(myworld,ground)
var option={
restitution:1.0
  }
   ball=Bodies.circle(200,100,20,option)
  World.add(myworld,ball)
}
function draw() {
background(0)
Engine.update(myengine)
rectMode(CENTER)
fill ("brown")

rect(ground.position.x,ground.position.y,400,20)

ellipseMode(RADIUS)
fill ("red")
ellipse(ball.position.x,ball.position.y,20)  
}



