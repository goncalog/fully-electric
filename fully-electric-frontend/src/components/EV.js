import React from 'react';
import EVTitle from './support_components/EVTitle';
import EVPrice from './support_components/EVPrice';
import SellerContact from './support_components/SellerContact';
import EVDetail from './support_components/EVDetail';
import formatRating from '../utils/formatRating';

export default class EV extends React.Component {
    render() {
        const ev = {
            title: 'Tesla Model 3',
            price: '35000',
            seller: {
                name: 'Miss Tesla',
                rating: '4.67',
                callToActionText: 'Contact Seller',
            },
            detail: {
                imagePath: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.PYF7tsBxVqwkqGyeOZdVXwHaE8%26pid%3DApi&f=1',
                evFeatures: [
                    { 
                        name: 'Year',
                        value: '2019',
                    },
                    { 
                        name: 'Mileage',
                        value: '12550',
                    },
                    { 
                        name: 'Range',
                        value: '200 miles',
                    },
                    { 
                        name: 'Location',
                        value: 'London',
                    },
                    { 
                        name: 'Rating',
                        value: formatRating('4.78'),
                    },
                ],
                sections: [
                    {
                        name: 'Equipment and options',
                        expandButtonText: '+',
                        evFeatures: [
                            { 
                                name: 'Equipment',
                                value: 'Premium',
                            },
                            { 
                                name: 'Options',
                                value: 'Standard',
                            },
                        ],    
                    },
                    {
                        name: 'Exterior',
                        expandButtonText: '+',
                        evFeatures: [
                            { 
                                name: 'Colour',
                                value: 'Red',
                            },
                            { 
                                name: 'Doors',
                                value: '5',
                            },
                        ],    
                    },
                    {
                        name: 'Interior',
                        expandButtonText: '+',
                        evFeatures: [
                            { 
                                name: 'Seats',
                                value: 'Leather',
                            },
                            { 
                                name: 'Screen',
                                value: 'Touch',
                            },
                        ],    
                    },
                    {
                        name: 'Performance',
                        expandButtonText: '+',
                        evFeatures: [
                            { 
                                name: '0-60mph',
                                value: '4.0sec',
                            },
                            { 
                                name: 'Top speed',
                                value: '162mph',
                            },
                        ],    
                    },
                ],
            },     
        }
        
        return (
            <div className="ev">
                <h1>EV - {this.props.match.params.id}</h1>
                <EVTitle title={ev.title} />
                <EVPrice price={ev.price} />
                <SellerContact {...ev.seller} />
                <EVDetail {...ev.detail} />
                <SellerContact {...ev.seller} />
            </div>
        )
    }
}
