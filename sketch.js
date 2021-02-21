const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var stone, iron,rubber,hammer;

function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    plane = new Plane(600,height,1200,20)
    
    stone = new Stone(500,220,100,100);
    iron = new Iron(400,400);
    rubber=new Rubber(1000,425,70);
    hammer = new Hammer(10,100);

    sand1 = new Sand(605,455,10);
    sand2 = new Sand(610,455,10);
    sand3 = new Sand(615,455,10);
    sand4 = new Sand(620,450,10);
    sand5 = new Sand(625,450,10);
    sand6 = new Sand(615,445,10);
    sand7 = new Sand(620,445,10);
    sand8 = new Sand(625,440,10);

}

function draw(){
    background("lightBlue");
    Engine.update(engine);

    stone.display();
    plane.display();
    iron.display();
    rubber.display();
    hammer.display();
    sand1.display();
    sand2.display();
    sand3.display();
    sand4.display();
    sand5.display();
    sand6.display();
    sand7.display();
    sand8.display();
}