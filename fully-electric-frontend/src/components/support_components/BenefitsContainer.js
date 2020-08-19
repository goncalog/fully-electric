import React from 'react';
import Benefit from './Benefit';
import CallToActionButton from './CallToActionButton';

export default class BenefitsContainer extends React.Component {
    render() {
        return (
            <div className="benefit-container">
                {this.props.benefits.map((benefit, index) => {
                    return (
                        <Benefit benefitTitle={benefit.title} benefitText={benefit.text} key={index} />
                    );
                })}
        
                <CallToActionButton callToActionText={this.props.callToActionText} /> 
            </div>
        );
    }
}
