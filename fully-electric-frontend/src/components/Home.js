import React from 'react';
import HeadlineContainer from './support_components/HeadlineContainer';
import BenefitsContainer from './support_components/BenefitsContainer';
import SellerContainer from './support_components/SellerContainer';
import backgroundHeadlineContainer from '../media/headline-background.jpg';
import backgroundSellerContainer from '../media/seller-container-background.jpg';
import '../css/Home.css';
import { useHistory } from 'react-router-dom';

export default function Home() {
    let history = useHistory();

    function onButtonClick() {
        history.push('/content/evs');
    }
    
    const headlineProps = {
        backgroundImagePath: backgroundHeadlineContainer,
        mainHeadline: 'Find your dream EV',
        secondaryHeadline: 'Test drive it for one week before purchasing - it\'s FREE',
        callToActionText: 'Let\'s GO!',
        onButtonClick: onButtonClick,
    }

    const benefitsProps = {
        benefits: [
            { 
                title: 'Best Price',
                text: 'Find the best EV deals available online',
            },
            { 
                title: 'Most Convenient',
                text: 'We bring it to your home at the time of your preference',
            },
            { 
                title: 'No Risk',
                text: 'Test drive your dream EV for one week before deciding if it\'s right for you - completely FREE!',
            },
        ],
        callToActionText: 'Let\'s GO!',
        onButtonClick: onButtonClick,
    }

    const sellerProps = {
        backgroundImagePath: backgroundSellerContainer,
        mainHeadline: 'Sell your EV for more',
        secondaryHeadline: 'Get £1000 to £3000 more than if you sold to a car dealer',
        callToActionText: 'Let\'s SELL!',
    }

    return (
        <div className="home">
            <HeadlineContainer {...headlineProps}/>
            <BenefitsContainer {...benefitsProps} />
            <SellerContainer {...sellerProps} />
        </div>
    );
}
