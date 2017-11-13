// THIS IS OLD. I'M NOT CURRENTLY USING THIS. KEEPING AS REFERENCE. WILL DELETE LATER.


// Video Games Titles
var title = ["mario bros", "mortal kombat", 
              "doom","donkey kong", "pong"];
// Letters
var letter = ["a", "b", "c", "d", "e", "f", "g", "h",
               "i", "j", "k", "l", "m", "n", "o", "p", 
               "q", "r", "s", "t", "u", "v", "w", "x", 
               "y", "z"];
// Other Variables 
var lives = 9;
var wins = 0;



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
    var blankSpaces = "";
    var wordLength = possibleTitle.length;
    for (i = 0; i < wordLength; i++) {
      var x = possibleTitle.charAt(i);

      if (x === " " || x === "/'") {
        blankSpaces += x;
      }
      else { 
        blankSpaces += "_";
      }
      document.getElementById("blank-spaces").innerHTML = blankSpaces;
    }
    
  

    document.onkeypress = function(keyPressed) {
      var keyPressed = keyPressed;
      charCode = keyPressed.keyCode || keyPressed.which,
      lettersGuessed = String.fromCharCode(charCode);

      // var blankSpaces = possibleTitle[i];

      if (possibleTitle.includes(lettersGuessed)) {
        for (i = 0; i < wordLength; i++) {
          var x = lettersGuessed;

          if (x === possibleTitle[i] && x === letter[i]) {
            blankSpaces += x;
          }

          document.getElementById("blank-spaces").innerHTML = lettersGuessed;


        // for (i = 0; i < possibleTitle.length; i++){
        //   if (lettersGuessed == possibleTitle[i]){
        //     blankSpaces[i] = lettersGuessed;
        //   }
        }

      
      }








    document.getElementById("already-guessed").innerHTML += lettersGuessed + ", ";
    document.getElementById("num-lives").innerHTML = lives;
    lives--;








    






    if (lives === -1) {
      alert("Game Over!")
      }

    }
};
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

// var userGuess
//   if (title.indexOf(userGuess) > -1) {
//    alert("Your guess is correct.")
//   }
// else {
//  alert("Your guess is wrong.")
// }
// var userGuess = event.key.toLowerCase();

// if (title.includes(userGuess)) {
//   for (var i = 0; i < possibleTitle.length; i++) {
//     if (userGuess == title[i]) {
//       blankSpaces[i] = userGuess;
//     }
//   }
// }