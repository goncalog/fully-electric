import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { render } from '@testing-library/react';
import Navigation from '../components/Navigation';

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
