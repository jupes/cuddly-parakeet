import React, { useState } from 'react';

const Square = ({ onClickHandler, value }) => {
  const [buttonName, setButtonName] = useState('');

  return (
    <>
      <button className='btn' onClick={onClickHandler}>
        {value}
      </button>
    </>
  );
};
export default Square;
