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
            filterVisibility: { make: false, model: false }, 
        };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(property) {
        this.setState({ filterVisibility: { [property]: !this.state.filterVisibility[property] }});
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
                </div>
                <EVsContainer evs={evs} {...this.props} />
            </div>
        );
    }
}
