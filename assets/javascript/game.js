// Video Games Titles
var titles = ['mario bros', 'final fantasy', 'mortal kombat', 
              'doom', 'pac man', 'tetris', 'space invaders', 
              'sonic the hedgehog', 'donkey kong', 'pong', 
              'street fighter', 'the legend of zelda',
              'frogger', 'mario kart', 'asteroids'];
// Letters
var letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h',
               'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 
               'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 
               'y', 'z'];
// Other Variables 
var lives = 9;
var wins = 0;
var blankSpaces = "";
var lettersGuessed = [];

(function(){

// KeyPress Capture Function
var getItem = function () {


	var possibleTitle = titles[Math.floor(Math.random() * titles.length)];

  //Space out possibleWord
  var originalLength = possibleTitle.length;
  for (i = 0; i < originalLength; i++) {
    possibleTitle = [possibleTitle.slice(0, i*2+1), ' ', 
    possibleTitle.slice(i*2+1)].join('');
  }

  // Displays possible words blank spaces
  var titleLength = possibleTitle.length;

  for (i = 0; i < titleLength; i++) {
    var x = possibleTitle.charAt(i);

    if (x === " " || x === "/'") {
      blankSpaces += x;
    }
    else { 
      blankSpaces += "_"
    }
  }
  document.getElementById("blankSpaces").innerHTML = blankSpaces;


  document.onkeypress = function(keyPressed) {
    var keyPressed = keyPressed || window.event;
    charCode = keyPressed.keyCode || keyPressed.which,
    lettersGuessed = String.fromCharCode(charCode);

  document.getElementById("lettersGuessed").innerHTML += lettersGuessed;
  document.getElementById("lives").innerHTML = lives;
  lives--;

  if (titles.includes(keyPressed)) {
    
  }





  if (lives === -1) {
    alert("Game Over!")
    }

  }

};
getItem();
})();
					
//Spare Video Game Title Bank




// Experimental Code
// if (titles.includes(keyPressed)) {
//   for (i = 0; i < titles.length; i++) {
//     if (keyPressed == titles[i]) {
//       blankSpaces[i] = keyPressed;
//     }
//   }
// }