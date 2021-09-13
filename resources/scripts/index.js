// Elements
const welcomeScreen = document.getElementById('welcome-screen');
const gameScreen = document.getElementById('game-screen');
//  const gameScreen = document.querySelector(`#game-screen`);
const startGameButton = document.getElementById('start-game-button');
const userName = document.getElementById('username');
const userSelection = document.getElementById('user-selection');
const goButton = document.getElementById('go-button');
const scoreParagraph = document.getElementById('score');
const gameHistoryParagraph = document.getElementById('game-history');
const resetGameButton = document.getElementById('reset-button');

// instantiate the game object from the `RockPaperScissors` class.
//let game = new RockPaperScissors(userName); //not working
let game;

// hide gamescreen
gameScreen.classList.add('d-none');

function updateScoreTallyUI() {
  const userscore = game.score.user;
  const cpuscore = game.score.cpu;
  const username = game.username;
  let scoretally = username + ": " + userscore + " v CPU: " + cpuscore;
  scoreParagraph.innerHTML = scoretally;
}

// updateGameHistoryUI
function updateGameHistoryUI(){
  gameHistoryParagraph.innerHTML = game.gameHistoryLog;
}

// start-game-button EventListener
startGameButton.addEventListener('click', function () {
  const username = userName.value;
  game = new RockPaperScissors(username);
  gameScreen.classList.remove("d-none");
  welcomeScreen.classList.add("d-none");
  return false;
})

/*hideWelcomeScreen.addEventListener('click', function () {
  welcomeScreen.classList.remove("d-none");
}) */

// go-button EventListener
goButton.addEventListener(`click`, function () {
  const userselection = userSelection.value;
  game.play(userselection);
  updateScoreTallyUI();
  updateGameHistoryUI();
  return false;
})

resetGameButton.addEventListener('click', function() {
  location.reload();
})