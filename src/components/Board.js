import React from 'react';
import Square from './Square';

const Board = ({ squares, onClick }) => {
  const onClickHandler = () => {};
  return (
    <>
      <div className='board'>
        <Square value='1' onClickHandler={() => onClickHandler("test")} />
        <Square value='1' onClickHandler={() => onClickHandler("test")} />
        <Square value='1' onClickHandler={() => onClickHandler("test")} />
        <Square value='1' onClickHandler={() => onClickHandler("test")} />
        <Square value='1' onClickHandler={() => onClickHandler("test")} />
        <Square value='1' onClickHandler={() => onClickHandler("test")} />
        <Square value='1' onClickHandler={() => onClickHandler("test")} />
        <Square value='1' onClickHandler={() => onClickHandler("test")} />
        <Square value='1' onClickHandler={() => onClickHandler("test")} />

      </div>
    </>
  );
};

export default Board;
