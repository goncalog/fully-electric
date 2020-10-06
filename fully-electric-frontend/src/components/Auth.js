import React from 'react';
import MainHeadline from './support_components/MainHeadline';
import Input from './support_components/Input';
import CallToActionButton from './support_components/CallToActionButton';
import validateEmail from '../utils/validateEmail';
// import '../css/Auth.css';

export default class Auth extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName: '',
            lastName: '',
            email: '',
            password: '',
        }
        this.handleTextChange = this.handleTextChange.bind(this);
        this.handleButtonClick = this.handleButtonClick.bind(this);
    }

    handleTextChange(property, text) {
        this.setState({ [property]: text })
    }

    handleButtonClick() {
        // Validate name provided
        if (this.state.firstName === '' || this.state.lastName === '') {
            alert('Please provide a valid name.');
            return;
        }

        // Validate email provided
        if (!validateEmail(this.state.email)) {
            alert('Please provide a valid email.');
            return;
        } 
        
        // Validate password provided
        if (this.state.password.length < 8) {
            alert('Please provide a password with at least 8 characters.');
            return;
        } 

        // Send data to backend
        let url = (process.env.NODE_ENV === 'production') 
                ? `/content/seller/signup`
                : `${process.env.REACT_APP_SERVER_URL}/content/seller/signup`;
        
        const data = { 
            name: `${this.state.firstName} ${this.state.lastName}`,
            contact: this.state.email,
            password: this.state.password,
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
                // Go to Seller Page

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
            <div className="auth">
                <MainHeadline mainHeadline="Sign up" />
                <Input 
                    className="first-name" 
                    placeholder="First name" 
                    text={this.state.firstName}
                    onTextChange={this.state.handleTextChange}
                />
                <Input 
                    className="last-name" 
                    placeholder="Last name" 
                    text={this.state.lastName}
                    onTextChange={this.state.handleTextChange}
                />
                <Input 
                    className="email" 
                    placeholder="Email address" 
                    text={this.state.email}
                    onTextChange={this.state.handleTextChange}
                />
                <Input 
                    className="password" 
                    placeholder="Password" 
                    text={this.state.password}
                    onTextChange={this.state.handleTextChange}
                />
                <CallToActionButton callToActionText="Sign up" onButtonClick={this.handleButtonClick} />
            </div>
        );
    }
}
