import React from 'react';
import EVsContainer from '../../components/support_components/EVsContainer';
import EVIntroCard from '../../components/support_components/EVIntroCard';
import { Link } from 'react-router-dom';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });

describe('EVsContainer', () => {
    let props;
    let shallowEVsContainer;
    const evsContainer = () => {
        if (!shallowEVsContainer) {
            shallowEVsContainer = shallow(<EVsContainer {...props} />);
        }
        return shallowEVsContainer;
    }

    // This reset the props and shallowEVsContainer variables before every test. 
    // Otherwise, state from one test would leak into another. 
    // By setting shallowEVsContainer to undefined here, when the next test runs, 
    // if it calls evsContainer, a new EVsContainer will be created with the current props
    beforeEach(() => {
        props = {
            evs: [
                {
                    imagePath: '/path/to/evOne/image',
                    title: 'Text to test title property #1',
                    price: '10000',
                    evFeatures: [
                        { 
                            name: 'Text to test name property #1.1',
                            value: 'Text to test value property #1.1',
                        },
                        { 
                            name: 'Text to test name property #1.2',
                            value: 'Text to test value property #1.2',
                        },
                        { 
                            name: 'Text to test name property #1.3',
                            value: 'Text to test value property #1.3',
                        },
                    ],    
                },
                {
                    imagePath: '/path/to/evTwo/image',
                    title: 'Text to test title property #2',
                    price: '20000',
                    evFeatures: [
                        { 
                            name: 'Text to test name property #2.1',
                            value: 'Text to test value property #2.1',
                        },
                        { 
                            name: 'Text to test name property #2.2',
                            value: 'Text to test value property #2.2',
                        },
                        { 
                            name: 'Text to test name property #2.3',
                            value: 'Text to test value property #2.3',
                        },
                    ],    
                },
                {
                    imagePath: '/path/to/evThree/image',
                    title: 'Text to test title property #3',
                    price: '30000',
                    evFeatures: [
                        { 
                            name: 'Text to test name property #3.1',
                            value: 'Text to test value property #3.1',
                        },
                        { 
                            name: 'Text to test name property #3.2',
                            value: 'Text to test value property #3.2',
                        },
                        { 
                            name: 'Text to test name property #3.3',
                            value: 'Text to test value property #3.3',
                        },
                    ],    
                },
                {
                    imagePath: '/path/to/evFour/image',
                    title: 'Text to test title property #4',
                    price: '40000',
                    evFeatures: [
                        { 
                            name: 'Text to test name property #4.1',
                            value: 'Text to test value property #4.1',
                        },
                        { 
                            name: 'Text to test name property #4.2',
                            value: 'Text to test value property #4.2',
                        },
                        { 
                            name: 'Text to test name property #4.3',
                            value: 'Text to test value property #4.3',
                        },
                    ],    
                },
            ],
        }
        shallowEVsContainer = undefined;
    });

    test('has 4 children', () => {
        expect(evsContainer().children().length).toEqual(4);
    });

    test('has 4 Link components rendered with passed properties', () => {
        const shallowWrapper = evsContainer().find(Link);
        expect(shallowWrapper.length).toEqual(4);

        shallowWrapper.forEach((link, i) => {
            expect(link.prop('to')).toBe(`/content/ev/${i}`);
            expect(link.children().key()).toBe(i.toString());
        });
    });

    test('has 4 EVIntroCard components rendered with passed properties', () => {
        const shallowWrapper = evsContainer().find(EVIntroCard);
        expect(shallowWrapper.length).toEqual(4);

        shallowWrapper.forEach((ev, i) => {
            expect(ev.prop('imagePath')).toBe(props.evs[i].imagePath);
            expect(ev.prop('title')).toBe(props.evs[i].title);
            expect(ev.prop('price')).toBe(props.evs[i].price);
            expect(ev.prop('evFeatures')).toBe(props.evs[i].evFeatures);
            expect(ev.key()).toBe(i.toString());
        });
    });
});
