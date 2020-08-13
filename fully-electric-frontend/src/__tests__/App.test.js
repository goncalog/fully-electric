import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { render } from '@testing-library/react';
import App from '../components/App';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import Routes from '../components/Routes';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });

test('renders the Router component', () => {
  const wrapper = shallow(<App />);
  expect(wrapper.find(Router).length).toBe(1);
});

test('renders the Navigation component', () => {
  const wrapper = shallow(<App />);
  expect(wrapper.find(Navigation).length).toBe(1);
});

test('renders the Footer component', () => {
  const wrapper = shallow(<App />);
  expect(wrapper.find(Footer).length).toBe(1);
});

test('renders Routes component', () => {
  const wrapper = shallow(<App />);
  expect(wrapper.find(Routes).length).toBe(1);
});

test('renders the Switch component', () => {
  const wrapper = shallow(<App />);
  expect(wrapper.find(Switch).length).toBe(1);
});
