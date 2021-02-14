import React, { useState } from 'react';
import { calculateWinner } from '../calculateWinner';
import Board from './Board';

const Game = () => {
  // create board with initial state of 9 spaces, all null
  const [boardHistory, setBoardHistory] = useState([Array(9).fill(null)]);
  const [recordNumber, setRecordNumber] = useState(0);
  const [xToPlay, setXToPlay] = useState(true);
  const winStateAcheived = calculateWinner(boardHistory[recordNumber]);

  const handleClick = (i) => {
    const prevBoardState = boardHistory.slice(0, recordNumber + 1);
    const newBoardState = prevBoardState[recordNumber];
    const squaresState = [...newBoardState];

    // if click used or game is over
    if (winStateAcheived || squaresState[i]) return;
    // Place X or O on clicked square
    squaresState[i] = xToPlay ? 'X' : 'O';

    setBoardHistory([...prevBoardState, squaresState]);
    setRecordNumber(prevBoardState.length);
    setXToPlay(!xToPlay);
  };

  const jumpTo = (moveNumber) => {
    setRecordNumber(moveNumber);
    setXToPlay(moveNumber % 2 === 0);
  };

  const renderMoves = () => {
    return (
      <>
        {boardHistory.map((_step, move) => {
          console.log('In the map');
          const destination = move ? `Go to move#${move}` : 'Go to start';
          console.log(destination);
          return (
            <button className='startbtn' onClick={() => jumpTo(move)}>
              {destination}
            </button>
          );
        })}
      </>
    );
  };

  return (
    <>
      <Board
        squares={boardHistory[recordNumber]}
        onClickHandler={handleClick}
      />
      <div>
        <p>
          {winStateAcheived
            ? 'Winner Winner Chicken Dinner: ' + winStateAcheived
            : 'Next To Play: ' + (xToPlay ? 'X' : 'O')}
        </p>
        {renderMoves()}
      </div>
    </>
  );
};

export default Game;
