import React from 'react';
import SellerName from './SellerName';
import SellerRating from './SellerRating';
import CallToActionButton from './CallToActionButton';

export default function SellerContact(props) {
    return (
        <div className="seller-contact">
            <SellerName name={props.name} />
            <SellerRating rating={props.rating} />
            <CallToActionButton callToActionText={props.callToActionText} />
        </div>
    );
}
