import React from 'react';
import EVDetail from '../../components/support_components/EVDetail';
import EVImageSlider from '../../components/support_components/EVImageSlider';
import EVKeyFeatures from '../../components/support_components/EVKeyFeatures';
import EVAdditionalSectionsContainer from '../../components/support_components/EVAdditionalSectionsContainer';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });

describe('EVDetail', () => {
    let props;
    let shallowEVDetail;
    const evDetail = () => {
        if (!shallowEVDetail) {
            shallowEVDetail = shallow(<EVDetail {...props} />);
        }
        return shallowEVDetail;
    }

    // This reset the props and shallowEVDetail variables before every test. 
    // Otherwise, state from one test would leak into another. 
    // By setting shallowEVDetail to undefined here, when the next test runs, 
    // if it calls evDetail, a new EVDetail will be created with the current props
    beforeEach(() => {
        props = {
            imagePath: '/path/to/ev/image',
            evFeatures: [
                { 
                    name: 'Text to test name property #1',
                    value: 'Text to test value property #1',
                },
                { 
                    name: 'Text to test name property #2',
                    value: 'Text to test value property #2',
                },
                { 
                    name: 'Text to test name property #3',
                    value: 'Text to test value property #3',
                },
            ],
            sections: [
                {
                    name: 'Text to test name property #1',
                    expandButtonText: 'Text to test expandButtonText property #1',
                    evFeatures: [
                        { 
                            name: 'Text to test name property #1.1',
                            value: 'Text to test value property #1.1',
                        },
                        { 
                            name: 'Text to test name property #1.2',
                            value: 'Text to test value property #1.2',
                        },
                    ],    
                },
                {
                    name: 'Text to test name property #2',
                    expandButtonText: 'Text to test expandButtonText property #2',
                    evFeatures: [
                        { 
                            name: 'Text to test name property #2.1',
                            value: 'Text to test value property #2.1',
                        },
                        { 
                            name: 'Text to test name property #2.2',
                            value: 'Text to test value property #2.2',
                        },
                    ],    
                },
                {
                    name: 'Text to test name property #3',
                    expandButtonText: 'Text to test expandButtonText property #3',
                    evFeatures: [
                        { 
                            name: 'Text to test name property #3.1',
                            value: 'Text to test value property #3.1',
                        },
                        { 
                            name: 'Text to test name property #3.2',
                            value: 'Text to test value property #3.2',
                        },
                    ],    
                },
                {
                    name: 'Text to test name property #4',
                    expandButtonText: 'Text to test expandButtonText property #4',
                    evFeatures: [
                        { 
                            name: 'Text to test name property #4.1',
                            value: 'Text to test value property #4.1',
                        },
                        { 
                            name: 'Text to test name property #4.2',
                            value: 'Text to test value property #4.2',
                        },
                    ],    
                },
            ],
        }
        shallowEVDetail = undefined;
    });

    test('has 3 children', () => {
        expect(evDetail().children().length).toEqual(3);
    });

    test('has one EVImageSlider with passed property', () => {
        const shallowWrapper = evDetail().find(EVImageSlider);
        expect(shallowWrapper.length).toEqual(1);
        expect(shallowWrapper.prop('imagePath')).toBe(props.imagePath);
    });

    test('has one EVKeyFeatures with passed property', () => {
        const shallowWrapper = evDetail().find(EVKeyFeatures);
        expect(shallowWrapper.length).toEqual(1);
        expect(shallowWrapper.prop('evFeatures')).toBe(props.evFeatures);
    });

    test('has one EVAdditionalSectionsContainer with passed property', () => {
        const shallowWrapper = evDetail().find(EVAdditionalSectionsContainer);
        expect(shallowWrapper.length).toEqual(1);
        expect(shallowWrapper.prop('sections')).toBe(props.sections);
    });
});
