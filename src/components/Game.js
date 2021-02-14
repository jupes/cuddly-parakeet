import React, { useState } from 'react';
import { calculateWinner } from '../calculateWinner';
import Board from './Board';

const Game = () => {
  // create board with initial state of 9 spaces, all null
  const [board, setBoard] = useState(Array(9).fill(null));
  const [xToPlay, setXToPlay] = useState(true);
  const winStateAcheived = calculateWinner(board);

  const handleClick = (i) => {
    const prevBoardState = [...board];
    const newBoardState = [...board];

    // if click used or game is over
    if (winStateAcheived || prevBoardState[i]) return;
    // Place X or O on clicked square
    newBoardState[i] = xToPlay ? 'X' : 'O';
    setBoard(newBoardState);
    setXToPlay(!xToPlay);
  };

  const jumpTo = () => {};

  const renderMoves = () => {};

  return (
    <>
      <Board squares={board} onClickHandler={handleClick} />
      <div>
        <p>
          {winStateAcheived
            ? 'Winner Winner Chicken Dinner: ' + winStateAcheived
            : 'Next To Play: ' + (xToPlay ? 'X' : 'O')}
        </p>
      </div>
    </>
  );
};

export default Game;
