import React, { useState } from 'react';
import { calculateWinner } from '../calculateWinner';
import Board from './Board';

const Game = () => {
  // create board with initial state of 9 spaces, all null
  const [board, setBoard] = useState(Array(9).fill(null));
  const [xToPlay, setXToPlay] = useState(true);
  const winStateAcheived = calculateWinner(board);

  const handleClick = () => {
      
  };

  const jumpTo = () => {};

  const renderMoves = () => {};

  return (
    <>
      <div>
        <Board squares={board} onClickHandler={handleClick} />
      </div>
    </>
  );
};

export default Game;
