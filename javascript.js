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
                gameBoard[1][1] === gameBoard[2][0]) {
                console.log(`Winner is ${gameBoard[0][2]}`);
                return;
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
GameBoard.getgameBoard(1, 0, playerTwo.marker);
GameBoard.getgameBoard(2, 1, playerTwo.marker);
GameBoard.getgameBoard(1, 1, playerTwo.marker);
GameBoard.getgameBoard(1, 2, playerOne.marker);
GameBoard.getgameBoard(2, 0, playerTwo.marker);
GameBoard.getgameBoard(2, 2, playerTwo.marker);
GameBoard.checkWinner();
const result = GameBoard.checkWinner();
if (result){
    console.log(result);
}
console.log(GameBoard.gameBoard);

