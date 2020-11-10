import React from 'react';
import DropDown from '../../components/support_components/DropDown';
import MinMax from '../../components/support_components/MinMax';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });

describe('DropDown (Checkbox)', () => {
    let props;
    let shallowDropDown;
    const mockFunction= jest.fn();
    const dropDown = () => {
        if (!shallowDropDown) {
            shallowDropDown = shallow(<DropDown {...props}/>);
        }
        return shallowDropDown;
    }

    // This resets the props and shallowDropDown variables before every test. 
    // Otherwise, state from one test would leak into another. 
    // By setting shallowDropDown to undefined here, when the next test runs, 
    // if it calls dropDown, a new DropDown will be created with the current props.
    beforeEach(() => {
        props = {
            property: "Text to test property property",
            title: "Text to test title property",
            // option: '21123231',
            options: [{ name: "Test 1", _id: '21123231' }, { name: "Test 2", _id: '435254243' }],
            onClick: mockFunction,
            visibility: true,
        }
        shallowDropDown = undefined;
    });

    test('has 2 children with passed property', () => {
        expect(dropDown().children().length).toEqual(2);
        expect(dropDown().hasClass(props.property)).toBe(true);
    });

    test('has one HTML button element with passed property', () => {
        const shallowWrapper = dropDown().find('button');
        expect(shallowWrapper.length).toEqual(1);
        expect(shallowWrapper.text()).toBe(`${props.title} ▾`);
    });

    test('has one HTML dropdown-content div element', () => {
        const shallowWrapper = dropDown().find('div.dropdown-content');
        expect(shallowWrapper.length).toEqual(1);
        expect(shallowWrapper.hasClass('dropdown-content show')).toBe(true);
    });

    test('has 2 HTML input elements', () => {
        const shallowWrapper = dropDown().find('input');
        expect(shallowWrapper.length).toEqual(2);
        shallowWrapper.forEach((node, index) => {
            expect(node.key()).toBe((index).toString());
            expect(node.prop('id')).toBe((index));
            expect(node.prop('value')).toBe(props.options[index]._id);
            expect(node.prop('type')).toBe('checkbox');
        });
    });

    test('has 2 HTML label elements', () => {
        const shallowWrapper = dropDown().find('label');
        expect(shallowWrapper.length).toEqual(2);
        shallowWrapper.forEach((node, index) => {
            expect(node.prop('for')).toBe((index));
            expect(node.text()).toBe(props.options[index].name);
        });
    });

    test('should call mockFunction onClick', () => {
        const shallowWrapper = dropDown().find('button');
        shallowWrapper.props().onClick();
        expect(mockFunction).toHaveBeenCalled();
        expect(mockFunction).toHaveBeenCalledWith(props.property);
    });
});

describe('DropDown (MinMax)', () => {
    let props;
    let shallowDropDown;
    const mockFunction= jest.fn();
    const dropDown = () => {
        if (!shallowDropDown) {
            shallowDropDown = shallow(<DropDown {...props}/>);
        }
        return shallowDropDown;
    }

    // This resets the props and shallowDropDown variables before every test. 
    // Otherwise, state from one test would leak into another. 
    // By setting shallowDropDown to undefined here, when the next test runs, 
    // if it calls dropDown, a new DropDown will be created with the current props.
    beforeEach(() => {
        props = {
            type: "minMax",
            property: "Text to test property property",
            title: "Text to test title property",
            options: [{ name: "Test 1", _id: '21123231' }, { name: "Test 2", _id: '435254243' }],
            onClick: mockFunction,
            visibility: true,
            min: "Text to test min property",
            max: "Text to test max property",
            onTextChange: mockFunction,
        }
        shallowDropDown = undefined;
    });

    test('has one MinMax component', () => {
        const shallowWrapper = dropDown().find(MinMax);
        expect(shallowWrapper.length).toEqual(1);
        expect(shallowWrapper.prop('min')).toBe(props.min);
        expect(shallowWrapper.prop('max')).toBe(props.max);
    });

    test('should call mockFunction onTextChange', () => {
        const shallowWrapper = dropDown().find(MinMax);
        shallowWrapper.props().onTextChange();
        expect(mockFunction).toHaveBeenCalled();
    });
});
