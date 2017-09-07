var demo = {}, centerX = 1500 / 2, centerY = 1000 / 2, bunny, speed = 6;

demo.state1 = function(){};
demo.state1.prototype = {
    preload: function(){
        game.load.spritesheet('bunny', 'assets/spritesheets/bunnyMove.png', 320, 320);
        game.load.image('landscape', 'assets/backgrounds/landscape.png');
    },
    create: function(){
        // Initialize physics engine
        game.physics.startSystem(Phaser.Physics.ARCADE);
        
        game.stage.backgroundColor = '#f4eb42';
        console.log('state1');
        addChangeStateEventListeners();
        
        //setBounds is necessary to have a deadzone camera
        game.world.setBounds(0,0, 2813, 1000);
        game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
        
        var landscape = game.add.sprite(0, 0, 'landscape');
        
        bunny = game.add.sprite(centerX, centerY, 'bunny');
        bunny.anchor.setTo(0.5, 0.5);
        bunny.scale.setTo(0.99, 0.99);
        game.physics.enable(bunny);
        bunny.body.collideWorldBounds = true;
        bunny.animations.add('walk', [0, 1, 2, 3, 4]);
        
        // Create a deadzone camera
        game.camera.follow(bunny);
        game.camera.deadzone = new Phaser.Rectangle(centerX - 300, 0, 600, 1000);
    },
    update: function(){
        // LEFT AND RIGHT
        if (game.input.keyboard.isDown(Phaser.Keyboard.RIGHT)){
            bunny.scale.setTo(0.99, 0.99);
            bunny.x += speed;
            bunny.animations.play('walk', 6, true);
        }
        else if (game.input.keyboard.isDown(Phaser.Keyboard.LEFT)){
            bunny.scale.setTo(-0.99, 0.99);
            bunny.x -= speed;
            bunny.animations.play('walk', 6, true);
        }
        else{
            bunny.animations.stop('walk');
            bunny.frame = 0;
        }
        
        // UP AND DOWN
        if (game.input.keyboard.isDown(Phaser.Keyboard.UP)){
            bunny.y -= speed;
            if (bunny.y < 512){
                bunny.y = 512;
                bunny.animations.play('walk', 6, true);
            }
        }
        else if (game.input.keyboard.isDown(Phaser.Keyboard.DOWN)){
            bunny.y += speed;
            bunny.animations.play('walk', 6, true);
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

