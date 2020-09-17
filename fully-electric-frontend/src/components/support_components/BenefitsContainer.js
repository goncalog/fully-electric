import React from 'react';
import Benefit from './Benefit';
import CallToActionButton from './CallToActionButton';

export default class BenefitsContainer extends React.Component {
    render() {
        return (
            <div className="benefits-container">
                <div className="benefits">
                    {this.props.benefits.map((benefit, index) => {
                        return (
                            <Benefit benefitTitle={benefit.title} benefitText={benefit.text} key={index} />
                        );
                    })}
                </div>
                
                <div className="callToActionButton-container">
                    <CallToActionButton callToActionText={this.props.callToActionText} /> 
                </div>        
            </div>
        );
    }
}
