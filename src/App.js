import Navbar from './components/navbar';
import Board from './components/board';
import { useState } from 'react';

function App() {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [isTurnX, setTurnX] = useState(true);
  const [winner, setWinner] = useState(null);
  const [gameOver, setGameOver] = useState(false);
  const winLines = [
    [0, 1, 2],[3, 4, 5],[6, 7, 8],
    [0, 3, 6],[1, 4, 7],[2, 5, 8],
    [0, 4, 8],[2, 4, 6]
  ]

  function checkWinner(newBoard) {
    for(let i = 0; i < winLines.length; i++) {
      const [a, b, c] = winLines[i];
      const playerToCheck = isTurnX===true?"X":"O";
      if(newBoard[a] === playerToCheck && newBoard[b] === playerToCheck && newBoard[c] === playerToCheck) {
        console.log("Ganador: " + playerToCheck);
        setWinner(playerToCheck);
        setGameOver(true);
      }
    }
    if (newBoard.every((box) => box !== null)) {
      setGameOver(true);
    }
  }

  function handleClick(i) {
    if (board[i] !== null || gameOver) return;
    else{
      const newBoard = board.map((box, index) => {
        if(index === i) {
          return isTurnX===true?"X":"O"
        } else {
          return box
        }
      })
      setBoard(newBoard);
      setTurnX(!isTurnX);
      checkWinner(newBoard);
    }
  }

  function resetGame() {
    setBoard(Array(9).fill(null));
    setTurnX(true);
    setWinner(null);
    setGameOver(false);
  }
  return (
    <div className='app'>
      <Navbar winner={winner} gameOver={gameOver} onClick={resetGame} />
      <div className='container'>
        <h1 className="gameState">Es el turno de: {isTurnX===true?"X":"O"} </h1>
        <Board board={board} onClick={handleClick}/>
      </div>
    </div>
  );
}

export default App;
