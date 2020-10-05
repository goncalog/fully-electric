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
        // Send data to backend
        let url = (process.env.NODE_ENV === 'production') 
                ? `/content/seller/${this.props.match.params.id}`
                : `${process.env.REACT_APP_SERVER_URL}/content/seller/${this.props.match.params.id}`;
        
        const data = { 
            from: this.state.emailText,
            to: this.props.location.state.contact,
            subject: 'Contact',
            text: this.state.messageText,
        };

        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data),
        })
            .then(response => response.json())
            .then(response => {
                console.log('Success:', response);
            })
            .catch((error) => {
                console.error('Error:', error);
            });        
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
