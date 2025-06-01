let gameBoard = document.querySelector('.gameBoard');
let markers = document.querySelectorAll('.marker');

// This is a simple implementation of a Tic Tac Toe game using JavaScript.
let playerOneBoolean = true;
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
            const result = GameBoard.checkWinner();
            if (result){
               console.log(result);
            }
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
                console.log(`Winner is ${gameBoard[i][0]}`);
                return;
            }
            // Check columns 
            if (gameBoard[0][i] != '' && 
                gameBoard[0][i] === gameBoard[1][i] && 
                gameBoard[1][i] === gameBoard[2][i]) {
                console.log(`Winner is ${gameBoard[0][i]}`);
                return;
            }
        }
         // Check diagonals
            if (gameBoard[0][0] != '' && 
                gameBoard[0][0] === gameBoard[1][1] && 
                gameBoard[1][1] === gameBoard[2][2]) {
                console.log(`Winner is ${gameBoard[0][0]}`);
                return;
            }
            if (gameBoard[0][2] != '' && 
                gameBoard[0][2] === gameBoard[1][1] && 
                gameBoard[1][1] === gameBoard[2][0]) 
                {
                console.log(`Winner is ${gameBoard[0][2]}`);
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
                    console.log('It\'s a draw!');
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
function createPlayer(name, marker){
    return {
        name: name,
        marker: marker
    };
}
const playerOne = createPlayer('Player 1', 'X');
const playerTwo = createPlayer('Player 2', 'O');
// Add event listener to the game board to handle clicks
gameBoard.addEventListener('click', (e) => {
    displayBoard(e, playerOne.marker, playerTwo.marker);
});

