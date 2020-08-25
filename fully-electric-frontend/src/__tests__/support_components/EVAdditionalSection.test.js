import React from 'react';
import EVAdditionalSection from '../../components/support_components/EVAdditionalSection';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });

describe('EVAdditionalSection', () => {
    let props;
    let shallowEVAdditionalSection;
    const evAdditionalSection = () => {
        if (!shallowEVAdditionalSection) {
            shallowEVAdditionalSection = shallow(<EVAdditionalSection {...props} />);
        }
        return shallowEVAdditionalSection;
    }

    // This reset the props and shallowEVAdditionalSection variables before every test. 
    // Otherwise, state from one test would leak into another. 
    // By setting shallowEVAdditionalSection to undefined here, when the next test runs, 
    // if it calls evAdditionalSection, a new EVAdditionalSection will be created with the current props
    beforeEach(() => {
        props = {
            name: 'Text to test name property',
        }
        shallowEVAdditionalSection = undefined;
    });

    test('has one child', () => {
        expect(evAdditionalSection().children().length).toEqual(1);
    });

    test('has one h5 HTML element with some text passed as a property', () => {
        const shallowWrapper = evAdditionalSection().find('h5.additional-section');
        expect(shallowWrapper.length).toEqual(1);
        expect(shallowWrapper.text()).toBe(props.name);
    });
});
