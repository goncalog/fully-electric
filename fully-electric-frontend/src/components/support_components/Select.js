import React from 'react';

export default class Select extends React.Component {
    constructor(props) {
        super(props);
        this.handleTextChange = this.handleTextChange.bind(this);
    }

    handleTextChange(e) {
        this.props.onTextChange(this.props.property, e.target.value);
    }

    render() {
        return (
            <div className={this.props.className}>
                <select 
                    onChange={this.handleTextChange} 
                    required
                >
                    <option value="" disabled selected hidden>{this.props.placeholder}</option>;
                    {this.props.options.map((item, key) => {
                        return <option key={key} value={item}>{item}</option>;
                    })}
                </select>
            </div>
        );
    }
}
