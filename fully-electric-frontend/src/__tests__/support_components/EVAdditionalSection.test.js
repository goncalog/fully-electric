import React from 'react';
import EVAdditionalSection from '../../components/support_components/EVAdditionalSection';
import EVAdditionalSectionName from '../../components/support_components/EVAdditionalSectionName';
import ExpandButton from '../../components/support_components/ExpandButton';
import EVAdditionalFeatures from '../../components/support_components/EVAdditionalFeatures';
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
            expandButtonText: 'Text to test expandButtonText property',
            evFeatures: [
                { 
                    name: 'Text to test name property #1',
                    value: 'Text to test value property #1',
                },
                { 
                    name: 'Text to test name property #2',
                    value: 'Text to test value property #2',
                },
            ],
        }
        shallowEVAdditionalSection = undefined;
    });

    test('has 3 children', () => {
        expect(evAdditionalSection().children().length).toEqual(3);
    });

    test('has one EVAdditionalSectionName component rendered with passed property', () => {
        const shallowWrapper = evAdditionalSection().find(EVAdditionalSectionName);
        expect(shallowWrapper.length).toEqual(1);
        expect(shallowWrapper.prop('name')).toBe(props.name);
    });

    test('has one ExpandButton component rendered with passed property', () => {
        const shallowWrapper = evAdditionalSection().find(ExpandButton);
        expect(shallowWrapper.length).toEqual(1);
        expect(shallowWrapper.prop('expandButtonText')).toBe(props.expandButtonText);
    });

    test('has one EVAdditionalFeatures components rendered with passed properties', () => {
        const shallowWrapper = evAdditionalSection().find(EVAdditionalFeatures);
        expect(shallowWrapper.length).toEqual(1);
        expect(shallowWrapper.prop('evFeatures')).toBe(props.evFeatures);
    });
});
