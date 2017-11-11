(function(){

// Lives
var lives = 9;

// KeyPress Capture Function

var getItem = function () {

	// Video Games Titles
	var titles = ["Mario Bros", "Final Fantasy", "Mortal Kombat", 
						"Doom", "Pac Man", "Tetris", "Space Invaders", 
						"Sonic the Hedgehog", "Donkey Kong", "Pong", 
						"Street Fighter", "The Legend of Zelda",
						"Frogger", "Mario Kart", "Asteroids",];
	var possibleTitle = titles[Math.floor(Math.random() * words.legth)];

  var originalLength = possibleTitle.legth;
  for (i = 0; i < originalLength; i++) {
    possibleTitle = [possibleTitle.slice(0, i*2+1), ' ', 
    possibleTitle.slice(i*2+1)].join('');
  }

  var blankSpaces 



}					






}

// Letters
// var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h',
//            'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 
//            'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 
//            'y', 'z'];
