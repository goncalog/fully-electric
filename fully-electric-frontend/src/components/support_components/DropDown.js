import React from 'react';

export default function DropDown(props) {
    function handleButtonClick() {
        props.onClick(props.property);
    }

    return (
        <div className={`dropdown ${props.property}`}>
            <button className="dropdown-button" onClick={handleButtonClick}>{`${props.title} ▾`}</button>
            <div className={props.visibility ? "dropdown-content show" : "dropdown-content"}>
                {props.options.map((item, key) => {
                    return (
                        <div key={key}>                            
                            <label for={key}>
                                <input type="checkbox" key={key} id={key} value={item._id}></input>
                                {`${item.name ? item.name : item.city}`}
                            </label>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
