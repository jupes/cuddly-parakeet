import React from 'react';
import { render, screen } from '@testing-library/react';
import { expect } from 'chai';
import { shallow, mount } from 'enzyme';
import sinon from 'sinon';
 
import App from '../src/components/App';
import Game from '../src/components/Game';
import Board from '../src/components/Board'
import Square from '../src/components/Square'
  
 
describe('render components in <App />', () => {
  it('renders App component without crash', () => {
    shallow(<App />);
  });
 
  it('renders header in App component', () => {
    const wrapper = shallow(<App />);
    const header = (<h1>Tic Tac Toe</h1>);
    expect(wrapper.contains(header)).toEqual(true);
  });

  it('renders Game component without crash', () => {
    shallow(<Game />);
  });
 
  it('renders children when passed in', () => {
    const wrapper = shallow((
      <App>
        <div className="unique" />
      </App>
    ));
    expect(wrapper.contains(<div className="unique" />)).toEqual(true);
  });
 
  // it('simulates click events', () => {
  //   const onButtonClick = sinon.spy();
  //   const wrapper = shallow(<Game onButtonClick={onButtonClick} />);
  //   wrapper.find('button').simulate('click');
  //   expect(onButtonClick).to.have.property('callCount', 1);
  // });
});

const squaresWithNoWin = [
  null, null, null,
  'X', 'X', 'O',
  null, null, null
];

const squaresWithWin = [
  null, null, null,
  'X', 'X', 'X',
  null, null, null
];


describe('pass props to components', () => {
  const boardWrapper = mount(<Board squares={squaresWithNoWin} onClickHandler={'() => {}'}/>);
  const squareWrapper = mount(<Square value={'X'} onClickHandler={'() => {}'}/>);

  it('accepts Board props', () => {
    expect(boardWrapper.props().squares).toEqual(squaresWithNoWin);
    expect(boardWrapper.props().onClickHandler).toEqual('() => {}');
  });

  it('accepts Square props', () => {
    expect(squareWrapper.props().value).toEqual('X');
    expect(squareWrapper.props().onClickHandler).toEqual('() => {}');
  });
 
 
  it('renders children when passed in', () => {
    const wrapper = shallow((
      <App>
        <div className="unique" />
      </App>
    ));
    expect(wrapper.contains(<div className="unique" />)).to.equal(true);
  });
 
  // it('simulates click events', () => {
  //   const onButtonClick = sinon.spy();
  //   const wrapper = shallow(<Game onButtonClick={onButtonClick} />);
  //   wrapper.find('button').simulate('click');
  //   expect(onButtonClick).to.have.property('callCount', 1);
  // });
});

