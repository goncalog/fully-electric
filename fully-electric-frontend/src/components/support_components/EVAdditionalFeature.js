import React from 'react';

export default function EVAdditionalFeature(props) {
    return (
        <p className="additional-feature">{`- ${props.name}: ${props.value}`}</p>
    );
}
