import React from 'react';
import EVs from '../components/EVs';
import EVsContainer from '../components/support_components/EVsContainer';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });

describe('EVs', () => {
    let shallowEVs;
    const evs = () => {
        if (!shallowEVs) {
            shallowEVs = shallow(<EVs />);
        }
        return shallowEVs;
    }

    // This reset the shallowEVs variable before every test. 
    // Otherwise, state from one test would leak into another. 
    // By setting shallowEVs to undefined here, when the next test runs, 
    // if it calls evs, a new EVs will be created
    beforeEach(() => {
        shallowEVs = undefined;
    });

    test('has one child', () => {
        expect(evs().children().length).toEqual(1);
    });

    test('has one EVsContainer component rendered with passed properties', () => {
        const shallowWrapper = evs().find(EVsContainer);
        expect(shallowWrapper.length).toEqual(1);
    });
});
