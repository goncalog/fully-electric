import React from 'react';
import EVsContainer from './support_components/EVsContainer';
import getFullEvTitle from '../utils/getFullEvTitle';
import '../css/EVs.css';
import formatMiles from '../utils/formatMiles';
import formatNumber from '../utils/formatNumber';

export default class EVs extends React.Component {
    constructor(props) {
        super(props);
        this.state = { evs: [] };
    }

    componentDidMount() {
        fetch(`${process.env.REACT_APP_SERVER_URL}/content/evs`)
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
                <EVsContainer evs={evs} />
            </div>
        );
    }
}
