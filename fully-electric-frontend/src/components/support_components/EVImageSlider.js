import React from 'react';
import EVImage from './EVImage';
import ChangeImageButton from './ChangeImageButton';

export default function EVImageSlider(props) {
    return (
        <div className="image-slider">
            <ChangeImageButton type="previous" />
            <EVImage {...props} />
            <ChangeImageButton type="next" />
        </div>
    );
}
