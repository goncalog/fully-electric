import React from 'react';
import HeadlineContainer from './support_components/HeadlineContainer';
import BenefitsContainer from './support_components/BenefitsContainer';
import SellerContainer from './support_components/SellerContainer';
import background from '../media/headline-background.jpg';
import '../css/Home.css';

export default class Home extends React.Component {
    render() {
        const headlineProps = {
            backgroundImagePath: background,
            mainHeadline: 'Find your dream EV',
            secondaryHeadline: 'Test drive it for one week before purchasing - it\'s FREE',
            callToActionText: 'Let\'s GO!',
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
        }

        const sellerProps = {
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
}
