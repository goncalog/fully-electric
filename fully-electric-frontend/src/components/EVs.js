import React from 'react';
import EVsContainer from './support_components/EVsContainer';

export default class EVs extends React.Component {
    constructor(props) {
        super(props);
        this.state = { message: 'Initial message' };
    }

    componentDidMount() {
        fetch(`${process.env.REACT_APP_SERVER_URL}/content/evs`)
            .then(res => res.json())
            .then((res) => { this.setState({ message: res.title }) })
    }

    render() {
        const evs = [
            {
                imagePath: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.PYF7tsBxVqwkqGyeOZdVXwHaE8%26pid%3DApi&f=1',
                title: 'Tesla Model 3',
                price: '35000',
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
                ],    
            },
            {
                imagePath: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.Qyz9YaDUbM866vK5U6RRVQHaE7%26pid%3DApi&f=1',
                title: 'Nissan Leaf',
                price: '12000',
                evFeatures: [
                    { 
                        name: 'Year',
                        value: '2017',
                    },
                    { 
                        name: 'Mileage',
                        value: '23550',
                    },
                    { 
                        name: 'Range',
                        value: '80 miles',
                    },
                ], 
            },
            {
                imagePath: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.tIJz9tL27d_AaByqyWaHwAHaEK%26pid%3DApi&f=1',
                title: 'Hyundai Ioniq',
                price: '25000',
                evFeatures: [
                    { 
                        name: 'Year',
                        value: '2018',
                    },
                    { 
                        name: 'Mileage',
                        value: '52550',
                    },
                    { 
                        name: 'Range',
                        value: '100 miles',
                    },
                ], 
            },
            {
                imagePath: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.2y7YXs-cAIR_s9d-uw1VGwHaEn%26pid%3DApi&f=1',
                title: 'Renault Zoe',
                price: '22000',
                evFeatures: [
                    { 
                        name: 'Year',
                        value: '2015',
                    },
                    { 
                        name: 'Mileage',
                        value: '72550',
                    },
                    { 
                        name: 'Range',
                        value: '80 miles',
                    },
                ], 
            },
        ];

        return (
            <div className="evs">
                <h1>{this.state.message}</h1>
                <EVsContainer evs={evs} />
            </div>
        );
    }
}
