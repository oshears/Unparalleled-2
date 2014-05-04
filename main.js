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

    upKey = game.input.keyboard.addKey(Phaser.Keyboard.W);
    downKey = game.input.keyboard.addKey(Phaser.Keyboard.S);
    leftKey = game.input.keyboard.addKey(Phaser.Keyboard.A);
    rightKey = game.input.keyboard.addKey(Phaser.Keyboard.D);

    //wKey = game.input.keyboard.addKey(Phaser.Keyboard.w);

    sprite.anchor.setTo(0.5, 0.5);

}

function update() {

    sprite.body.velocity.x=0;
    sprite.body.velocity.y=0;

    if (upKey.isDown && leftKey.isDown){
        sprite.body.velocity.x=-150;
        sprite.body.velocity.y=-150;
        sprite.angle=135;
    }
    else if (upKey.isDown && rightKey.isDown){
        sprite.body.velocity.x=150;
        sprite.body.velocity.y=-150;
        sprite.angle=225;
    }
    else if (upKey.isDown)
    {
        sprite.body.velocity.y=-150;
        sprite.angle=180;
    }
    else if (downKey.isDown && leftKey.isDown){
        sprite.body.velocity.x=-150;
        sprite.body.velocity.y=150;
        sprite.angle=45;
    }
    else if (downKey.isDown && rightKey.isDown){
        sprite.body.velocity.x=150;
        sprite.body.velocity.y=150;
        sprite.angle=315;
    }
    else if (downKey.isDown)
    {
        sprite.body.velocity.y=150;
        sprite.angle=0;
    }
    else if (leftKey.isDown)
    {
        sprite.body.velocity.x=-150;
        sprite.angle=90;
    }
    else if (rightKey.isDown)
    {
        sprite.body.velocity.x=150;
        sprite.angle=270;
    }
    /*
        if(keyboard.isDown(Phaser.Keyboard.RIGHT)) {
            player.acceleration.x += 100;
            player.flipped = false;
        } else if(keyboard.justReleased(Phaser.Keyboard.RIGHT)) {
            player.acceleration.x = 0;
        }
        if(keyboard.isDown(Phaser.Keyboard.LEFT)) {
            player.acceleration.x -= 30;
            player.flipped = true;
        } else if(keyboard.justReleased(Phaser.Keyboard.LEFT)) {
            player.acceleration.x = 0;
        }
        */
}