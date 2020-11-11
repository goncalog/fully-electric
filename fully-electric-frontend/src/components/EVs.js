import React from 'react';
import Filters from './support_components/Filters';
import EVsContainer from './support_components/EVsContainer';
import getFullEvTitle from '../utils/getFullEvTitle';
import '../css/EVs.css';
import formatMiles from '../utils/formatMiles';
import formatNumber from '../utils/formatNumber';

export default class EVs extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            evs: [],
            make: {
                property: 'make',
                title: 'Make',
                makes: [{ name: 'Tesla' }, { name: 'Nissan' }, { name: 'Renault' }],
            },
            model: {
                property: 'model',
                title: 'Model',
                models: [{ name: 'X' }, { name: 'S' }, { name: '3' }],
            },
            price: { property: 'price', title: 'Price', min: "", max: "",},
            mileage: { property: 'mileage', title: 'Mileage', min: "", max: "",},
            range: { property: 'range', title: 'Range', min: "", max: "",},
            filterVisibility: { make: false, model: false, price: false, mileage: false, range: false, },
        };
        this.handleClick = this.handleClick.bind(this);
        this.handleTextChange = this.handleTextChange.bind(this);
    }

    handleClick(property) {
        this.setState({ filterVisibility: { [property]: !this.state.filterVisibility[property] }});
    }

    handleTextChange(property, type, text) {
        this.setState({ [property]:  { ...this.state[property], [type]: text }});
    }

    componentDidMount() {
        // Scroll to top of page
        window.scrollTo(0, 0);

        // Upload database data
        fetch(this.props.fetchUrl)
            .then(res => res.json())
            .then((res) => { this.setState({ evs: res.evs }) })
    }

    render() {
        const evs = this.state.evs.map((item) => {
            let ev = {
                imageUrls: item.image_urls,
                title: getFullEvTitle(item),
                price: item.price,
                evFeatures: [
                    { 
                        name: 'Year',
                        value: item.year,
                    },
                    { 
                        name: 'Mileage',
                        value: formatNumber(item.mileage),
                    },
                    { 
                        name: 'Range',
                        value: formatMiles(item.model.charging.range_miles),
                    },
                ],
                id: item._id,                
            };
            return ev;
        });

        return (
            <div className="evs">
                <Filters 
                    make={this.state.make}
                    model={this.state.model}
                    price={this.state.price}
                    mileage={this.state.mileage}
                    range={this.state.range}
                    visibility={this.state.filterVisibility}
                    onClick={this.handleClick}
                    onTextChange={this.handleTextChange}
                />
                <EVsContainer evs={evs} {...this.props} />
            </div>
        );
    }
}
