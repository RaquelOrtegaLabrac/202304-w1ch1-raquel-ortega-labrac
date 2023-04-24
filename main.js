const allCells = document.querySelectorAll(".table-cell:not(.button-table)");
const topCells = document.querySelectorAll(".button-table");
const allTokens = document.querySelectorAll(".row-0.col-1");
const allTokenButtons = document.querySelector(".button-container");
let startGameButton = document.querySelector(".start-button");
let restartButton = document.querySelector(".restart-button");
let exitButton = document.querySelector(".exit-button");
let feedbackText = document.querySelector(".feedback-text");
let defaultFeedbackText = 'Welcome to Conecta4!';
const playerTurnContainer = document.querySelector(".player-turn-container");
const playerTurnBackground = document.querySelector(".player-turn");
const playerTurnText = document.querySelector(".player-turn-text");
const turnPlayerOne = document.querySelector(".player-one");
let currentPlayerTurn = '';
let currentTurnPlayerOne = 'Player One';
let currentTurnPlayerTwo = 'Player Two';
const firstButton = document.querySelector(".first-button");
const sixthButton = document.querySelector(".sixth-button");
const seventhButton = document.querySelector(".seventh-button");

const column0 = [allCells[35], allCells[28], allCells[21], allCells[14], allCells[7], allCells[0]];
const column1 = [allCells[36], allCells[29], allCells[22], allCells[15], allCells[8], allCells[1]];
const column2 = [allCells[37], allCells[30], allCells[23], allCells[16], allCells[9], allCells[2]];
const column3 = [allCells[38], allCells[31], allCells[24], allCells[17], allCells[10], allCells[3]];
const column4 = [allCells[39], allCells[32], allCells[25], allCells[18], allCells[11], allCells[4]];
const column5 = [allCells[40], allCells[33], allCells[26], allCells[19], allCells[12], allCells[5]];
const column6 = [allCells[41], allCells[34], allCells[27], allCells[20], allCells[13], allCells[6]];
const columns = [column0, column1, column2, column3, column4, column5, column6];

const topRow = [topCells[0], topCells[1], topCells[2], topCells[3], topCells[4], topCells[5], topCells[6]];
const row0 = [allCells[0], allCells[1], allCells[2], allCells[3], allCells[4], allCells[5], allCells[6]];
const row1 = [allCells[7], allCells[8], allCells[9], allCells[10], allCells[11], allCells[12], allCells[13]];
const row2 = [allCells[14], allCells[15], allCells[16], allCells[17], allCells[18], allCells[19], allCells[20]];
const row3 = [allCells[21], allCells[22], allCells[23], allCells[24], allCells[25], allCells[26], allCells[27]];
const row4 = [allCells[28], allCells[29], allCells[30], allCells[31], allCells[32], allCells[33], allCells[34]];
const row5 = [allCells[35], allCells[36], allCells[37], allCells[38], allCells[39], allCells[40], allCells[41]];
const rows = [row0, row1, row2, row3, row4, row5, topRow];


const changePlayerTurn = (currentPlayerTurn) => {
  currentPlayerTurn = currentTurnPlayerOne;

  if (currentPlayerTurn === currentTurnPlayerOne) {
    playerTurnText.innerHTML === 'Player 1';
    playerTurnBackground.style.backgroundColor = 'rgb(82, 134, 217)';
  };

  if (currentPlayerTurn === currentTurnPlayerTwo) {
    playerTurnText.textContent === 'Player 2';
    playerTurnBackground.style.backgroundColor = 'rgb(204, 62, 49';
  };
};

startGameButton.addEventListener("click", () => {
  startGameButton.classList.add("show-off");
  restartButton.classList.remove("show-off");
  allTokenButtons.classList.remove("show-off");
  exitButton.classList.remove("show-off");
  feedbackText.innerHTML = 'Click on the greens buttons to enter one token. Make 4 vertically, horizontally or diagonally to win!';
  playerTurnText.classList.remove("show-off");
  turn = 1;
  playerTurnContainer.classList.remove("show-off");
  playerTurnText.innerHTML = 'Player 1';
  startGame();
});

restartButton.addEventListener("click", () => {
  allTokens.forEach((token) => {
      token.style.backgroundColor = "";
      playerTurnText.innerHTML = 'Player 1'
      changePlayerTurn(currentPlayerTurn);
      playerTurnBackground.style.backgroundColor = 'rgb(204, 62, 49)';
  })}
);

exitButton.addEventListener("click", () => {
  restartButton.classList.add("show-off");
  exitButton.classList.add("show-off");
  startGameButton.innerHTML = "PLAY AGAIN";
  startGameButton.classList.remove("show-off");
  allTokenButtons.classList.add("show-off");
  allTokens.forEach((token) => {
    token.style.backgroundColor = "";
  });
  feedbackText.innerHTML = 'Bye bye! Hope to see you soon!';
  playerTurnContainer.classList.add("show-off")
});

firstButton.addEventListener("click", () => {
  allTokens.forEach((token) => {
  token.style.backgroundColor = "rga(204, 62, 49)";
  });
});

const clickSixthButton = (event) => {  
  console.log(event)
  allTokens.forEach((token) => {
    currentPlayerTurn = 'Player 2';
    token.style.backgroundColor = "rgb(204, 62, 49";
    playerTurnText.innerHTML = 'Player 2'
    changePlayerTurn(currentPlayerTurn);
    }); 
  };
sixthButton.addEventListener("click", clickSixthButton);

 const startGame = () => {

 };
 startGame();
