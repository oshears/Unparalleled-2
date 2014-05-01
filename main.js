var game = new Phaser.Game(800, 600, Phaser.AUTO, 'phaser-example', { preload: preload, create: create, update: update });

function preload() {

    game.load.image('phaser', 'assets/triangle.png');

}

var sprite;

var upKey;
var downKey;
var leftKey;
var rightKey;

function create() {

    game.stage.backgroundColor = '#736357';

    sprite = game.add.sprite(300, 300, 'phaser');

    //  In this example we'll create 4 specific keys (up, down, left, right) and monitor them in our update function

    upKey = game.input.keyboard.addKey(Phaser.Keyboard.UP);
    downKey = game.input.keyboard.addKey(Phaser.Keyboard.DOWN);
    leftKey = game.input.keyboard.addKey(Phaser.Keyboard.LEFT);
    rightKey = game.input.keyboard.addKey(Phaser.Keyboard.RIGHT);

    //wKey = game.input.keyboard.addKey(Phaser.Keyboard.w);

    sprite.anchor.setTo(0.5, 0.5);

}

function update() {


    if (upKey.isDown && leftKey.isDown){
        sprite.x-=5;
        sprite.y-=5;
        sprite.angle=135;
    }
    else if (upKey.isDown && rightKey.isDown){
        sprite.x+=5;
        sprite.y-=5;
        sprite.angle=225;
    }
    else if (upKey.isDown)
    {
        sprite.y-=5;
        sprite.angle=180;
    }
    else if (downKey.isDown && leftKey.isDown){
        sprite.x-=5;
        sprite.y+=5;
        sprite.angle=45;
    }
    else if (downKey.isDown && rightKey.isDown){
        sprite.x+=5;
        sprite.y+=5;
        sprite.angle=315;
    }
    else if (downKey.isDown)
    {
        sprite.y+=5;
        sprite.angle=0;
    }
    else if (leftKey.isDown)
    {
        sprite.x-=5;
        sprite.angle=90;
    }
    else if (rightKey.isDown)
    {
        sprite.x+=5;
        sprite.angle=270;
    }

}