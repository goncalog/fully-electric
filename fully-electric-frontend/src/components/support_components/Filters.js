import React from 'react';
import DropDown from '../support_components/DropDown';

export default function Filters(props) {
    function handleClick(property) {
        props.onClick(property);
    }

    function handleTextChange(property, type, text) {
        props.onTextChange(property, type, text);
    }
    
    return (
        <div className="filters">
            <DropDown 
                property={props.make.property}
                title={props.make.title}
                onClick={handleClick}
                // option={props.make} 
                options={props.make.makes}
                visibility={props.visibility.make}
            />
            <DropDown 
                property={props.model.property}
                title={props.model.title}
                onClick={handleClick}
                // option={props.model} 
                options={props.model.models}
                visibility={props.visibility.model}
            />
            <DropDown
                type="minMax" 
                property={props.price.property}
                title={props.price.title}
                onClick={handleClick}
                visibility={props.visibility.price}
                min={props.price.min}
                max={props.price.max}
                onTextChange={handleTextChange}
            />
        </div>
    );
}
