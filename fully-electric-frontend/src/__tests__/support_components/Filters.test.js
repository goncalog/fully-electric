import React from 'react';
import Filters from '../../components/support_components/Filters';
import DropDown from '../../components/support_components/DropDown';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });

describe('Filters', () => {
    let props;
    let shallowFilters;
    const mockFunction= jest.fn();
    const mockFunctionTwo= jest.fn();
    const filters = () => {
        if (!shallowFilters) {
            shallowFilters = shallow(<Filters {...props}/>);
        }
        return shallowFilters;
    }

    // This resets the props and shallowFilters variables before every test. 
    // Otherwise, state from one test would leak into another. 
    // By setting shallowFilters to undefined here, when the next test runs, 
    // if it calls filters, a new Filters will be created with the current props.
    beforeEach(() => {
        props = {
            make: "Text to test make property",
            model: "Text to test model property",
            price: "Text to test price property",
            mileage: "Text to test mileage property",
            range: "Text to test range property",
            extras: "Text to test extras property",
            visibility: "Text to test visibility property",
            onClick: mockFunction,
            onTextChange: mockFunctionTwo,
        }
        shallowFilters = undefined;
    });

    test('has 6 children', () => {
        expect(filters().children().length).toEqual(6);
    });

    test('has 6 DropDown components', () => {
        const shallowWrapper = filters().find(DropDown);
        expect(shallowWrapper.length).toEqual(6);
        shallowWrapper.forEach((node, index) => {
            expect(Object.keys(node.props())).toContain('property');
            expect(Object.keys(node.props())).toContain('title');
            node.props().onClick();
            expect(mockFunction).toHaveBeenCalled();
            expect(Object.keys(node.props())).toContain('visibility');

            if ([2,3,4].includes(index)) {
                expect(Object.keys(node.props())).toContain('type');
                expect(Object.keys(node.props())).toContain('min');
                expect(Object.keys(node.props())).toContain('max');
                node.props().onTextChange();
                expect(mockFunctionTwo).toHaveBeenCalled();
            } else {
                expect(Object.keys(node.props())).toContain('options');
            }
        });
    });
});
