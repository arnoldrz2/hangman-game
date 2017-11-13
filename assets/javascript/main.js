window.onload = function() {
// Array of Video Games Titles
var titles = ["mariobros", "mortalkombat", 
              "doom","donkeykong", "pong", "pacman", 
              "tetris", "spaceinvaders", "sonicthehedgehog", 
              "finalfantasy", "streetfighter", 
              "thelegendofzelda", "frogger", "mariokart", "asteroids"];
// Array of Letters
var letters = ["a", "b", "c", "d", "e", "f", "g", "h",
               "i", "j", "k", "l", "m", "n", "o", "p", 
               "q", "r", "s", "t", "u", "v", "w", "x", 
               "y", "z"];
// Other Variables
var lettersGuessed = "";
var currentTitle = [];
var alreadyGuessed = [];

// alert("Press Enter to Begin!")

function newGame () {
  // Beginning Stats
  var lives = 10;
  $('#num-lives').html(lives);
  var wins = 0;
  $('#num-wins').html(wins)

  //Random Title Gets Chosen
  var title = titles[Math.floor(Math.random() * titles.length)];
  console.log(title);

  //Title Gets Loaded Onto Screen As Blank Spaces
  var blankSpace = "_";
  for (i = 0; i < title.length; i++) {
      currentTitle.push(blankSpace);
    }
  $('#current-title').html(currentTitle);



  //User Presses Key To Guess Leters
  document.onkeyup = function(event) {
    userGuess = event.key.toLowerCase();

  if(title.includes(userGuess)) {
    for (i=0; i < title.length; i++) {
      if (userGuess == title[i]) {
        currentTitle[i] = userGuess;
        alreadyGuessed.push(userGuess);
      }
    }
    $('#current-title').html(currentTitle);
    $('#already-guessed').text(alreadyGuessed.join(', '));
  }

  else {
    lives--;
    $('#num-lives').text(lives);
    alreadyGuessed.push(userGuess);
    $('#already-guessed').text(alreadyGuessed.join(', '));
  }


 
  





  if (currentTitle.join("") == title){
    alert("You Win!")
    wins++;
    $('#num-wins').text(wins);
  }

  if (lives === 0) {
    alert("Game Over! Try Again?")
    window.location.reload();
  }


  }
}
newGame();
}


// Extra Code
// $('#already-guessed').html(alreadyGuessed);