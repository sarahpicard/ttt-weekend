/*-------------------------------- Constants --------------------------------*/



/*---------------------------- Variables (state) ----------------------------*/
let isWinner, gameTied, stillPlay, playerTurn
let playerX = 1
let playerO = -1
let boardSquares = []

/*------------------------ Cached Element References ------------------------*/
const message = document.querySelector('#message')
const messageDiv = document.querySelector('#message-div')
const gameBoard = document.querySelector('#board')
const squares = document.querySelector('.board-square')
const squareZero = document.querySelector('#sq0')
const squareOne = document.querySelector('#sq1')
const squareTwo = document.querySelector('#sq2')
const squareThree = document.querySelector('#sq3')
const squareFour = document.querySelector('#sq4')
const squareFive = document.querySelector('#sq5')
const squareSix = document.querySelector('#sq6')
const squareSeven = document.querySelector('#sq7')
const squareEight = document.querySelector('#sq8')




/*----------------------------- Event Listeners -----------------------------*/


// 3) Upon loading, the app should:

//// 3.1) Call an initialize function

// 3.2) That initialize function should initialize the state variables:
// // 3.2.1) Initialize the board array to 9 nulls to represent empty squares. 
//// The 9 elements will "map" to each square.
//// Index 0 represents the top-left square.
//// Index 1 represents the top-middle square.
//// So on, continuing through the entire board until...
//// Index 8 maps to the bottom-right square.
//// 3.2.2) Initialize whose turn it is to 1 (player 'X'). 
// Player 'O' will be represented by -1.
//// 3.2.3) Initialize the winner variable to null.
//// This represents that there is no winner or tie yet. 
//// The winner variable will hold the player value (1 or -1) if there's a winner. 
//// The winner will hold a 'T' if there's a tie.
// 3.2.4) Render those state variables to the page by calling a render function.


/*-------------------------------- Functions --------------------------------*/
init()



function init() {
  message.textContent = 'Player X, please choose a square'
  squares.textContent = ''
  playerTurn = 1
  isWinner = null
  // playerO = -1
  // playerX = 1
}

//player 1 and Player 0(rep w/ -1)
//isWinner variable: T (tie), 1 (player 1 wins), -1 (player 0 wins)