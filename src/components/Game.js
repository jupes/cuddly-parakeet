import React, {useState} from 'react';
import Board from './Board'

const Game = () => {
    // create board with initial state of 9 spaces, all null
    const [board, setBoard] = useState(Array(9).fill(null))

    const handleClick = () => {

    }

    const jumpTo = () => {

    }

    const renderMoves = () => {

    }

    return (
        <>
          <div>
            <Board onClickHandler={() => handleClick()} />
          </div>
        </>
      );
}

export default Game;
