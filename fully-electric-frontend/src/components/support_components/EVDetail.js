import React from 'react';
import EVImageSlider from './EVImageSlider';
import EVKeyFeatures from './EVKeyFeatures';
import EVAdditionalSectionsContainer from './EVAdditionalSectionsContainer';

export default function EVDetail(props) {
    return (
        <div className="ev-detail">
            <EVImageSlider imagePath={props.imagePath} />
            <EVKeyFeatures evFeatures={props.evFeatures} />
            <EVAdditionalSectionsContainer sections={props.sections} />
        </div>
    );
}
