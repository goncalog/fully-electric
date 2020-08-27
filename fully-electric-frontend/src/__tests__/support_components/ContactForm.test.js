import React from 'react';
import ContactForm from '../../components/support_components/ContactForm';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });

describe('ContactForm', () => {
    let props;
    let shallowContactForm;
    const contactForm = () => {
        if (!shallowContactForm) {
            shallowContactForm = shallow(<ContactForm {...props}/>);
        }
        return shallowContactForm;
    }

    // This resets the props and shallowContactForm variables before every test. 
    // Otherwise, state from one test would leak into another. 
    // By setting shallowContactForm to undefined here, when the next test runs, 
    // if it calls contactForm, a new ContactForm will be created with the current props.
    beforeEach(() => {
        props = {
            legend: "Text to test legend property",
        }
        shallowContactForm = undefined;
    });

    test('has one child', () => {
        expect(contactForm().children().length).toEqual(1);
    });

    test('has one HTML legend element rendered with passed property', () => {
        const shallowWrapper = contactForm().find('legend');
        expect(shallowWrapper.length).toEqual(1);
        expect(shallowWrapper.text()).toBe(props.legend);
    });

    test('has one HTML input element for the email', () => {
        const shallowWrapper = contactForm().find('div.input input');
        expect(shallowWrapper.length).toEqual(1);
        expect(shallowWrapper.prop('name')).toBe('email');
    });

    test('has one HTML textarea element for the message', () => {
        const shallowWrapper = contactForm().find('div.input textarea');
        expect(shallowWrapper.length).toEqual(1);
        expect(shallowWrapper.prop('name')).toBe('message');
    });
});
