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
//let game = new RockPaperScissors(userName); //not working
let game;

// hide gamescreen
gameScreen.classList.add('d-none');

function updateScoreTallyUI() {
  const userScore = game.score.user;
  const cpuScore = game.score.cpu;
  const username = game.username;
  let scoretally = username + ":" + userscore + " v CPU: " + cpuscore;
  scoreParagraph.innerHTML = scoretally;
}

// updateGameHistoryUI
function updateGameHistoryUI(){
  gameHistoryParagraph.innerHTML = game.gameHistoryLog;
}

// start-game-button EventListener
startGameButton.addEventListener('click', function () {
  const username = userName.value;
  game = new RockPaperScissors(userName);
  gameScreen.classList.remove("d-none");
  //welcomeScreen.classList.add("d-none");
});

hideWelcomeScreen.addEventListener('click', function () {
  welcomeScreen.classList.remove("d-none");
})

// go-button EventListener
goButton.addEventListener(`click`, function () {
  const userselection = userSelection.value;
  game.play(userSelection);
  updateScoreTallyUI();
  updateGameHistoryUI();
  return false;
})

/* restartGame.addEventListener('click', function() {
  this.scoreParagraph = [];
  this.gameHistoryParagraph = [];
}) */