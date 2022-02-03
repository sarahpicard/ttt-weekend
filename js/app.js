/*-------------------------------- Constants --------------------------------*/



/*---------------------------- Variables (state) ----------------------------*/
let isWinner, gameTied, stillPlay, playerTurn
let boardSquares = []

/*------------------------ Cached Element References ------------------------*/
const message = document.querySelector('#message')
const messageDiv = document.querySelector('#message-div')
const gameBoard = document.querySelector('#board')
const squares = document.querySelector('#board-square')


/*----------------------------- Event Listeners -----------------------------*/


// 3) Upon loading, the app should:

	//// 3.1) Call an initialize function

	// 3.2) That initialize function should initialize the state variables:
	 // // 3.2.1) Initialize the board array to 9 nulls to represent empty squares. 
	    // The 9 elements will "map" to each square.
	    // Index 0 represents the top-left square.
	    // Index 1 represents the top-middle square.
			// So on, continuing through the entire board until...
	    // Index 8 maps to the bottom-right square.
	  // 3.2.2) Initialize whose turn it is to 1 (player 'X'). 
	    // Player 'O' will be represented by -1.
	  // 3.2.3) Initialize the winner variable to null.
	    // This represents that there is no winner or tie yet. 
	    // The winner variable will hold the player value (1 or -1) if there's a winner. 
	    // The winner will hold a 'T' if there's a tie.
	  // 3.2.4) Render those state variables to the page by calling a render function.


/*-------------------------------- Functions --------------------------------*/
init ()

function init() {
  squares.textContent = ''
}
