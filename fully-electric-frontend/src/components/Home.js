import React from 'react';
import HeadlineContainer from './support_components/HeadlineContainer';
import BenefitsContainer from './support_components/BenefitsContainer';
import background from '../media/headline-background.jpg';
import '../css/Home.css';

export default class Home extends React.Component {
    render() {
        const headlineProps = {
            backgroundImagePath: background,
            mainHeadline: 'Find your dream EV',
            secondaryHeadline: 'Test drive it for FREE for one week before purchasing',
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

        return (
            <div className="home">
                <HeadlineContainer {...headlineProps}/>
                <BenefitsContainer {...benefitsProps} />
            </div>
        );
    }
}
