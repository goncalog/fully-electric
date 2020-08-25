import React from 'react';
import EVAdditionalSection from './EVAdditionalSection';

export default function EVAdditionalSectionsContainer(props) {
    return (
        <div className="sections-container">
            {props.sections.map((section, i) => {
                return (
                    <EVAdditionalSection key={i} {...section} />
                );
            })}
        </div>
    );
}
