import React from 'react';
import { render, screen } from '@testing-library/react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import sinon from 'sinon';
 
import App from '../src/components/App';
import Game from '../src/components/Game';


test('renders learn react link', () => {
    render(<App />);
    const linkElement = screen.getByText(/learn react/i);
    expect(linkElement).toBeInTheDocument();
});
  
 
describe('<App />', () => {
  it('renders one <Game /> components', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(Game)).to.have.lengthOf(3);
  });
 
  it('renders an `.icon-star`', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('.icon-star')).to.have.lengthOf(1);
  });
 
  it('renders children when passed in', () => {
    const wrapper = shallow((
      <App>
        <div className="unique" />
      </App>
    ));
    expect(wrapper.contains(<div className="unique" />)).to.equal(true);
  });
 
  it('simulates click events', () => {
    const onButtonClick = sinon.spy();
    const wrapper = shallow(<Game onButtonClick={onButtonClick} />);
    wrapper.find('button').simulate('click');
    expect(onButtonClick).to.have.property('callCount', 1);
  });
});