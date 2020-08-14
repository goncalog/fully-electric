import React from 'react';
import SecondaryHeadline from '../../components/support_components/SecondaryHeadline';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });

test('SecondaryHeadline component has one child', () => {
    const wrapper = shallow(<SecondaryHeadline />);
    expect(wrapper.children().length).toEqual(1);
});

test('SecondaryHeadline has h3 HTML element with some text', () => {
    const wrapper = shallow(<SecondaryHeadline />);
    const shallowWrapper = wrapper.find('h3.secondary-headline');
    expect(shallowWrapper.length).toEqual(1);
    expect(shallowWrapper.text()).toBe('Test drive it for FREE for one week before purchasing');
});
