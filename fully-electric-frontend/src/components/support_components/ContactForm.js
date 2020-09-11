import React from 'react';

export default function ContactForm(props) {
    return (
        <form className="contact">
            <fieldset>
                <legend>{props.legend}</legend>
                <div className="input">
                    <input 
                        name="email" 
                        type="email" 
                        placeholder="Your email" 
                        value={props.emailText} 
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
                        value={props.messageText}
                    >
                    </textarea>
                </div>
            </fieldset>
        </form>
    );
}
