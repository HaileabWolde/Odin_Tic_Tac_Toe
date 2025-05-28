const GameBoard = (function() {
    const gameBoard = [
        '', '', '', 
        '', '', '', 
        '', '', ''];
    let playerOne = '';
    let playerTwo = '';
    const changePlayerOneMarker = (marker) =>{
        playerOne = marker;
    }
    const changePlayerTwoMarker = (marker) =>{
        playerTwo = marker;
    }
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
            for (let j = 0; j < 3; j++){
                if (gameBoard[i][j] === playerOne.marker && gameBoard[i][j+1] === playerOne.marker && gameBoard[i][j+2] === playerOne.marker) {
                    return playerOne.name + ' wins!';
                }
                else if (gameBoard[i][j] === playerTwo.marker && gameBoard[i][j+1] === playerTwo.marker && gameBoard[i][j+2] === playerTwo.marker) {
                    return playerTwo.name + ' wins!';
                }
                else if (gameBoard[j][i] === playerOne.marker && gameBoard[j+1][i] === playerOne.marker && gameBoard[j+2][i] === playerOne.marker) {
                    return playerOne.name + ' wins!';
                }
                else if (gameBoard[j][i] === playerTwo.marker && gameBoard[j+1][i] === playerTwo.marker && gameBoard[j+2][i] === playerTwo.marker) {
                    return playerTwo.name + ' wins!';
                }
                else if( gameBoard[0][0] === playerOne.marker && gameBoard[1][1] === playerOne.marker && gameBoard[2][2] === playerOne.marker) {
                    return playerOne.name + ' wins!';
                }
                else if( gameBoard[0][0] === playerTwo.marker && gameBoard[1][1] === playerTwo.marker && gameBoard[2][2] === playerTwo.marker) {
                    return playerTwo.name + ' wins!';
                }
                else if( gameBoard[0][2] === playerOne.marker && gameBoard[1][1] === playerOne.marker && gameBoard[2][0] === playerOne.marker) {
                    return playerOne.name + ' wins!';
                }
                else ( gameBoard[0][2] === playerTwo.marker && gameBoard[1][1] === playerTwo.marker && gameBoard[2][0] === playerTwo.marker) {
                    return playerTwo.name + ' wins!';
                }
            }
        }
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

