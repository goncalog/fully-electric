import React from 'react';
import MainHeadline from '../../components/support_components/MainHeadline';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });

test('MainHeadline component has one child', () => {
    const wrapper = shallow(<MainHeadline />);
    expect(wrapper.children().length).toEqual(1);
});

test('MainHeadline component has h1 HTML element with some text', () => {
    const wrapper = shallow(<MainHeadline />);
    const shallowWrapper = wrapper.find('h1.main-headline');
    expect(shallowWrapper.length).toEqual(1);
    expect(shallowWrapper.text()).toBe('Find your dream EV');
});
