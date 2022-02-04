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
squares.addEventListener('click', render)


/*-------------------------------- Functions --------------------------------*/
init()


function init() {
  message.textContent = 'Player X, please choose a square'
  squares.textContent = ''
  playerTurn = 1
  isWinner = null
  // playerO = -1
  // playerX = 1
  render()
}
//player 1 and Player 0(rep w/ -1)
//isWinner variable: T (tie), 1 (player 1 wins), -1 (player 0 wins)

function render() {
  for (let i = 0; i < boardSquares.length; i++) {

  }
}

// 3.3) The render function should:
	  // 3.3.1) Loop over the board array (which represents the squares on the page), and for each iteration:
		  // 3.3.1.1) Use the index of the iteration to access the square in the squares array that corresponds with the current cell being iterated over in the board array
		  // 3.3.1.2) Style that square however you wish dependant on the value contained in the current cell being iterated over (-1, 1, or null)
	  // 3.3.2) Render a message reflecting the currrent game state:
	    // 3.3.2.1) If winner has a value other than null (game still in progress), render whose turn it is.
	      // Hint: Maybe use a ternary inside of a template literal here?
	    // 3.3.2.2) If winner is equal to 'T' (tie), render a tie message.
	    // 3.3.2.3) Otherwise, render a congratulatory message to which player has won.
	      // Hint (again): Maybe use a ternary inside a template literal here

		// 3.4) After completing this step, you should be able to manually change the values held in the board array in the initialization function and see the style of the corresponding square change on your page.