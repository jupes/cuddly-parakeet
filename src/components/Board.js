import React from 'react';
import Square from './Square';

const Board = ({ squares, onClickHandler }) => {
  return (
    <>
      <div className='board'>
        {squares.map((square, i) => {
          return <Square key={i} value={square} onClickHandler={() => onClickHandler(i)} />;
        })}
      </div>
    </>
  );
};

export default Board;
