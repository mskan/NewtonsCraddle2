const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

function setup() {
    canvas = createCanvas(windowWidth / 2, windowHeight / 1.5);
    engine = Engine.create();
    world = engine.world;

    let canvasmouse = Mouse.create(canvas.elt);
    canvasmouse.pixelRatio = pixelDensity();
    let options = {
        mouse: canvasmouse
    }
    mConstraint = MouseConstraint.create(engine, options);
    World.add(world,mConstraint);

    bob1 = new Pendulum(455,300,30);
    bob2 = new Pendulum(515,300,30);
    bob3 = new Pendulum(575,300,30);
    bob4 = new Pendulum(635,300,30);
    bob5 = new Pendulum(695,300,30);

    string1 = new Sling(bob1.body,{x:455,y:50})
    string2 = new Sling(bob2.body,{x:515,y:50})
    string3 = new Sling(bob3.body,{x:575,y:50})
    string4 = new Sling(bob4.body,{x:635,y:50})
    string5 = new Sling(bob5.body,{x:695,y:50})

    Engine.run(engine)
}

function draw() {
    background(0);

    bob1.display();
    bob2.display();
    bob3.display();
    bob4.display();
    bob5.display();
    string1.display();
    string2.display();
    string3.display();
    string4.display();
    string5.display();
    fill("white")
    text(mouseX+" , "+mouseY,mouseX,mouseY);

    Engine.update(engine)
}

function mouseDragged(){
  Matter.Body.setPosition(bob1.body,{x:mouseX,y:mouseY})
} 
