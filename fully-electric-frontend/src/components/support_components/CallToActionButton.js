import React from 'react';

export default class CallToActionButton extends React.Component {
    render() {
        const callToActionText = this.props.callToActionText;

        return (
            <button className='headline-callToActionButton'>{callToActionText}</button>
        );
    }
}
