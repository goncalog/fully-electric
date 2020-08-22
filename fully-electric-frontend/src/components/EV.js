import React from 'react';

export default class EV extends React.Component {
    render() {
        return (
            <h1>EV - {this.props.match.params.id}</h1>
        )
    }
}
