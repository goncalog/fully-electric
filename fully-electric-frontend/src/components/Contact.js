import React from 'react';
import ContactForm from './support_components/ContactForm';
import CallToActionButton from './support_components/CallToActionButton';

export default class Contact extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            emailText: '',
            messageText:'',
        }
    }

    render() {
        return (
            <div className="contact">
                <ContactForm 
                    legend="Send your message:" 
                    emailText={this.state.emailText} 
                    messageText={this.state.messageText} 
                />
                <CallToActionButton callToActionText="Send Message"></CallToActionButton>
            </div>
        );
    }
}
