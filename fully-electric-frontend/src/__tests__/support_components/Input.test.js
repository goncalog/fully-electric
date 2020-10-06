import React from 'react';
import Input from '../../components/support_components/Input';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });

describe('Input', () => {
    let props;
    let shallowInput;
    const mockFunction= jest.fn();
    const input = () => {
        if (!shallowInput) {
            shallowInput = shallow(<Input {...props}/>);
        }
        return shallowInput;
    }

    // This resets the props and shallowInput variables before every test. 
    // Otherwise, state from one test would leak into another. 
    // By setting shallowInput to undefined here, when the next test runs, 
    // if it calls input, a new Input will be created with the current props.
    beforeEach(() => {
        props = {
            placeholder: "Text to test placeholder property",
            text: "Text to test text property",
            onTextChange: mockFunction,
        }
        shallowInput = undefined;
    });

    test('has one child', () => {
        expect(input().children().length).toEqual(1);
    });

    test('has one HTML input element', () => {
        const shallowWrapper = input().find('input');
        expect(shallowWrapper.length).toEqual(1);
        expect(shallowWrapper.prop('placeholder')).toBe(props.placeholder);
        expect(shallowWrapper.prop('value')).toBe(props.text);
    });

    test('should call mockFunction onTextChange', () => {
        const shallowWrapper = input().find('input');
        shallowWrapper.props().onChange(); 
        expect(mockFunction).toHaveBeenCalled();
    });
});
