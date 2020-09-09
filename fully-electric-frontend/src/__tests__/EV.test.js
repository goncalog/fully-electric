import React from 'react';
import EV from '../components/EV';
import EVTitle from '../components/support_components/EVTitle';
import EVPrice from '../components/support_components/EVPrice';
import SellerContact from '../components/support_components/SellerContact';
import EVDetail from '../components/support_components/EVDetail';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });

describe('EV', () => {
    let props;
    let shallowEV;
    const ev = () => {
        if (!shallowEV) {
            shallowEV = shallow(<EV {...props}/>);
        }
        return shallowEV;
    }

    // This reset the props and shallowEV variables before every test. 
    // Otherwise, state from one test would leak into another. 
    // By setting shallowEV to undefined here, when the next test runs, 
    // if it calls ev, a new EV will be created with the current props.
    beforeEach(() => {
        props = {
            match: {
                params: {
                    id: 12345,
                }
            }
        }
        shallowEV = undefined;
    });

    test('has 5 children', () => {
        expect(ev().children().length).toEqual(5);
    });

    test('has one EVTitle component rendered with passed properties', () => {
        const shallowWrapper = ev().find(EVTitle);
        expect(shallowWrapper.length).toEqual(1);
        expect(Object.keys(shallowWrapper.props())).toContain('title');
    });

    test('has one EVPrice component rendered with passed properties', () => {
        const shallowWrapper = ev().find(EVPrice);
        expect(shallowWrapper.length).toEqual(1);
        expect(Object.keys(shallowWrapper.props())).toContain('price');
    });

    test('has 2 SellerContact components rendered with passed properties', () => {
        const shallowWrapper = ev().find(SellerContact);
        expect(shallowWrapper.length).toEqual(2);

        shallowWrapper.forEach((node) => {
            expect(Object.keys(node.props())).toContain('name');
            expect(Object.keys(node.props())).toContain('rating');
            expect(Object.keys(node.props())).toContain('callToActionText');
        });
    });

    test('has one EVDetail component rendered with passed properties', () => {
        const shallowWrapper = ev().find(EVDetail);
        expect(shallowWrapper.length).toEqual(1);
        expect(Object.keys(shallowWrapper.props())).toContain('imagePath');
        expect(shallowWrapper.prop('evFeatures')).toBeTruthy();
        expect(shallowWrapper.prop('sections')).toBeTruthy();
    });

    // TODO: test API call within EV React component (and how that affects props passed to its children)

});
