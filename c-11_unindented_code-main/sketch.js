//declaring variables
var trex, trex_running, trex_collided;
var ground, invisibleGround, groundImage;

//function used to load images or sounds
function preload() {
    trex_running = loadAnimation("trex1.png", "trex3.png", "trex4.png");
    trex_collided = loadImage("trex_collided.png");
    groundImage = loadImage("ground2.png")
}

//create the sprites and the canvas
function setup() {
    //create a blank space for your code
    createCanvas(600, 200);

    //create a trex sprite
    trex = createSprite(50,160,20,50);
    trex.addAnimation("running", trex_running);

    //changing size of the sprite
    trex.scale = 0.5;

    //create a ground sprite
    ground = createSprite(200,180,400,20);
    ground.addImage("ground",groundImage);

    //create the infinite ground
    ground.x = ground.width /2;

    //ground is moving in left direction
    ground.velocityX = -4;
}

function draw() {
    //giving a background colour
    background("teal");

    //jump when the space button is pressed
    if (keyDown("space")) {
    trex.velocityY = -10;
    }

    //give gravity
    trex.velocityY = trex.velocityY + 0.8

    //infinitely creating the ground
    if (ground.x < 0) {
    ground.x = ground.width / 2;
    }

    //to make the trex stand in the ground
    trex.collide(ground);

    //display the sprites on the screen
    drawSprites();
}
