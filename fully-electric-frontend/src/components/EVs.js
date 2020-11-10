import React from 'react';
import EVsContainer from './support_components/EVsContainer';
import getFullEvTitle from '../utils/getFullEvTitle';
import '../css/EVs.css';
import formatMiles from '../utils/formatMiles';
import formatNumber from '../utils/formatNumber';
import DropDown from './support_components/DropDown';

export default class EVs extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            evs: [], 
            makes: [{ name: 'Tesla' }, { name: 'Nissan' }, { name: 'Renault' }],
            models: [{ name: 'X' }, { name: 'S' }, { name: '3' }],
            filterVisibility: { make: false, model: false, price: false },
            price: { min: "", max: ""}, 
        };
        this.handleClick = this.handleClick.bind(this);
        this.handleTextChange = this.handleTextChange.bind(this);
    }

    handleClick(property) {
        this.setState({ filterVisibility: { [property]: !this.state.filterVisibility[property] }});
    }

    handleTextChange(property, type, text) {
        this.setState( { [property]:  { [type]: text }});
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
                <div className="filters">
                    <DropDown 
                        property="make"
                        title="Make"
                        onClick={this.handleClick}
                        // option={this.state.make} 
                        options={this.state.makes}
                        visibility={this.state.filterVisibility.make}
                    />
                    <DropDown 
                        property="model"
                        title="Model"
                        onClick={this.handleClick}
                        // option={this.state.model} 
                        options={this.state.models}
                        visibility={this.state.filterVisibility.model}
                    />
                    <DropDown
                        type="minMax" 
                        property="price"
                        title="Price"
                        onClick={this.handleClick}
                        visibility={this.state.filterVisibility.price}
                        min={this.state.price.min}
                        max={this.state.price.max}
                        onTextChange={this.handleTextChange}
                    />
                </div>
                <EVsContainer evs={evs} {...this.props} />
            </div>
        );
    }
}
