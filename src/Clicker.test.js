import React from 'react';
import { render } from '@testing-library/react';
import Clicker from "./Clicker";
import { shallow } from 'enzyme';
import { act } from 'react-dom/test-utils';

test('renders click count', () => {
  const { getByText } = render(<Clicker />);
  const linkElement = getByText(/0/i);
  expect(linkElement).toBeInTheDocument();
});

test('3 clicks', () => {

  const wrapper = shallow(<Clicker/>);
  act(()=> {
    for (let i = 0; i < 3; i++) {
      wrapper.find("Button").at(0).props().onClick();
    }
  })

  expect(wrapper.contains("3"));
});

test('resets after clicks', () => {

  const wrapper = shallow(<Clicker/>);
  act(()=> {
    for (let i = 0; i < 3; i++) {
      wrapper.find("Button").at(0).props().onClick();
    }

    wrapper.find("Button").at(1).props().onClick();
    wrapper.find("Button").at(0).props().onClick();
  })

  expect(wrapper.contains("1"));
});
