demo.state2 = function(){};
demo.state2.prototype = {
    preload: function(){},
    create: function(){
        game.stage.backgroundColor = '#4286f4';
        console.log('state2');
        addChangeStateEventListeners();
    },
    update: function(){}    
};