import React from 'react';
import Headline from './Headline';
import CallToActionButton from './CallToActionButton';

export default function SellerContainer(props) {
    return (
        <div className="seller-container">
            <Headline 
                mainHeadline={props.mainHeadline} 
                secondaryHeadline={props.secondaryHeadline} 
            />
            <CallToActionButton callToActionText={props.callToActionText} />
        </div>
    );
}
