import "./App.css";
// import { StrictMode } from "react";
// import { createRoot } from "react-dom/client";
// import App from "./App";
import { useState } from "react";

function Square({ value, onSquareClick }) {
  // const [value, setValue] = useState(null);

  return (
    <button className="square" onClick={onSquareClick}>
      {value}
    </button>
  );
}

function Board() {
  const [squares, setSquares] = useState(Array(9).fill(null));
  function handleClick() {
    setSquares("X");
  }
  return (
    <>
      <div className="container">
        <Square value={squares[0]} onSquareClick={() => handleClick} />
        <Square value={squares[1]} onSquareClick={() => handleClick} />
        <Square value={squares[2]} onSquareClick={() => handleClick} />

        <Square value={squares[3]} onSquareClick={() => handleClick} />
        <Square value={squares[4]} onSquareClick={() => handleClick} />
        <Square value={squares[5]} onSquareClick={() => handleClick} />

        <Square value={squares[6]} onSquareClick={() => handleClick} />
        <Square value={squares[7]} onSquareClick={() => handleClick} />
        <Square value={squares[8]} onSquareClick={() => handleClick} />
      </div>
    </>
  );
}

export default Board;
