import React from 'react';
import Contact from '../components/Contact';
import ContactForm from '../components/support_components/ContactForm';
import CallToActionButton from '../components/support_components/CallToActionButton';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });

describe('Contact', () => {
    let shallowContact;
    const contact = () => {
        if (!shallowContact) {
            shallowContact = shallow(<Contact />);
        }
        return shallowContact;
    }

    // This resets the shallowContact variable before every test. 
    // Otherwise, state from one test would leak into another. 
    // By setting shallowContact to undefined here, when the next test runs, 
    // if it calls contact, a new Contact will be created.
    beforeEach(() => {
        shallowContact = undefined;
    });

    test('has 2 children', () => {
        expect(contact().children().length).toEqual(2);
    });

    test('has one CallToActionButton rendered with passed property', () => {
        const shallowWrapper = contact().find(CallToActionButton);
        expect(shallowWrapper.length).toEqual(1);
        expect(shallowWrapper.prop('callToActionText')).toBe('Send Message');
    });

    test('has one ContactForm rendered with passed property', () => {
        const shallowWrapper = contact().find(ContactForm);
        expect(shallowWrapper.length).toEqual(1);
        expect(shallowWrapper.prop('legend')).toBe('Send your message');
    });
});
