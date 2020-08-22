import React from 'react';
import EVIntroCard from './EVIntroCard';
import { Link } from 'react-router-dom';

export default function EVsContainer(props) {
    return (
        <div className="evs-container">
            {props.evs.map((ev, index) => {
                return (
                    <Link to={`/content/ev/${index}`} key={index}>
                        <EVIntroCard 
                            imagePath={ev.imagePath} 
                            title={ev.title} 
                            price={ev.price} 
                            evFeatures={ev.evFeatures} 
                            key={index} 
                        />
                    </Link> 
                );
            })}
        </div>
    );
}
