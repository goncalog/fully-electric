import React from 'react';

export default function ChangeImageButton(props) {
    return (
        <button className="change-image">{props.type === 'next' ? '>' : '<'}</button>
    );
}
