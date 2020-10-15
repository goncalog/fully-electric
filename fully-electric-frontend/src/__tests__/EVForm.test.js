import React from 'react';
import EVForm from '../components/EVForm';
import MainHeadline from '../components/support_components/MainHeadline';
import CallToActionButton from '../components/support_components/CallToActionButton';
import Input from '../components/support_components/Input';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });

describe('EVForm', () => {
    let props;
    let shallowEVForm;
    const evForm = () => {
        if (!shallowEVForm) {
            shallowEVForm = shallow(<EVForm {...props} />);
        }
        return shallowEVForm;
    }

    // This resets the props and shallowEVForm variable before every test. 
    // Otherwise, state from one test would leak into another. 
    // By setting shallowEVForm to undefined here, when the next test runs, 
    // if it calls evForm, a new EVForm will be created.
    beforeEach(() => {
        props = {
            match: { 
                url: '/test/url',
            }
        };
        shallowEVForm = undefined;
    });

    // The default test environment for Jest is a browser-like environment provided by jsdom,
    // which implements most of what an actual browser would provide, but it doesn't implement everything.
    // Specifically, jsdom doesn't implement window.scrollTo, and instead throws an Error.
    const jsdomScrollTo = window.scrollTo;  // remember the jsdom scrollTo
    beforeAll(() => {
        window.scrollTo = jest.fn(); // provide a mock implementation for window.scrollTo
    });

    afterAll(() => {
        window.scrollTo = jsdomScrollTo; // restore the jsdom scrollTo
    });

    test('has 17 children', () => {
        expect(evForm().children().length).toEqual(17);
    });

    test('has one MainHeadline rendered with passed properties', () => {
        const shallowWrapper = evForm().find(MainHeadline);
        expect(shallowWrapper.length).toEqual(1);
        expect(Object.keys(shallowWrapper.props())).toContain('mainHeadline');
    });

    test('has 4 CallToActionButton components rendered with passed properties', () => {
        const shallowWrapper = evForm().find(CallToActionButton);
        expect(shallowWrapper.length).toEqual(4);
        shallowWrapper.forEach((node) => {
            expect(Object.keys(node.props())).toContain('callToActionText');
            expect(Object.keys(node.props())).toContain('onButtonClick');
        });
        
    });

    test('has 16 Input components rendered with passed properties', () => {
        const shallowWrapper = evForm().find(Input);
        expect(shallowWrapper.length).toEqual(16);
        shallowWrapper.forEach((node) => {
            expect(Object.keys(node.props())).toContain('className');
            expect(Object.keys(node.props())).toContain('property');
            expect(Object.keys(node.props())).toContain('placeholder');
            expect(Object.keys(node.props())).toContain('text');
            expect(Object.keys(node.props())).toContain('onTextChange');
            if (['make', 'model', 'location'].includes(node.prop('className'))) {
                expect(Object.keys(node.props())).toContain('datalist');
            }
        })
    });
});
