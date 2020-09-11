import React from 'react';

export default class ContactForm extends React.Component {
    constructor(props) {
        super(props);
        this.handleEmailTextChange = this.handleEmailTextChange.bind(this);
        this.handleMessageTextChange = this.handleMessageTextChange.bind(this);
    }

    handleEmailTextChange(e) {
        this.onEmailTextChange(e.target.value);
    }

    handleMessageTextChange(e) {
        this.onMessageTextChange(e.target.value);
    }

    render() {
        return (
            <form className="contact">
                <fieldset>
                    <legend>{this.props.legend}</legend>
                    <div className="input">
                        <input 
                            name="email" 
                            type="email" 
                            placeholder="Your email" 
                            value={this.props.emailText}
                            onChange={this.props.onEmailTextChange} 
                            required
                        >
                        </input>
                    </div>
                    <br></br>
                    <div className="input">
                        <textarea 
                            name="message" 
                            cols="50" 
                            rows="20" 
                            placeholder="Your message"
                            value={this.props.messageText}
                            onChange={this.props.onMessageTextChange}
                        >
                        </textarea>
                    </div>
                </fieldset>
            </form>
        );
    }
}
