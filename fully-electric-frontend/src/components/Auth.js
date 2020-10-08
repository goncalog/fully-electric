import React from 'react';
import MainHeadline from './support_components/MainHeadline';
import Input from './support_components/Input';
import CallToActionButton from './support_components/CallToActionButton';
import validateEmail from '../utils/validateEmail';
import '../css/Auth.css';

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
        if (this.props.match.url === '/seller/signup') {
            // Validate name provided
            if (this.state.firstName === '' || this.state.lastName === '') {
                alert('Please provide a valid name.');
                return;
            }
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
            ? `/content${this.props.match.url}`
            : `${process.env.REACT_APP_SERVER_URL}/content${this.props.match.url}`;
        let data;
        
        if (this.props.match.url === '/seller/signup') {
            // Sign up
            data = { 
                name: `${this.state.firstName} ${this.state.lastName}`,
                contact: this.state.email,
                password: this.state.password,
            };
        } else {
            // Log in
            data = { 
                username: this.state.email,
                password: this.state.password,
            };
        }

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
        const action = this.props.match.url === '/seller/signup' ? 'Sign up' : 'Log in';

        return (
            <div className="auth">
                <MainHeadline mainHeadline={action} />
                <div className={this.props.match.url === '/seller/signup' ? '' : 'invisible'}>
                    <Input
                        className="first-name" 
                        property="firstName"
                        placeholder="First name" 
                        text={this.state.firstName}
                        onTextChange={this.handleTextChange}
                    />
                    <Input 
                        className="last-name"
                        property="lastName"
                        placeholder="Last name" 
                        text={this.state.lastName}
                        onTextChange={this.handleTextChange}
                    />
                </div>
                <Input 
                    className="email"
                    property="email"
                    placeholder="Email address" 
                    text={this.state.email}
                    onTextChange={this.handleTextChange}
                />
                <Input 
                    className="password"
                    property="password"
                    placeholder="Password" 
                    text={this.state.password}
                    onTextChange={this.handleTextChange}
                />
                <CallToActionButton callToActionText={action} onButtonClick={this.handleButtonClick} />
            </div>
        );
    }
}