import React, { useEffect } from 'react';
import CallToActionButton from './support_components/CallToActionButton';
import EV from './EV';
import '../css/SellerEV.css';

export default function SellerEV(props) {
    const handleUpdateButtonClick = () => props.history.push(`${props.match.url}/update`);
    const handleDeleteButtonClick = () => props.history.push(`${props.match.url}/delete`);

    useEffect(() => {
        window.scrollTo(0, 0);
    });

    return (
        <div className="seller-ev">
            <div className="callToActionButton-container">
                <CallToActionButton 
                    callToActionText="Update" 
                    onButtonClick={handleUpdateButtonClick} 
                />
                <CallToActionButton
                    callToActionText="Delete" 
                    onButtonClick={handleDeleteButtonClick} 
                />
            </div>
            <EV {...props} />         
        </div>
    );
}
