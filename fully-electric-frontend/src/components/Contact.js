import React from 'react';
import ContactForm from './support_components/ContactForm';
import CallToActionButton from './support_components/CallToActionButton';
import '../css/Contact.css';

export default class Contact extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            emailText: '',
            messageText:'',
        }
        this.handleEmailTextChange = this.handleEmailTextChange.bind(this);
        this.handleMessageTextChange = this.handleMessageTextChange.bind(this);
        this.handleSendMessageButtonClick = this.handleSendMessageButtonClick.bind(this);
    }

    handleEmailTextChange(emailText) {
        this.setState({ emailText })
    }

    handleMessageTextChange(messageText) {
        this.setState({ messageText })
    }

    handleSendMessageButtonClick() {
        // Send message to backend
        console.log(`From: ${this.state.emailText}, To: , Message: ${this.state.messageText}`);
    }

    componentDidMount() {
        window.scrollTo(0, 0);
    }

    render() {
        return (
            <div className="contact">
                <ContactForm 
                    legend="Send your message:" 
                    emailText={this.state.emailText} 
                    messageText={this.state.messageText}
                    onEmailTextChange={this.handleEmailTextChange} 
                    onMessageTextChange={this.handleMessageTextChange} 
                />
                <CallToActionButton 
                    callToActionText="Send Message"
                    onButtonClick={this.handleSendMessageButtonClick}  
                />
            </div>
        );
    }
}
