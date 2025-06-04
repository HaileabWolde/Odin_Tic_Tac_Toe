let gameBoard = document.querySelector('.gameBoard');
let markers = document.querySelectorAll('.marker');
let player1score = document.querySelector('.player1score');
let player2score = document.querySelector('.player2score');
let drawScore = document.querySelector('.drawscore');
let resetButton = document.querySelector('.resetButton');
let startButton = document.querySelector('.startButton');
// Odin Project - Tic Tac Toe
// This is a simple implementation of a Tic Tac Toe game using JavaScript.
let playerOneBoolean = true;

function handleClick(e) {
    displayBoard(e, playerOne.marker, playerTwo.marker);
}
function displayBoard(e, playerOne, playerTwo){
    const input = e.target.id;
    for (let i = 0; i < markers.length; i++) {
        if (markers[i].id === input && markers[i].textContent.trim() === '') {
            // Check if the clicked marker is empty
            if (playerOneBoolean) {
                markers[i].textContent = playerOne;
                GameBoard.getgameBoard( Math.floor(i / 3), i % 3, playerOne);
            }
            else {
                markers[i].textContent = playerTwo;
                GameBoard.getgameBoard(Math.floor(i/3), i % 3, playerTwo);
            }
             GameBoard.checkWinner();
           
        }
    }
    playerOneBoolean = !playerOneBoolean;

}
const GameBoard = (function() {
    const gameBoard = [
       ['', '', ''], 
       ['', '', ''],
       ['', '', '']];
    const getgameBoard = (indexOne, indexTwo, playerMarker) => {
        if(gameBoard[indexOne][indexTwo] === ''){
            gameBoard[indexOne][indexTwo] = playerMarker;
        }
        else {
            console.log('This position is already taken');
        }
    }
    const checkWinner = () =>{
        for (let i = 0; i < 3; i++){
            // Check rows
            if (gameBoard [i][0] != '' && 
                gameBoard[i][0] === gameBoard[i][1] && 
                gameBoard[i][1] === gameBoard[i][2]) {
                    const winner = gameBoard[i][0];
                // Update the score for the winner
                if (winner === 'X') {
                    player1score.textContent = parseInt(player1score.textContent) + 1;
                    
                } else if (winner === 'O') {
                    player2score.textContent = parseInt(player2score.textContent) + 1;
                }
                alert('' + winner + ' wins!');
                 resetGame.reset()
                return;
            }
            // Check columns 
            if (gameBoard[0][i] != '' && 
                gameBoard[0][i] === gameBoard[1][i] && 
                gameBoard[1][i] === gameBoard[2][i]) {
                // Update the score for the winner
                if (gameBoard[0][i] === 'X') {
                    player1score.textContent = parseInt(player1score.textContent) + 1;
                } else if (gameBoard[0][i] === 'O') {
                    player2score.textContent = parseInt(player2score.textContent) + 1;
                }
                resetGame.reset()
                return;
            }
        }
         // Check diagonals
            if (gameBoard[0][0] != '' && 
                gameBoard[0][0] === gameBoard[1][1] && 
                gameBoard[1][1] === gameBoard[2][2]) {
                // Update the score for the winner
                if (gameBoard[0][0] === 'X') {
                    player1score.textContent = parseInt(player1score.textContent) + 1;
                } else if (gameBoard[0][0] === 'O') {
                    player2score.textContent = parseInt(player2score.textContent) + 1;
                }
                resetGame.reset()
                return;
            }
            if (gameBoard[0][2] != '' && 
                gameBoard[0][2] === gameBoard[1][1] && 
                gameBoard[1][1] === gameBoard[2][0]) 
                {
                // Update the score for the winner 
                if (gameBoard[0][2] === 'X') {
                    player1score.textContent = parseInt(player1score.textContent) + 1;
                } else if (gameBoard[0][2] === 'O') {
                    player2score.textContent = parseInt(player2score.textContent) + 1;
                }
                  resetGame.reset()
                return;
            }
            else{
                // Check for a draw
                let isDraw = true;
                for (let i = 0; i < gameBoard.length; i++) {
                    for (let j = 0; j < gameBoard[i].length; j++) {
                        if (gameBoard[i][j] === '') {
                            isDraw = false;
                            break;
                        }
                    }
                }
                if (isDraw) {
                    drawScore.textContent = parseInt(drawScore.textContent) + 1;
                 resetGame.reset()
                return;
                }
            }
    }
    return {
        getgameBoard,
        checkWinner,
        gameBoard
    }
})();
const resetGame = (function() {
    const reset = () => {
        // Reset the game board
        for (let i = 0; i < markers.length; i++) {
            markers[i].textContent = '';
        }
        // Reset the gameBoard array
        GameBoard.gameBoard.forEach(row => row.fill(''));
        // Reset the player turn
        playerOneBoolean = true;
    }
    return {
        reset
    }
})();
function createPlayer(name, marker){
    return {
        name: name,
        marker: marker
    };
}
const playerOne = createPlayer('Player 1', 'X');
const playerTwo = createPlayer('Player 2', 'O');
// Add event listener to the game board to handle clicks
startButton.addEventListener('click', () =>{
    gameBoard.addEventListener('click', handleClick);
});
resetButton.addEventListener('click', resetGame.reset);
// Add event listener to the reset button to reset the game