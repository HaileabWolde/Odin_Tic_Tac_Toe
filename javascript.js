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
       const playerOneMarker = document.querySelector('#player1').value;
    const playerTwoMarker = document.querySelector('#player2').value;
    let player1Name = document.getElementById('player1name');
    let player2Name = document.getElementById('player2name');
    // Check if same marker is chosen
    if (playerOneMarker === playerTwoMarker) {
        alert("Players must choose different markers!");
        return;
    }

    // Recreate players with fresh values
    playerOne.name = player1Name.value || 'Player 1';
    playerTwo.name = player2Name.value || 'Player 2';
    playerOne.marker = playerOneMarker;
    playerTwo.marker = playerTwoMarker;
    displayBoard(e, playerOne.marker, playerTwo.marker);
}
function displayBoard(e, playerOne, playerTwo){
    const input = e.target.id;
    for (let i = 0; i < markers.length; i++) {
        if (markers[i].id === input && markers[i].textContent.trim() === '') {
            console.log(GameBoard.gameBoard);
            // Check if the clicked marker is empty
            if (playerOneBoolean) {
                markers[i].textContent = playerOne;
                GameBoard.getgameBoard( Math.floor(i / 3), i % 3, playerOne);
            }
            else {
                markers[i].textContent = playerTwo;
                GameBoard.getgameBoard(Math.floor(i/3), i % 3, playerTwo);
            }
        }
    }
      GameBoard.checkWinner();
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
                if (winner === 'X' && playerOne.marker === 'X') {
                    player1score.textContent = parseInt(player1score.textContent) + 1;
                    setTimeout(() => {
                        alert(playerOne.name + ' wins!');
                        }, 100)
                    
                }
                else if (winner === 'X' && playerTwo.marker === 'X') {
                    player2score.textContent = parseInt(player2score.textContent) + 1;
                    setTimeout(() => {          
                        alert(playerTwo.name + ' wins!');   
                    }, 100)
                }
                 else if (winner === 'O' && playerOne.marker === 'O') {
                    player1score.textContent = parseInt(player1score.textContent) + 1;
                    setTimeout(() => {
                        alert(playerOne.name + ' wins!');
                    }, 100)
                }
                else if (winner === 'O' && playerTwo.marker === 'O') {
                    player2score.textContent = parseInt(player2score.textContent) + 1;

                    setTimeout(() => {
                        alert(playerTwo.name + ' wins!');
                    }, 100)
                }
                  setTimeout(() => {
                    resetGame.reset()}, 2000);
            }
            // Check columns 
            if (gameBoard[0][i] != '' && 
                gameBoard[0][i] === gameBoard[1][i] && 
                gameBoard[1][i] === gameBoard[2][i]) {
                // Update the score for the winner
                if (gameBoard[0][i] === 'X' && playerOne.marker === 'X') {
                    player1score.textContent = parseInt(player1score.textContent) + 1;
                     setTimeout(() => {
                        alert(playerOne.name + ' wins!');
                        }, 100)
                }
                else if (gameBoard[0][i] === 'X' && playerTwo.marker === 'X') {
                    player2score.textContent = parseInt(player2score.textContent) + 1;
                    setTimeout(() => {
                        alert(playerTwo.name + ' wins!');
                    }, 100)
                }
                else if (gameBoard[0][i] === 'O' && playerOne.marker === 'O') {
                    player1score.textContent = parseInt(player1score.textContent) + 1;
                    setTimeout(() => {
                        alert(playerOne.name + ' wins!');
                    }, 100)
                }
                 else if (gameBoard[0][i] === 'O' && playerTwo.marker === 'O') {
                    player2score.textContent = parseInt(player2score.textContent) + 1;
                       setTimeout(() => {
                        alert(playerTwo.name + ' wins!');
                    }, 100)
                }
                setTimeout(() => {
                    resetGame.reset()}, 2000);
            }
        }
         // Check diagonals
            if (gameBoard[0][0] != '' && 
                gameBoard[0][0] === gameBoard[1][1] && 
                gameBoard[1][1] === gameBoard[2][2]) {
                // Update the score for the winner
                if (gameBoard[0][0] === 'X' && playerOne.marker === 'X') {
                    player1score.textContent = parseInt(player1score.textContent) + 1;
                     setTimeout(() => {
                        alert(playerOne.name + ' wins!');
                    }, 100)
                }
                else if (gameBoard[0][0] === 'X' && playerTwo.marker === 'X') {
                    player2score.textContent = parseInt(player2score.textContent) + 1;
                    setTimeout(() => {
                        alert(playerTwo.name + ' wins!');
                    }, 100)
                }
                else if (gameBoard[0][0] === 'O' && playerOne.marker === 'O') {
                    player1score.textContent = parseInt(player1score.textContent) + 1;
                    setTimeout(() => {
                        alert(playerOne.name + ' wins!');
                    }, 100)
                }
                 else if (gameBoard[0][0] === 'O' && playerTwo.marker === 'O') {
                    player2score.textContent = parseInt(player2score.textContent) + 1;
                    setTimeout(() => {
                        alert(playerTwo.name + ' wins!');
                    }, 100)
                }
                setTimeout(() => {
                    resetGame.reset()}, 2000);
            }
            if (gameBoard[0][2] != '' && 
                gameBoard[0][2] === gameBoard[1][1] && 
                gameBoard[1][1] === gameBoard[2][0]) 
                {
                // Update the score for the winner 
                if (gameBoard[0][2] === 'X' && playerOne.marker === 'X') {
                    player1score.textContent = parseInt(player1score.textContent) + 1;
                    setTimeout(() => {
                        alert(playerOne.name + ' wins!');
                    }, 100)
                }
                else if (gameBoard[0][2] === 'X' && playerTwo.marker === 'X') {
                    player2score.textContent = parseInt(player2score.textContent) + 1;
                    setTimeout(() => {
                        alert(playerTwo.name + ' wins!');
                    }, 100)
                }
                else if (gameBoard[0][2] === 'O' && playerOne.marker === 'O') {
                    player1score.textContent = parseInt(player1score.textContent) + 1;
                    setTimeout(() => {
                        alert(playerOne.name + ' wins!');
                    }, 100)
                }

                 else if (gameBoard[0][2] === 'O' && playerTwo.marker === 'O') {
                    player2score.textContent = parseInt(player2score.textContent) + 1;
                    setTimeout(() => {
                        alert(playerTwo.name + ' wins!');
                    }, 100)
                }
                  setTimeout(() => {
                    resetGame.reset()}, 2000);
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
                    setTimeout(() => {
                        alert("It's a draw!");
                    }, 100);
                  setTimeout(() => {
                    resetGame.reset()}, 2000);
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