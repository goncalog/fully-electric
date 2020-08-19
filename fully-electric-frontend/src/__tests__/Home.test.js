import React from 'react';
import Home from '../components/Home';
import HeadlineContainer from '../components/support_components/HeadlineContainer';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });

describe('Home', () => {
    let shallowHome;
    const home = () => {
        if (!shallowHome) {
            shallowHome = shallow(<Home />);
        }
        return shallowHome;
    }

    // This reset the shallowHome variable before every test. 
    // Otherwise, state from one test would leak into another. 
    // By setting shallowHome to undefined here, when the next test runs, 
    // if it calls home, a new Home will be created
    beforeEach(() => {
        shallowHome = undefined;
    });

    test('has one child', () => {
        expect(home().children().length).toEqual(1);
    });

    test('has one HeadlineContainer', () => {
        expect(home().find(HeadlineContainer).length).toEqual(1);
    });

    test('passes properties to child', () => {
        const shallowWrapper = home().find(HeadlineContainer);
        expect(shallowWrapper.prop('backgroundImagePath')).toBe('headline-background.jpg');
        expect(shallowWrapper.prop('mainHeadline')).toBe('Find your dream EV');
        expect(shallowWrapper.prop('secondaryHeadline'))
                .toBe('Test drive it for FREE for one week before purchasing');
        expect(shallowWrapper.prop('callToActionText')).toBe('Let\'s GO!');
    });
});
