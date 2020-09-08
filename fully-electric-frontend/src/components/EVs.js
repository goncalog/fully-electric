import React from 'react';
import EVsContainer from './support_components/EVsContainer';

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
                title: (item.model.secondary_name) ? 
                        `${item.make.name} ${item.model.name} ${item.model.secondary_name}` : 
                        `${item.make.name} ${item.model.name}`,
                price: item.price.toString(),
                evFeatures: [
                    { 
                        name: 'Year',
                        value: item.year.toString(),
                    },
                    { 
                        name: 'Mileage',
                        value: item.mileage.toString(),
                    },
                    { 
                        name: 'Range',
                        value: item.model.charging.range_miles.toString(),
                    },
                ],                
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
