// Video Games Titles
var title = ["mario bros", "mortal kombat", 
              "doom","donkey kong", "pong"];
// Letters
var letters = ["a", "b", "c", "d", "e", "f", "g", "h",
               "i", "j", "k", "l", "m", "n", "o", "p", 
               "q", "r", "s", "t", "u", "v", "w", "x", 
               "y", "z"];
// Other Variables 
var lives = 9;
var wins = 0;
var blankSpaces = "";


(function(){


  var getItem = function () {


  	var possibleTitle = title[Math.floor(Math.random() * title.length)];

    //Space out possibleWord
    var titleLength = possibleTitle.length;
    for (i = 0; i < titleLength; i++) {
      possibleTitle = [possibleTitle.slice(0, i*2+1), ' ', 
      possibleTitle.slice(i*2+1)].join('');
    }

    // Displays possible words blank spaces
    var wordLength = possibleTitle.length;
    for (i = 0; i < wordLength; i++) {
      var x = possibleTitle.charAt(i);

      if (x === " " || x === "/'") {
        blankSpaces += x;
      }
      else { 
        blankSpaces += "_";
      }
    }
    document.getElementById("blank-spaces").innerHTML = blankSpaces;
  };
  




    document.onkeypress = function(keyPressed) {
      var keyPressed = keyPressed || window.event;
      charCode = keyPressed.keyCode || keyPressed.which,
      lettersGuessed = String.fromCharCode(charCode);


      var userGuess
        if (title.indexOf(userGuess) > -1) {
         alert("Your guess is correct.")
        }
        // else {
        //  alert("Your guess is wrong.")
        // }






    document.getElementById("letters-guessed").innerHTML += lettersGuessed + ", ";
    document.getElementById("num-lives").innerHTML = lives;
    lives--;








    // var userGuess = event.key.toLowerCase();

    // if (title.includes(userGuess)) {
    //   for (var i = 0; i < possibleTitle.length; i++) {
    //     if (userGuess == title[i]) {
    //       blankSpaces[i] = userGuess;
    //     }
    //   }
    // }






    if (lives === -1) {
      alert("Game Over!")
      }

    }
    getItem();
})();
					
//Spare Video Game Title Bank
  // "pac man", "tetris", "space invaders", 
  // "sonic the hedgehog", "final fantasy", 
  // "street fighter", "the legend of zelda",
  // "frogger", "mario kart", "asteroids"


// Experimental Code
// if (titles.includes(keyPressed)) {
//   for (i = 0; i < titles.length; i++) {
//     if (keyPressed == titles[i]) {
//       blankSpaces[i] = keyPressed;
//     }
//   }
// }