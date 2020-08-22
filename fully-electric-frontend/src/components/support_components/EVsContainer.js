import React from 'react';
import EVIntroCard from './EVIntroCard';

export default function EVsContainer(props) {
    return (
        <div className="evs-container">
            {props.evs.map((ev, index) => {
                return (
                    <EVIntroCard 
                        imagePath={ev.imagePath} 
                        title={ev.title} 
                        price={ev.price} 
                        evFeatures={ev.evFeatures} 
                        key={index} 
                    />
                );
            })}
        </div>
    );
}
