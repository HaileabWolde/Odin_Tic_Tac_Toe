let gameBoard = document.querySelector('.gameBoard');
let markers = document.querySelectorAll('.marker');
let player1score = document.querySelector('.player1score');
let player2score = document.querySelector('.player2score');
let drawScore = document.querySelector('.drawscore');
let resetButton = document.querySelector('.resetButton');
let startButton = document.querySelector('.startButton');
let playerOneName = document.querySelector('.playerOneName');
let playerTwoName = document.querySelector('.playerTwoName');
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
    // Update the display with the new player names and markers
    playerOneName.textContent = playerOne.name.toUpperCase();
    playerTwoName.textContent = playerTwo.name.toUpperCase();
    displayBoard(e, playerOne.marker, playerTwo.marker);
}
function displayBoard(e, playerOne, playerTwo){
    const input = e.target.id;
    for (let i = 0; i < markers.length; i++) {
        if (markers[i].id === input && markers[i].textContent.trim() === '') {
            // If the clicked marker is empty, set the text content to the current player's marker
            // and update the game board
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
  const checkWinner = () => {
    for (let i = 0; i < 3; i++) {
        // Check rows
        if (gameBoard[i][0] !== '' && gameBoard[i][0] === gameBoard[i][1] && gameBoard[i][1] === gameBoard[i][2]) {
            announceWinner(gameBoard[i][0]);
            return;
        }

        // Check columns
        if (gameBoard[0][i] !== '' && gameBoard[0][i] === gameBoard[1][i] && gameBoard[1][i] === gameBoard[2][i]) {
            announceWinner(gameBoard[0][i]);
            return;
        }
    }

    // Check diagonal top-left to bottom-right
    if (gameBoard[0][0] !== '' && gameBoard[0][0] === gameBoard[1][1] && gameBoard[1][1] === gameBoard[2][2]) {
        announceWinner(gameBoard[0][0]);
        return;
    }

    // Check diagonal top-right to bottom-left
    if (gameBoard[0][2] !== '' && gameBoard[0][2] === gameBoard[1][1] && gameBoard[1][1] === gameBoard[2][0]) {
        announceWinner(gameBoard[0][2]);
        return;
    }

    // Check for draw
    let isDraw = true;
    for (let row of gameBoard) {
        if (row.includes('')) {
            isDraw = false;
            break;
        }
    }
    if (isDraw) {
        drawScore.textContent = parseInt(drawScore.textContent) + 1;
        setTimeout(() => {
            alert('It\'s a draw!');
            resetGame.reset();
        }, 100);
    }
};
function announceWinner(marker) {
    const winnerName = (playerOne.marker === marker) ? playerOne.name : playerTwo.name;

    if (marker === playerOne.marker) {
        player1score.textContent = parseInt(player1score.textContent) + 1;
    } else {
        player2score.textContent = parseInt(player2score.textContent) + 1;
    }

    setTimeout(() => {
        alert(`${winnerName} wins!`);
        resetGame.reset();
    }, 100);
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
//creating Player Object For the Player Properties
const playerOne = createPlayer('Player 1', 'X');
const playerTwo = createPlayer('Player 2', 'O');
// Add event listener to the game board to handle clicks
startButton.addEventListener('click', () =>{
    gameBoard.addEventListener('click', handleClick);
});
resetButton.addEventListener('click', resetGame.reset);
// Add event listener to the reset button to reset the game