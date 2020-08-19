import React from 'react';
import HeadlineContainer from './support_components/HeadlineContainer';
import background from '../media/headline-background.jpg';
import '../css/Home.css';

export default class Home extends React.Component {
    render() {
        const props = {
            backgroundImagePath: background,
            mainHeadline: 'Find your dream EV',
            secondaryHeadline: 'Test drive it for FREE for one week before purchasing',
            callToActionText: 'Let\'s GO!',
        }

        return (
            <div className="home">
                <HeadlineContainer {...props}/>
            </div>
        );
    }
}
