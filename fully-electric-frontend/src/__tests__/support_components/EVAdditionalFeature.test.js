import React from 'react';
import EVAdditionalFeature from '../../components/support_components/EVAdditionalFeature';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });

describe('EVAdditionalFeature', () => {
    let props;
    let shallowEVAdditionalFeature;
    const evAdditionalFeature = () => {
        if (!shallowEVAdditionalFeature) {
            shallowEVAdditionalFeature = shallow(<EVAdditionalFeature {...props} />);
        }
        return shallowEVAdditionalFeature;
    }

    // This reset the props and shallowEVAdditionalFeature variables before every test. 
    // Otherwise, state from one test would leak into another. 
    // By setting shallowEVAdditionalFeature to undefined here, when the next test runs, 
    // if it calls evAdditionalFeature, a new EVAdditionalFeature will be created with the current props
    beforeEach(() => {
        props = {
            name: 'Text to test name property',
            value: 'Text to test value property',
        }
        shallowEVAdditionalFeature = undefined;
    });

    test('has one child', () => {
        expect(evAdditionalFeature().children().length).toEqual(1);
    });

    test('has one p HTML element with some text passed as a property', () => {
        const shallowWrapper = evAdditionalFeature().find('p.additional-feature');
        expect(shallowWrapper.length).toEqual(1);
        expect(shallowWrapper.text()).toBe(`- ${props.name}: ${props.value}`);
    });
});
