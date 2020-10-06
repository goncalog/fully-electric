import React from 'react';

export default function Input(props) {
    return (
        <div className={props.className}>
            <input 
                placeholder={props.placeholder} 
                value={props.text}
                onChange={props.onTextChange} 
                required
            >
            </input>
        </div>
    );
}
