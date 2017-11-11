(function(){

// Lives
var lives = 9;

// KeyPress Capture Function

var getItem = function () {

	// Video Games Titles
	var titles = ['Mario Bros', 'Final Fantasy', 'Mortal Kombat', 
						'Doom'];
	var possibleTitle = titles[Math.floor(Math.random() * titles.length)];
  //Space out possibleWord
  var originalLength = possibleTitle.length;
  for (i = 0; i < originalLength; i++) {
    possibleTitle = [possibleTitle.slice(0, i*2+1), ' ', 
    possibleTitle.slice(i*2+1)].join('');
  }

  var blankSpaces = "";
  var titleLength = possibleTitle.length;

  for (i = 0; i < titleLength; i++) {
    var x = possibleTitle.charAt(i);

    if (x = possibleTitle) {
      blankSpaces += x;
    }
    else { 
      blankSpaces += "_"
    }
  }
  document.getElementById("blankSpaces").innerHTML = blankSpaces;
};

document.onkeypress = function(keyPressed) {
  var keyPressed = keyPressed || window.event;
  charCode = keyPressed.keyCode || keyPressed.which,
  lettersGuessed = String.fromCharCode(charCode);

document.getElementById("lettersGuessed").innerHTML += lettersGuessed;
document.getElementById("lives").innerHTML = lives;
lives--;

if (lives === -1) {
  alert("Game Over!")
  }
}

getItem();








})();
					
//Spare Video Game Title Bank
//  'Pac Man', 'Tetris', 'Space Invaders', 
//  'Sonic the Hedgehog', 'Donkey Kong', 'Pong', 
//  'Street Fighter', 'The Legend of Zelda',
//  'Frogger', 'Mario Kart', 'Asteroids'

// Letters
// var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h',
//            'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 
//            'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 
//            'y', 'z'];
