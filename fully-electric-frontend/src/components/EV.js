import React from 'react';
import EVTitle from './support_components/EVTitle';
import EVPrice from './support_components/EVPrice';
import SellerContact from './support_components/SellerContact';
import EVDetail from './support_components/EVDetail';
import formatRating from '../utils/formatRating';
import getFullEvTitle from '../utils/getFullEvTitle';

export default class EV extends React.Component {
    constructor(props) {
        super(props);
        this.state = { ev: {} };
    }

    componentDidMount() {
        fetch(`${process.env.REACT_APP_SERVER_URL}/content/ev/${this.props.match.params.id}`)
            .then((res) => res.json())
            .then((res) => { this.setState({ ev: res.ev }) })
    }

    render() {
        console.log(this.state.ev);

        let ev = {
            title: '', 
            price: '',
            seller: { name: '', rating: '', callToActionText: '', },
            detail: { imageUrls: [], evFeatures: [], sections: [], },     
        }

        if (Object.keys(this.state.ev).length > 0) {
            ev = {
                title: getFullEvTitle(this.state.ev),
                price: this.state.ev.price.toString(),
                seller: {
                    name: this.state.ev.seller.name,
                    rating: this.state.ev.seller.rating,
                    callToActionText: 'Contact Seller',
                },
                detail: {
                    imageUrls: this.state.ev.image_urls,
                    evFeatures: [
                        { 
                            name: 'Year',
                            value: this.state.ev.year,
                        },
                        { 
                            name: 'Mileage',
                            value: this.state.ev.mileage,
                        },
                        { 
                            name: 'Range',
                            value: this.state.ev.model.charging.range_miles,
                        },
                        { 
                            name: 'Location',
                            value: this.state.ev.location.city,
                        },
                        { 
                            name: 'Rating',
                            value: formatRating(this.state.ev.model.rating),
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
        }
        
        return (
            <div className="ev">
                <EVTitle title={ev.title} />
                <EVPrice price={ev.price} />
                <SellerContact {...ev.seller} />
                <EVDetail {...ev.detail} />
                <SellerContact {...ev.seller} />
            </div>
        )
    }
}
