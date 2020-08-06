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

it('renders Home link', () => {
    const { getByText } = render(<Router><Navigation /></Router>);
    const homeLink = getByText(/Home/);
    expect(homeLink).toBeInTheDocument();
});

it('renders EVs link', () => {
    const { getByText } = render(<Router><Navigation /></Router>);
    const evsLink = getByText(/EVs/);
    expect(evsLink).toBeInTheDocument();
});

it('renders Contact link', () => {
    const { getByText } = render(<Router><Navigation /></Router>);
    const contactLink = getByText(/Contact/);
    expect(contactLink).toBeInTheDocument();
});
