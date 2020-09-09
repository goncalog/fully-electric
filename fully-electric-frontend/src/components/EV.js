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
        this.state = { ev: {}, currentImage: 0 };
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
            detail: { imagePath: '', evFeatures: [], sections: [], },     
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
                    imagePath: this.state.ev.image_urls[this.state.currentImage],
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
                                    name: 'Body style',
                                    value: 'N/a',
                                },
                                { 
                                    name: 'Colour',
                                    value: this.state.ev.exterior.colour,
                                },
                            ],    
                        },
                        {
                            name: 'Interior',
                            expandButtonText: '+',
                            evFeatures: [
                                { 
                                    name: 'Seating',
                                    value: this.state.ev.interior.seating,
                                },
                                { 
                                    name: 'Colour',
                                    value: this.state.ev.interior.colour,
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
