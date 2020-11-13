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
            make: { property: 'make', title: 'Make', options: [], },
            price: { property: 'price', title: 'Price', min: "", max: "",},
            mileage: { property: 'mileage', title: 'Mileage', min: "", max: "",},
            range: { property: 'range', title: 'Range', min: "", max: "",},
            extras: { property: 'extras', title: 'Extras', options: [{ name: 'FSD' }], },
            sort: { 
                property: 'sort', 
                title: 'Sort', 
                options: [
                    { name: 'Lowest Price' }, { name: 'Highest Price' }, 
                    { name: 'Lowest Mileage' }, { name: 'Highest Range' }, 
                ], 
            },
            filterVisibility: { 
                make: false, price: false, mileage: false, range: false, extras: false, sort: false 
            },
        };
        this.handleClick = this.handleClick.bind(this);
        this.handleTextChange = this.handleTextChange.bind(this);
        this.handleCheckBoxChange = this.handleCheckBoxChange.bind(this);
    }

    handleClick(property) {
        this.setState({ filterVisibility: { [property]: !this.state.filterVisibility[property] }});
    }

    handleTextChange(property, type, text) {
        this.setState({ [property]:  { ...this.state[property], [type]: text }});
    }

    handleCheckBoxChange(prop, i) {
        let options = this.state[prop].options.slice();
        options[i].checked = !options[i].checked;
        this.setState({ [prop]: { ...this.state[prop], options: options }});
    }

    componentDidMount() {
        // Scroll to top of page
        window.scrollTo(0, 0);

        // Upload database data
        fetch(this.props.fetchUrl)
            .then(res => res.json())
            .then((res) => { this.setState({ evs: res.evs }) })

        // Fetch makes
        if (this.state.make.options.length === 0) {
            let url = (process.env.NODE_ENV === 'production') 
                    ? `/content/makes` 
                    : `${process.env.REACT_APP_SERVER_URL}/content/makes`;

            fetch(url)
                .then((res) => res.json())
                .then((res) => {
                    res.makes.forEach((make) => make['checked'] = false);
                    this.setState({ make: { ...this.state.make, options: res.makes }}) 
                })
        }
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
                    price={this.state.price}
                    mileage={this.state.mileage}
                    range={this.state.range}
                    extras={this.state.extras}
                    sort={this.state.sort}
                    visibility={this.state.filterVisibility}
                    onClick={this.handleClick}
                    onTextChange={this.handleTextChange}
                    onCheckBoxChange={this.handleCheckBoxChange}
                />
                <EVsContainer evs={evs} {...this.props} />
            </div>
        );
    }
}
