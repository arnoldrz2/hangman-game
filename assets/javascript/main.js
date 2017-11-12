// Array of Video Games Titles
var titles = ["mario bros", "mortal kombat", 
              "doom","donkey kong", "pong", "pac man", 
              "tetris", "space invaders", "sonic the hedgehog", 
              "final fantasy", "street fighter", 
              "the legend of zelda", "frogger", "mario kart", "asteroids"];
// Array of Letters
var letters = ["a", "b", "c", "d", "e", "f", "g", "h",
               "i", "j", "k", "l", "m", "n", "o", "p", 
               "q", "r", "s", "t", "u", "v", "w", "x", 
               "y", "z"];
// Other Variables
var lettersGuessed = "";
var currentTitle = [];
var alreadyGuessed = [];


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
  var blankSpace = "_ "
  for (var i = 0; i < title.length; i++) {
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
      }
    }
    $('#current-title').html(currentTitle);
  }






  }
}
newGame();
