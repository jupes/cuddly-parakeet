import React, {useState} from 'react';

const Square = ({onClickHandler, value}) => {
  const [buttonName, setButtonName] = useState('');

  return (
    <>
      <div>Square</div>
      <button className='btn' onClick={onClickHandler}>
        {value}
      </button>
    </>
  );
};
export default Square;
