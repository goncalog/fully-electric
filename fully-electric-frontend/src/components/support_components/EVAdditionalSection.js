import React from 'react';
import EVAdditionalSectionName from './EVAdditionalSectionName';
import ExpandButton from './ExpandButton';
import EVAdditionalFeatures from './EVAdditionalFeatures';

export default function EVAdditionalSection(props) {
    return (
        <div className="ev-additional-section">
            <EVAdditionalSectionName name={props.name} />
            <ExpandButton expandButtonText={props.expandButtonText} />
            <EVAdditionalFeatures evFeatures={props.evFeatures} />
        </div>
    );
}
