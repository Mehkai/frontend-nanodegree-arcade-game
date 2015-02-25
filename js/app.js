//create scenes
var Scenes = function(order) {
  //Variables that apply to the different scenes in the game, start menu, pause etc...
  this.order = order;
  this.xMove = canvas.height/6;
  this.yMove = canvas.height/6;


};

//Generate random house piece on map for player to collect
Scenes.prototype.isHousePiece = function() {


};


//Check for edge collision with right screen edge for moving forward in the game
Scenes.prototype.checkEdgeCollision = function(){

    if(player.x >= 450){
      player.x = 0;
    }
};

Scenes.prototype.render = function() {
  var rowImages = [
                'images/water-block.png',   // Top row is water
                'images/stone-block.png',   // Row 1 of 3 of stone
                'images/stone-block.png',   // Row 2 of 3 of stone
                'images/stone-block.png',   // Row 3 of 3 of stone
                'images/grass-block.png',   // Row 1 of 2 of grass
                'images/dirt-block.png'    // Row 2 of 2 of grass
            ],
            numRows = 6,
            numCols = 5,
            row, col;

  if(this.order === 1) {
          for (row = 0; row < numRows; row++) {
            for (col = 0; col < numCols; col++) {
                /* The drawImage function of the canvas' context element
                 * requires 3 parameters: the image to draw, the x coordinate
                 * to start drawing and the y coordinate to start drawing.
                 * We're using our Resources helpers to refer to our images
                 * so that we get the benefits of caching these images, since
                 * we're using them over and over.
                 */
                
                ctx.drawImage(Resources.get(rowImages[row]), col * canvas.height/6, row * canvas.width/6);
                
                //Starting Menu House Scene
                ctx.drawImage(Resources.get('images/Window Tall.png'),  3 * this.xMove, 2 * this.yMove);
                ctx.drawImage(Resources.get('images/Door Tall Closed.png'),  2 * this.xMove, 2.3 * this.yMove);
                ctx.drawImage(Resources.get('images/Window Tall.png'),  1 * this.xMove, 2 * this.yMove);
                
                ctx.drawImage(Resources.get('images/Roof North East.png'),  3 * this.xMove, 0.5 * this.yMove);
                ctx.drawImage(Resources.get('images/Roof North.png'),  2 * this.xMove, 0.5 * this.yMove);
                ctx.drawImage(Resources.get('images/Roof North West.png'),  1 * this.xMove, 0.5 * this.yMove);
                
                ctx.drawImage(Resources.get('images/Roof South East.png'),  3 * this.xMove, 1.2 * this.yMove);
                ctx.drawImage(Resources.get('images/Roof South.png'),  2 * this.xMove, 1.3 * this.yMove);
                ctx.drawImage(Resources.get('images/Roof South West.png'),  1 * this.xMove, 1.2 * this.yMove);

                ctx.drawImage(Resources.get('images/Shadow South.png'),  3 * this.xMove, 2.1 * this.yMove);
                ctx.drawImage(Resources.get('images/Shadow South.png'),  2 * this.xMove, 2.1 * this.yMove);
                ctx.drawImage(Resources.get('images/Shadow South.png'),  1 * this.xMove, 2.1 * this.yMove);

                ctx.drawImage(Resources.get('images/Tree Short.png'),  3 * this.xMove, 3.1 * this.yMove);
                ctx.drawImage(Resources.get('images/Ramp South.png'),  2 * this.xMove, 3.3 * this.yMove);
                ctx.drawImage(Resources.get('images/Tree Short.png'),  1 * this.xMove, 3.1 * this.yMove);
            }

            ctx.drawImage(Resources.get(firstSpeechBubble.img), player.x + 75, player.y-100);
            ctx.font = 'normal 9pt sans';
            ctx.fillText(firstSpeechBubble.text, player.x + 85, player.y );
            ctx.fillText(firstSpeechBubble.text2, player.x + 85, player.y + 10);
            ctx.fillText(firstSpeechBubble.text3, player.x + 85, player.y + 20);
            ctx.fillText(firstSpeechBubble.text4, player.x + 85, player.y + 30);
            ctx.fillText(firstSpeechBubble.text4, player.x + 85, player.y + 30);
            ctx.fillText(firstSpeechBubble.text5, player.x + 85, player.y + 40);
            ctx.fillText(firstSpeechBubble.text5, player.x + 85, player.y + 40);
            ctx.fillStyle = 'black';
            ctx.font = lifeBar.font;
            ctx.fillText(lifeBar.title, lifeBar.xCounter, lifeBar.yCounter);
            for (var heart = 0; heart < lifeBar.total*20; heart+=20) {
           ctx.drawImage(Resources.get('images/Heart.png'), lifeBar.xCounter + 75 + heart, lifeBar.yCounter - 22, 20, 30);
           }
           // ctx.fillStyle = 'red';
           //  ctx.fillRect(0, 86, 20, 30);
           //  ctx.fillRect(0, 174, 20, 30);
           //  ctx.fillRect(0, 260, 20, 30);
           //  ctx.fillRect(0, 385, 20, 30);
           //  ctx.fillRect(101, 86, 20, 30);
           //  ctx.fillRect(101, 174, 20, 30);
           //  ctx.fillRect(101, 260, 20, 30);
           //  ctx.fillRect(101, 385, 20, 30);
        
        }
 }
 if(this.order === 2) {
          for (row = 0; row < numRows; row++) {
            for (col = 0; col < numCols; col++) {
                /* The drawImage function of the canvas' context element
                 * requires 3 parameters: the image to draw, the x coordinate
                 * to start drawing and the y coordinate to start drawing.
                 * We're using our Resources helpers to refer to our images
                 * so that we get the benefits of caching these images, since
                 * we're using them over and over.
                 */
                
                ctx.drawImage(Resources.get(rowImages[row]), col * canvas.height/6, row * canvas.width/6);
                
                //Starting Menu House Scene
                ctx.drawImage(Resources.get('images/Window Tall.png'),  3 * this.xMove, 2 * this.yMove);
                ctx.drawImage(Resources.get('images/Door Tall Closed.png'),  2 * this.xMove, 2.3 * this.yMove);
                ctx.drawImage(Resources.get('images/Window Tall.png'),  1 * this.xMove, 2 * this.yMove);
                
                ctx.drawImage(Resources.get('images/Roof North East.png'),  3 * this.xMove, 0.5 * this.yMove);
                ctx.drawImage(Resources.get('images/Roof North.png'),  2 * this.xMove, 0.5 * this.yMove);
                ctx.drawImage(Resources.get('images/Roof North West.png'),  1 * this.xMove, 0.5 * this.yMove);
                
                ctx.drawImage(Resources.get('images/Roof South East.png'),  3 * this.xMove, 1.2 * this.yMove);
                ctx.drawImage(Resources.get('images/Roof South.png'),  2 * this.xMove, 1.3 * this.yMove);
                ctx.drawImage(Resources.get('images/Roof South West.png'),  1 * this.xMove, 1.2 * this.yMove);

                ctx.drawImage(Resources.get('images/Shadow South.png'),  3 * this.xMove, 2.1 * this.yMove);
                ctx.drawImage(Resources.get('images/Shadow South.png'),  2 * this.xMove, 2.1 * this.yMove);
                ctx.drawImage(Resources.get('images/Shadow South.png'),  1 * this.xMove, 2.1 * this.yMove);

                ctx.drawImage(Resources.get('images/Tree Short.png'),  3 * this.xMove, 3.1 * this.yMove);
                ctx.drawImage(Resources.get('images/Ramp South.png'),  2 * this.xMove, 3.3 * this.yMove);
                ctx.drawImage(Resources.get('images/Tree Short.png'),  1 * this.xMove, 3.1 * this.yMove);
            }

            ctx.drawImage(Resources.get(secondSpeechBubble.img), player.x + 75, player.y);
            ctx.font = 'normal 9pt sans';
            ctx.fillText(secondSpeechBubble.text, player.x + 85, player.y + 100);
            ctx.fillText(secondSpeechBubble.text2, player.x + 85, player.y + 110);
            ctx.fillText(secondSpeechBubble.text3, player.x + 85, player.y + 120);
            ctx.fillText(secondSpeechBubble.text4, player.x + 85, player.y + 130);
            ctx.fillText(secondSpeechBubble.text4, player.x + 85, player.y + 130);
            ctx.fillText(secondSpeechBubble.text5, player.x + 85, player.y + 140);
            ctx.fillText(secondSpeechBubble.text5, player.x + 85, player.y + 140);
            
        
        }
        if(this.xMove >= 450) {
          this.xMove = 600;
          scene.order = 3;
        }
        ctx.fillStyle = 'black';
        ctx.font = lifeBar.font;
        ctx.fillText(lifeBar.title, lifeBar.xCounter, lifeBar.yCounter);
        //ctx.fillText(lifeBar.item, lifeBar.xCounter + 100, lifeBar.yCounter);
        for (var heart1 = 0; heart1 < lifeBar.total*20; heart1+=20) {
          ctx.drawImage(Resources.get('images/Heart.png'), lifeBar.xCounter + 75 + heart1, lifeBar.yCounter - 22, 20, 30);
        }
        for (var box = 0; box < lifeBar.item*20; box+=20) {
          ctx.fillStyle = 'white';
          ctx.fillRect(lifeBar.xCounter + 155 - box, lifeBar.yCounter - 22, 20, 30);
        }
        ctx.fillStyle = 'white';
        ctx.fillRect(housePieceCollection.xCounter + 200, housePieceCollection.yCounter - 22, 20, 30);
        ctx.fillStyle = 'black';
        ctx.fillText(housePieceCollection.title, housePieceCollection.xCounter, housePieceCollection.yCounter);
        ctx.fillText(housePieceCollection.total, housePieceCollection.xCounter + 200, housePieceCollection.yCounter);
 }
 if(scene.order >= 3){
          for (row = 0; row < numRows; row++) {
            for (col = 0; col < numCols; col++) {
                /* The drawImage function of the canvas' context element
                 * requires 3 parameters: the image to draw, the x coordinate
                 * to start drawing and the y coordinate to start drawing.
                 * We're using our Resources helpers to refer to our images
                 * so that we get the benefits of caching these images, since
                 * we're using them over and over.
                 */
                
                ctx.drawImage(Resources.get(rowImages[row]), col * canvas.height/6, row * canvas.width/6);

            }
        ctx.font = lifeBar.font;
        ctx.fillStyle = 'black';
        ctx.fillText(lifeBar.title, lifeBar.xCounter, lifeBar.yCounter);
        //ctx.fillText(lifeBar.item, lifeBar.xCounter + 100, lifeBar.yCounter);
        for (var heart2 = 0; heart2 < lifeBar.total*20; heart2+=20) {
          ctx.drawImage(Resources.get('images/Heart.png'), lifeBar.xCounter + 75 + heart2, lifeBar.yCounter - 22, 20, 30);
        }
        for (var box2 = 0; box2 < lifeBar.item*20; box2+=20) {
          ctx.fillStyle = 'white';
          ctx.fillRect(lifeBar.xCounter + 155 - box2, lifeBar.yCounter - 22, 20, 30);
        }
        ctx.fillStyle = 'white';
        ctx.fillRect(housePieceCollection.xCounter + 200, housePieceCollection.yCounter - 22, 20, 30);
        ctx.fillStyle = 'black';
        ctx.fillText(housePieceCollection.title, housePieceCollection.xCounter, housePieceCollection.yCounter);
        ctx.fillText(housePieceCollection.total, housePieceCollection.xCounter + 200, housePieceCollection.yCounter);
          }
         // if(houseParts < houseParts.length) {


          //}
           
            if(pieceScenes.order >= 1) {
              console.log(houseParts[pieceScenes.order-1]);
              ctx.drawImage(Resources.get(houseParts[pieceScenes.order - 1]),  xPosHousePiece[pieceScenes.order - 1], yPosHousePiece[pieceScenes.order - 1]);
              player.checkCollision(pieceScenes.order - 1);

              
            }
            // if(pieceScenes.order === 5) {
            //   //console.log(houseParts[0]);
            //   ctx.drawImage(Resources.get(houseParts[1]),  xPosHousePiece[1], yPosHousePiece[1]);
            //   // console.log(yPosHousePiece[1]);
            //   player.checkCollision(1);
              
            // }
            // if(pieceScenes.order === 6) {
            //   //console.log(houseParts[0]);
            //   ctx.drawImage(Resources.get(houseParts[2]),  xPosHousePiece[2], yPosHousePiece[2]);
            //   // console.log(yPosHousePiece[1]);
            //   player.checkCollision(2);
              
            //}

             scene.checkEdgeCollision();
             //console.log(player.x + ', ' + player.y);

 }

};

//create speech Bubbles
var SpeechBubbles = function(bubble){
  //variables for speach bubbles
  this.x = bubble.x;
  this.y = bubble.y;
  this.img = 'images/SpeechBubble.png';
  bubbleHeight = 50;
  this.xText = this.x + 15;
  this.yText = this.y + 100 ;
  this.text = bubble.text;
  this.text2 = bubble.text2;
  this.text3 = bubble.text3;
  this.text4 = bubble.text4;
  this.text5 = bubble.text5;

};

//Create buttons
var Buttons = function(button) {
  //variables for the buttons in the menus etc...
  this.x = button.x;
  this.y = button.y;
  this.width = button.width;
  this.height = button.height;
  this.cornerRadius = button.cornerRadius;
  this.img = button.img;
  this.clr = button.clr;
  this.txt = button.txt;

};

//draw buttons
Buttons.prototype.render = function() {

  ctx.lineJoin = "round";
  ctx.lineWidth = this.cornerRadius;
  ctx.strokeRect(this.x+(this.cornerRadius/2), this.y + (cornerRadius/2), this.width-this.cornerRadius, this.height-this.cornerRadius);
  ctx.fillRect(this.x+(this.cornerRadius/2), this.y + (cornerRadius/2), this.width-this.cornerRadius, this.height-this.cornerRadius);
};





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
      if(scene.order === 2){
        if(((this.x+30) >= scene.xMove && this.x <= (scene.xMove+40) /*&& (this.y >= scene.yMove && this.y <= (scene.yMove+40))*/) ) {
          scene.xMove = this.x;

        }

      }
      if(scene.order >= 3) {
        if(((this.x+30) >= player.x && this.x <= (player.x+40)) && (this.y >= player.y && this.y <= (player.y+40))) {
          lifeBar.item++;
          console.log(lifeBar.total);
          player.x = playerStartX;
          player.y = playerStartY;
        }
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
    
    if(scene.order === 1){

    }
    if(scene.order >= 2){
      this.x += this.speed * dt;
      if(this.x >= 500){
        var loc = allEnemies.indexOf(this);
        allEnemies.splice(loc, 1);
      }
      for(var i=0; i < allEnemies.length; i++){
        allEnemies[i].checkCount();
        allEnemies[i].checkCollision();
      }
    }


};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
  if(scene.order === 1 ) {

  }
  if(scene.order >= 2)
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.
var Player = function(x,y, life) {
    //Variables applied to each instance goes here
    this.x = x;
    this.y = y;
    // The image/sprite for our player character
    this.sprite = 'images/char-boy.png';
    this.life = life;
    this.piecesCollected = 0;
};

Player.prototype.checkCollision = function (num) {
    if(((this.x) >= xPosHousePiece[num] && this.x <= (xPosHousePiece[num] +50)) && (this.y >= yPosHousePiece[num] && this.y <= (yPosHousePiece[num]+50))){
        pieceScenes.order += 1;
        xPosHousePiece[num] = 600;
        player.piecesCollected += 1;
        housePieceCollection.total -= 1;
        console.log('piece pos y ' + yPosHousePiece[num] + ', ' + 'plus50 ' + (yPosHousePiece[num] + 50));
        console.log('piece pos x ' + xPosHousePiece[num] + ', ' + 'plus50 ' + (xPosHousePiece[num] + 50));
        console.log('ply x ' + player.x + ', ' + 'ply y ' + player.y);
        //houseParts.splice(0,1);
        //shuffle(houseParts);
    }

};

Player.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.

    //this.x += this.speed*dt;
    if(player.y <= canvas.height/20){
      player.life--;
      player.x = playerStartX;
      player.y = playerStartY;

    }
    if(scene.order === 1) {
      if(player.y <= canvas.height/2) {
        scene.order = 2;
        console.log(scene.order);
      }
    }
    if(scene.order >= 3) {
      if(player.x >= 450) {
        scene.order += 1;
        pieceScenes.order = 1;
        console.log(scene.order);
      }
    }

};

Player.prototype.render = function() {

    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
    
};

// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player
//Player.prototype = Object.create(Enemy.prototype);

Player.prototype.handleInput = function(key){
     if(key === 'left' && player.x >= canvas.width/5){
        player.x -= canvas.width/5;
    }
     if(key === 'right' /*&& player.x <= canvas.width -canvas.width/3*/){
        player.x += canvas.width/5;
    }
     if(key === 'up' /*&& player.y >= canvas.height/7*/){
        player.y -= canvas.height/7;
    }
     if(key === 'down' && player.y < canvas.height - canvas.height/2){
        player.y += canvas.height/7;
        //console.log(player.y)
    }

};

//make house piece and life counters

var Counters = function(title, total, x, y) {
  this.title = title;
  this.item = 0;
  this.total = total;
  this.font = 'normal 15pt arial';
  this.xCounter = x;
  this.yCounter = y;
  this.array = [];

};

//Begin creation of game elements****************************************************

//create the scenes menu, lvl and others

var scene = new Scenes(1);
var houseWindow = 'images/Window Front.png';
var door = 'images/Door Tall Closed.png';
var roofCorner = 'images/Roof South West.png';
var roofMiddle = 'images/Roof South.png';



var houseParts = [
   houseWindow,
   door,
   houseWindow,
   roofCorner,
   roofMiddle,
   roofCorner,
   roofMiddle,
   roofCorner,
   roofCorner

];

var xPosHousePiece = [ 0, 101, 202, 303, 404, 0, 101, 202, 303, 404, 0, 101, 202, 303, 404, 0, 101, 202, 303, 404];
var yPosHousePiece = [ 86, 174, 260, 86, 174, 260, 86, 174, 260, 86, 174, 260, 86, 174, 260,];

shuffle(xPosHousePiece);
shuffle(yPosHousePiece);
shuffle(houseParts);

var pieceScenes = new Scenes (0);



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
  //console.log(array[0]);
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
//console.log("Created Bug");
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











var playerStartX = canvas.width/2.5;
var playerStartY = canvas.height - canvas.height/2.75;
var player = new Player(playerStartX,playerStartY, 5);


//Create speech bubbles for player interaction
var fBubble = {
  x : player.x + 75,
  y : player.y - 110,
  text : "Finally I am home,",
  text2 : "Guess I will head",
  text3 : "inside.",
  text4 : "Press Up Arrow",
  text5 : "to move Up",

};
var sBubble = {
  x : player.x + 75,
  y : player.y - 110,
  text : "Oh No!!!",
  text2 : "They are stealing",
  text3 : "My House!",
  text4 : "I need te get",
  text5 : "it Back!!!",
};

var firstSpeechBubble = new SpeechBubbles(fBubble);
var secondSpeechBubble = new SpeechBubbles(sBubble);

//create life text bar

var lifeBar = new Counters(  'Health', 5, 20, 30);


//create house piece bar

var housePieceCollection = new Counters(  'House Parts Missing', 8, 252, 30);


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
