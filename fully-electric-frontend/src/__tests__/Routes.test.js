import React from 'react';
import Navigation from '../components/Navigation';
import AppRouter from '../components/AppRouter';
import Home from '../components/Home';
import EVs from '../components/EVs';
import Contact from '../components/Contact';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { render } from '@testing-library/react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });

test('renders the Router component', () => {
    const wrapper = shallow(<AppRouter />);
    expect(wrapper.find(Router).length).toBe(1);
  });

it('renders two children', () => {
    const wrapper = shallow(<AppRouter />);
    expect(React.Children.count(wrapper.children())).toEqual(2);
});

test('renders the Navigation component', () => {
    const wrapper = shallow(<AppRouter />);
    expect(wrapper.find(Navigation).length).toBe(1);
});

test('renders the Switch component', () => {
    const wrapper = shallow(<AppRouter />);
    expect(wrapper.find(Switch).length).toBe(1);
});

test('renders three Route components', () => {
    const wrapper = shallow(<AppRouter />);
    expect(wrapper.find(Route).length).toBe(3);
});

test('renders all Route components with correct paths', () => {
    const wrapper = shallow(<AppRouter />);
    const pathMap = wrapper.find(Route).reduce((pathMap, route) => {
        const routeProps = route.props();
        pathMap[routeProps.path] = routeProps.component;
        return pathMap;
    }, {});
    expect(pathMap['/']).toBe(Home);
    expect(pathMap['/content/evs']).toBe(EVs);
    expect(pathMap['/contact']).toBe(Contact);
});
  