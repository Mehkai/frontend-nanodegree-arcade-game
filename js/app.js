//grab the canvas details




// Enemies our player must avoid
var Enemy = function(creature) {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started
    this.number = creature.number || 3;
    this.speed = creature.speed || 5;
    this.x = 0;
    this.y = creature.y;
    
    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = creature.img ||'images/enemy-bug.png';
};

Enemy.prototype.checkCount = function(){

if(allEnemies.length < this.number) {
      creatureCreator(this);
    }
};

Enemy.prototype.checkCollision = function(){

if(((this.x+30) >= player.x && this.x <= (player.x+40)) && (this.y >= player.y && this.y <= (player.y+40))) {
  player.life--;
  player.x = playerStartX;
  player.y = playerStartY;
}
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
    
    var gameTime = 0;
    gameTime += dt;
    this.x += this.speed * dt;
    if(this.x >= 400){
      var loc = allEnemies.indexOf(this);
      allEnemies.splice(loc, 1);
    }
    for(var i=0; i < allEnemies.length; i++){
      allEnemies[i].checkCount();
      allEnemies[i].checkCollision();
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

    //this.x += this.speed*dt;
};

Player.prototype.render = function() {

    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
    this.y = constrain(this.y, 0, height-canvas.height/6);
    this.x = constrain(this.x, 0+canvas.width/6, width-canvas.width/6);
};

// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player
//Player.prototype = Object.create(Enemy.prototype);

Player.prototype.handleInput = function(key){
     if(key === 'left'){
        player.x -= canvas.width/5;
    }
     if(key === 'right'){
        player.x += canvas.width/5;
    }
     if(key === 'up'){
        player.y -= canvas.height/7;
    }
     if(key === 'down'){
        player.y += canvas.height/7;
    }

};

// create a randomizer for the bug position y and bug speed. Use Fisher-Yates shuffle
function shuffle(array) {
  var m = array.length, t, i;

  // While there remain elements to shuffle…
  while (m) {

    // Pick a remaining element…
    i = Math.floor(Math.random() * m--);

    // And swap it with the current element.
    t = array[m];
    array[m] = array[i];
    array[i] = t;
  }
  console.log(array[0]);
  return array[0];

}

var speed = [50, 100, 150, 175, 200, 225, 250, 275, 300, 325, 350, 375];
var enemyRow = [canvas.height/2.75, canvas.height/2.75-canvas.height/7.25, canvas.height/2.75-(2*(canvas.height/7.25))];


var allEnemies = [];

var bug = {
  number: 3,
  speed: shuffle(speed),
  y: canvas.height/2.75, //enemyRow[shuffle(enemyRow)],
  img: 'images/enemy-bug.png'
};
console.log("Created Bug");
//allEnemies.push(bug);


var creatureCreator = function(creature){

while(allEnemies.length < creature.number){
// run through this and create one creature per the number
// need an array to represent the different creatures
   var en = new Enemy(creature);
   en.speed = shuffle(speed);
   en.y = shuffle(enemyRow);
   allEnemies.push(en);
}

};

creatureCreator(bug);
console.log(allEnemies);










var playerStartX = canvas.width/2.5;
var playerStartY = canvas.height - canvas.height/2.75;
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
