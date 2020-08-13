import React from 'react';
import Routes from '../components/Routes';
import Home from '../components/Home';
import EVs from '../components/EVs';
import Contact from '../components/Contact';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { render } from '@testing-library/react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });

it('renders one child', () => {
    const wrapper = shallow(<Routes />);
    expect(React.Children.count(wrapper.children())).toEqual(3);
});

test('renders three Route components', () => {
    const wrapper = shallow(<Routes />);
    expect(wrapper.find(Route).length).toBe(3);
});

test('renders all Route component with correct paths', () => {
    const wrapper = shallow(<Routes />);
    const pathMap = wrapper.find(Route).reduce((pathMap, route) => {
        const routeProps = route.props();
        pathMap[routeProps.path] = routeProps.component;
        return pathMap;
    }, {});
    expect(pathMap['/']).toBe(Home);
    expect(pathMap['/content/evs']).toBe(EVs);
    expect(pathMap['/contact']).toBe(Contact);
});
  