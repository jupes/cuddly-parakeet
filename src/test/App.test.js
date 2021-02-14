import React from 'react';
import { shallow, mount } from 'enzyme';
import sinon from 'sinon';

import App from '../components/App';
import Game from '../components/Game';
import Board from '../components/Board';
import Square from '../components/Square';
import { calculateWinner } from '../calculateWinner';

// Test states
const squaresWithNoWin = [null, null, null, 'X', 'X', 'O', null, null, null];
const squaresWithWinForX = [null, null, null, 'X', 'X', 'X', null, null, null];
const squaresWithWinForO = [null, null, null, 'O', 'O', 'O', null, null, null];

describe('render components in <App />', () => {
  it('renders App component without crash', () => {
    shallow(<App />);
  });

  it('renders header in App component', () => {
    const wrapper = shallow(<App />);
    const header = <h1>Tic Tac Toe</h1>;
    expect(wrapper.contains(header)).toEqual(true);
  });

  it('renders Game component without crash', () => {
    shallow(<Game />);
  });

  it('renders Game when passed in', () => {
    const wrapper = shallow(
      <App>
        <Game />
      </App>
    );
    expect(wrapper.contains(<Game />)).toEqual(true);
  });
});

describe('pass props to components', () => {
  const boardWrapper = mount(
    <Board squares={squaresWithNoWin} onClickHandler={() => {}} />
  );
  const squareWrapper = mount(<Square value={'X'} onClickHandler={() => {}} />);

  it('accepts Board props', () => {
    expect(boardWrapper.props().squares).toEqual(squaresWithNoWin);
  });

  it('accepts Square props', () => {
    expect(squareWrapper.props().value).toEqual('X');
  });
});

describe('validate calculate win function', () => {
  it('verifies NO WIN state from the calculate winner function', () => {
    const winResult = calculateWinner(squaresWithNoWin);
    expect(winResult).toEqual(null);
  });

  it('verifies WIN FOR X state from the calculate winner function', () => {
    const winResult = calculateWinner(squaresWithWinForX);
    expect(winResult).toEqual('X');
  });

  it('verifies WIN FOR O state from the calculate winner function', () => {
    const winResult = calculateWinner(squaresWithWinForO);
    expect(winResult).toEqual('O');
  });
});
