/*-------------------------------- Constants --------------------------------*/

// const winningPatterns = [
// 	[0, 3, 6]
// 	[1, 4, 7]
// 	[2, 5, 8]
// 	[0, 1, 2]
// 	[3, 4, 5]
// 	[6, 7, 8]
// 	[0, 4, 8]
// 	[2, 4, 6]
// ]

/*---------------------------- Variables (state) ----------------------------*/
let isWinner, boardSquares, playerTurn


/*------------------------ Cached Element References ------------------------*/
const message = document.querySelector('#message')
// const messageDiv = document.querySelector('#message-div')
// const gameBoard = document.querySelector('#board')

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


let htmlSquares = document.querySelectorAll('.board-square')

/*----------------------------- Event Listeners -----------------------------*/

squares.addEventListener('click', handleClick)



/*-------------------------------- Functions --------------------------------*/
init()

function init() {
  message.textContent = 'Player X, please choose a square'
  playerTurn = 1
  isWinner = null
	boardSquares = [null, null, null, null, null, null, null, null, null]
  render()
}
//isWinner variable: T (tie), 1 (player 1 wins), -1 (player 0 wins)


function render() {
	htmlSquares.forEach((cell, idx) => {
		let cellLetter
		if (cell === 1) {
			cellLetter = 'X'
		} else if (cell === -1) {
			cellLetter = 'O'
		} else if (cell === null) {
			cellLetter = ''
		} 
		htmlSquares[idx].innerHTML = cellLetter
	})

	if (!isWinner) {
		message.innerText = `It's ${playerTurn === 1 ? 'X' : '0'}'s turn!`
	} else if (isWinner === 'T') {
		message.innerText = `It's a tie!`
	} else {
		message.innerText = `Congratualtions ${isWinner === 1 ? 'X' : 'O'}!`
	}
}



function handleClick(click) {
	let squareId = parseInt(click.target.id.replace('sq', ''))
	if (boardSquares[squareId] || isWinner) {
		return
	}
	boardSquares = playerTurn
	playerTurn *= -1
	isWinner = winner()
	render()
}


function winner() {
	if (Math.abs(boardSquares[0] + boardSquares[3] + boardSquares[6]) === 3) return boardSquares[0]
	if (Math.abs(boardSquares[1] + boardSquares[4] + boardSquares[7]) === 3) return boardSquares[1]
	if (Math.abs(boardSquares[2] + boardSquares[5] + boardSquares[8]) === 3) return boardSquares[2]
	if (Math.abs(boardSquares[0] + boardSquares[1] + boardSquares[2]) === 3) return boardSquares[0]
	if (Math.abs(boardSquares[3] + boardSquares[4] + boardSquares[5]) === 3) return boardSquares[3]
	if (Math.abs(boardSquares[6] + boardSquares[7] + boardSquares[8]) === 3) return boardSquares[6]
	if (Math.abs(boardSquares[0] + boardSquares[4] + boardSquares[8]) === 3) return boardSquares[0]
	if (Math.abs(boardSquares[2] + boardSquares[4] + boardSquares[6]) === 3) return boardSquares[2]

	if (gameBoard.includes(null)) {
		return null
	} else {
		return 'T'
	}
}


