import React from 'react';

export default function DropDown(props) {
    function handleButtonClick() {
        props.onClick(props.property);
    }

    return (
        <div className={props.property}>
            <button onClick={handleButtonClick}>{props.title}</button>
            <div className="dropdown-content">
                {props.options.map((item, key) => {
                    return (
                        <div key={key}>
                            <input type="checkbox" key={key} id={key} value={item._id}></input>
                            <label for={key}>{`${item.name ? item.name : item.city}`}</label>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
