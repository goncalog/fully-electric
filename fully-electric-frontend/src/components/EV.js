import React from 'react';
import EVTitle from './support_components/EVTitle';
import EVPrice from './support_components/EVPrice';
import SellerContact from './support_components/SellerContact';
import EVDetail from './support_components/EVDetail';
import formatRating from '../utils/formatRating';
import getFullEvTitle from '../utils/getFullEvTitle';
import getEvFeaturesArray from '../utils/getEvFeaturesArray';
import getImagePosForSlider from '../utils/getImagePosForSlider';
import '../css/EV.css';

export default class EV extends React.Component {
    constructor(props) {
        super(props);
        this.state = { ev: {}, currentImage: 0 };
        this.handleChangeImageButtonClick = this.handleChangeImageButtonClick.bind(this);
    }

    handleChangeImageButtonClick(buttonType) {
        if (buttonType === 'next') {
            this.setState({ currentImage: this.state.currentImage + 1 })
        } else if (buttonType === 'previous') {
            this.setState({ currentImage: this.state.currentImage - 1 })
        }
    }

    componentDidMount() {
        fetch(`${process.env.REACT_APP_SERVER_URL}/content/ev/${this.props.match.params.id}`)
            .then((res) => res.json())
            .then((res) => { this.setState({ ev: res.ev }) })
    }

    render() {
        let ev = {
            title: '', 
            price: '',
            seller: { name: '', rating: '', callToActionText: '', },
            detail: { imagePath: '', evFeatures: [], sections: [], onChangeImageButtonClick: this.handleChangeImageButtonClick, },     
        }

        if (Object.keys(this.state.ev).length > 0) {
            const imagePath = this.state.ev.image_urls[
                getImagePosForSlider(this.state.ev.image_urls.length, this.state.currentImage)
            ];
            
            ev = {
                title: getFullEvTitle(this.state.ev),
                price: this.state.ev.price.toString(),
                seller: {
                    name: this.state.ev.seller.name,
                    rating: this.state.ev.seller.rating,
                    callToActionText: 'Contact Seller',
                },
                detail: {
                    imagePath: imagePath,
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
                            evFeatures: getEvFeaturesArray(this.state.ev.equipment_and_options),    
                        },
                        {
                            name: 'Exterior',
                            expandButtonText: '+',
                            evFeatures: [
                                { 
                                    name: 'Body style',
                                    value: (this.state.ev.exterior.body_style) ? 
                                    `${this.state.ev.exterior.body_style}` : 
                                    'N/a',
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
                                    name: 'Horsepower',
                                    value: `${this.state.ev.model.performance.horsepower}hp`,
                                },
                                { 
                                    name: 'Top speed',
                                    value: `${this.state.ev.model.performance.top_speed_mph}mph`,
                                },
                                { 
                                    name: '0-60mph',
                                    value: `${this.state.ev.model.performance.zero_to_sixty_mph}sec`,
                                },
                                { 
                                    name: 'Miles per kWh',
                                    value: (this.state.ev.model.performance.miles_per_kwh) ? 
                                            `${this.state.ev.model.performance.miles_per_kwh}` : 
                                            'N/a',
                                },
                            ],    
                        },
                    ],
                    onChangeImageButtonClick: this.handleChangeImageButtonClick,
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
