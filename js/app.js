// Enemies our player must avoid
var Enemy = function(speed, x, y) {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started
    //this.number = number;
    this.speed = speed;
    this.x = x;
    this.y = y;
    this._index = 0;
    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
    //createEnemy();
    var gameTime = 0;
     gameTime += dt;
    this.x += this.speed * dt;
    if(Math.random() < 1 - Math.pow(0.993, gameTime)) {
        createEnemy();
    }
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {

    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.
var Player = function(x,y) {
    //Variables applied to each instance goes here
    this.x = x;
    this.y = y;
    // The image/sprite for our player character
    this.sprite = 'images/char-boy.png';
};
Player.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
    //this._index += this.speed*dt;
};

Player.prototype.render = function() {

    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player
//Player.prototype = Object.create(Enemy.prototype);

Player.prototype.handleInput = function(key){
     if(key === 'left'){
        player.x -= 83;
    }
     if(key === 'right'){
        player.x += 83;
    }
     if(key === 'up'){
        player.y -= 101;
    }
     if(key === 'down'){
        player.y += 101;
    }

};

var allEnemies = [];

function speedRan(){
    var ran = Math.random();
    if (ran < 0.25){
        return ran * 2000;
    }else if (ran < 0.50){
        return ran * 300;
    } else if (ran < 0.75){
        return ran * 100;
    }

}




function createEnemy () {
     for (var i = 0; i < 3; ++i){
          var sp = speedRan();
          var x = 0;
          var y = 0;
          if(i === 0){
             y = (i+0.55)*101;
          }
          if(i===1){
             y = (i+0.40)*101;
          }
          if(i===2){
             y = (i+0.25)*101;
          }
          var bug = new Enemy(sp,x,y);
          console.log("Created Bug");
          allEnemies.push(bug);
     }
}

createEnemy();



var playerStartX = 5*83/2;
var playerStartY = 606 - 200;
var player = new Player(playerStartX,playerStartY);


// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
