import React from 'react';
import ContactForm from './support_components/ContactForm';
import CallToActionButton from './support_components/CallToActionButton';

export default class Contact extends React.Component {
    render() {
        return (
            <div className="contact">
                <ContactForm legend="Send your message:" />
                <CallToActionButton callToActionText="Send Message"></CallToActionButton>
            </div>
        );
    }
}
