const GameBoard = (function() {
    const gameBoard = [
        '', '', '', 
        '', '', '', 
        '', '', ''];
    let playerOne = '';
    let playerTwo = '';

})();
function createPlayer(name, marker){
    return {
        name: name,
        marker: marker
    };
}
const playerOne = createPlayer('Player 1', 'X');
const playerTwo = createPlayer('Player 2', 'O');

