import React from 'react';
import EVImageSlider from '../../components/support_components/EVImageSlider';
import EVImage from '../../components/support_components/EVImage';
import ChangeImageButton from '../../components/support_components/ChangeImageButton';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });

describe('EVImageSlider', () => {
    let props;
    let shallowEVImageSlider;
    const evImageSlider = () => {
        if (!shallowEVImageSlider) {
            shallowEVImageSlider = shallow(<EVImageSlider {...props} />);
        }
        return shallowEVImageSlider;
    }

    // This reset the props and shallowEVImageSlider variables before every test. 
    // Otherwise, state from one test would leak into another. 
    // By setting shallowEVImageSlider to undefined here, when the next test runs, 
    // if it calls evImageSlider, a new EVImageSlider will be created with the current props
    beforeEach(() => {
        props = {
            imagePath: '/path/to/ev/image',
        }
        shallowEVImageSlider = undefined;
    });

    test('has 3 children', () => {
        expect(evImageSlider().children().length).toEqual(3);
    });

    test('has one EVImage component rendered with passed property', () => {
        const shallowWrapper = evImageSlider().find(EVImage);
        expect(shallowWrapper.length).toEqual(1);
        expect(shallowWrapper.prop('imagePath')).toBe(props.imagePath);
    });

    test('has 2 ChangeImageButton component rendered with passed property', () => {
        const shallowWrapper = evImageSlider().find(ChangeImageButton);
        expect(shallowWrapper.length).toEqual(2);
        const type = ['previous', 'next'];
        shallowWrapper.forEach((node, i) => {
            expect(node.prop('type')).toBe(type[i]);
        });
    });
});