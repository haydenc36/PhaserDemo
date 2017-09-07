var demo = {}, centerX = 1500 / 2, centerY = 1000 / 2, bunny, speed = 4;

demo.state1 = function(){};
demo.state1.prototype = {
    preload: function(){
        game.load.image('bunny', 'assets/sprites/bunny.png');
    },
    create: function(){
        game.stage.backgroundColor = '#f4eb42';
        console.log('state1');
        addChangeStateEventListeners();
        game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
        
        bunny = game.add.sprite(centerX, centerY, 'bunny');
        bunny.anchor.setTo(0.5, 0.5);
    },
    update: function(){
        if (game.input.keyboard.isDown(Phaser.Keyboard.RIGHT)){
            bunny.x += speed;
        }
        else if (game.input.keyboard.isDown(Phaser.Keyboard.LEFT)){
            bunny.x -= speed;
        }
        if (game.input.keyboard.isDown(Phaser.Keyboard.UP)){
            bunny.y -= speed;
        }
        else if (game.input.keyboard.isDown(Phaser.Keyboard.DOWN)){
            bunny.y += speed;
        }
        
    }    
};


function changeState(i, stateNum){
    game.state.start('state' + stateNum);
};


function addKeyCallback(key, fn, args){
    game.input.keyboard.addKey(key).onDown.add(fn, null, null, args);
};


function addChangeStateEventListeners(){
    addKeyCallback(Phaser.Keyboard.ONE, changeState, 1);
    addKeyCallback(Phaser.Keyboard.TWO, changeState, 2);
    addKeyCallback(Phaser.Keyboard.THREE, changeState, 3);
    addKeyCallback(Phaser.Keyboard.FOUR, changeState, 4);
    addKeyCallback(Phaser.Keyboard.FIVE, changeState, 5);
};

