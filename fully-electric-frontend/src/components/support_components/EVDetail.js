import React from 'react';
import EVImageSlider from './EVImageSlider';
import EVKeyFeatures from './EVKeyFeatures';
import EVAdditionalSectionsContainer from './EVAdditionalSectionsContainer';

export default class EVDetail extends React.Component {
    constructor(props) {
        super(props);
        this.handleChangeImageButtonClick = this.handleChangeImageButtonClick.bind(this);
    }

    handleChangeImageButtonClick(buttonType) {
        this.props.onChangeImageButtonClick(buttonType);
    }

    render() {
        return (
            <div className="ev-detail">
                <EVImageSlider 
                        imagePath={this.props.imagePath} 
                        onChangeImageButtonClick={this.handleChangeImageButtonClick}
                />
                <EVKeyFeatures evFeatures={this.props.evFeatures} />
                <EVAdditionalSectionsContainer sections={this.props.sections} />
            </div>
        );
    }
}
