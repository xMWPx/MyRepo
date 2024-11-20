import Square from "./square";
import { useState } from "react";

function GameBoard(props) {
  const [squares, setSquares] = useState(Array(9).fill(null)); // set state pt array de 9 elemente
  const [isXNext, setIsXNext] = useState(true);

  const handleClick = function (index) {
    // function calculate winner that returns x or 0
    if (squares[index]) {
      return; //fail first
    }

    let modifiedSquared = squares.slice();
    if (isXNext) {
      modifiedSquared[index] = "X";
    } else {
      modifiedSquared[index] = "O";
    }

    setSquares(modifiedSquared);
    setIsXNext(!isXNext); // il inversam din true in false, trece la urmatorul jucator
};

  return <>
  <div id="gameBoard">
    <Square value={squares[0]} onclick={() => handleClick(0)} />
    <Square value={squares[1]} onclick={() => handleClick(1)} />
    <Square value={squares[2]} onclick={() => handleClick(2)} />
    <Square value={squares[3]} onclick={() => handleClick(3)} />
    <Square value={squares[4]} onclick={() => handleClick(4)} />
    <Square value={squares[5]} onclick={() => handleClick(5)} />
    <Square value={squares[6]} onclick={() => handleClick(6)} />
    <Square value={squares[7]} onclick={() => handleClick(7)} />
    <Square value={squares[8]} onclick={() => handleClick(8)} />
    </div>
  </>;
}

export default GameBoard;
