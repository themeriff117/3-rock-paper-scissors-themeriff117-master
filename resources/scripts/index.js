// Elements
const welcomeScreen = document.getElementById('welcome-screen');
const gameScreen = document.getElementById('game-screen');
//  const gameScreen = document.querySelector(`#game-screen`);
const startGameButton = document.getElementById('start-game-button');
const userName = document.getElementById('user-name');
const userSelection = document.getElementById('user-selection');
const goButton = document.getElementById('go-button');
const scoreParagraph = document.getElementById('score');
const gameHistoryParagraph = document.getElementById('game-history');

// instantiate the game object from the `RockPaperScissors` class.
let game;

// hide gamescreen
gameScreen.classList.add('d-none');

// updateScoreTallyUI
function updateScoreTallyUI(){
//<USERNAME>: <USER_SCORE> v CPU: <CPU_SCORE>

}

// updateGameHistoryUI
function updateGameHistoryUI(){

}

// start-game-button EventListener
startGameButton.addEventListener('click', function () {
  const username = 
  game = new RockPaperScissors(userName);
  // Complete
  // ^^ Does this get the username on click a?
});

hideWelcomeScreen.addEventListener('click', function ()) {
  const hidewelcomescreen = 
  hidescreen = new RockPaperScissors();
  //If you hit c, does this hide the welcome screen?
}

// go-button EventListener
startGameButton.addEventListener(`click`, function () {
  
});

