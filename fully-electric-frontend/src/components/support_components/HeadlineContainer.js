import React from 'react';
import Headline from './Headline';
import CallToActionButton from './CallToActionButton';

export default class HeadlineContainer extends React.Component {
    render() {
        const backgroundImagePath = this.props.backgroundImagePath;
        const mainHeadlineText = this.props.mainHeadline;
        const secondaryHeadlineText = this.props.secondaryHeadline;
        const callToActionText = this.props.callToActionText;

        return (
            <div className="headline-container" style={{backgroundImage: `url(${backgroundImagePath})`}}>
                <Headline mainHeadline={mainHeadlineText} secondaryHeadline={secondaryHeadlineText} />
                <CallToActionButton callToActionText={callToActionText} />
            </div>
        );
    }
}
