import React from 'react';
import Navigation from '../components/Navigation';
import { BrowserRouter as Router } from 'react-router-dom';
import { render } from '@testing-library/react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });

it('renders one child', () => {
    const wrapper = shallow(<Router><Navigation /></Router>);
    expect(React.Children.count(wrapper.children())).toEqual(1);
});

it('renders Title link correctly', () => {
    const { getByText } = render(<Router><Navigation /></Router>);
    const titleLink = getByText(/Fully Electric/);
    expect(titleLink).toBeInTheDocument();
    expect(titleLink.getAttribute('href')).toBe('/');
});

it('renders Home link correctly', () => {
    const { getByText } = render(<Router><Navigation /></Router>);
    const homeLink = getByText(/Home/);
    expect(homeLink).toBeInTheDocument();
    expect(homeLink.getAttribute('href')).toBe('/');
});

it('renders EVs link correctly', () => {
    const { getByText } = render(<Router><Navigation /></Router>);
    const evsLink = getByText(/EVs/);
    expect(evsLink).toBeInTheDocument();
    expect(evsLink.getAttribute('href')).toBe('/content/evs');
});

it('renders Contact link correctly', () => {
    const { getByText } = render(<Router><Navigation /></Router>);
    const contactLink = getByText(/Contact/);
    expect(contactLink).toBeInTheDocument();
    expect(contactLink.getAttribute('href')).toBe('/contact');
});
