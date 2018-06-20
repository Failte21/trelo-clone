import React from 'react';
import '../stylesheets/main.scss';

const sizeToClass = {
    "LARGE": 'lg-add-btn',
    "MEDIUM": "md-add-btn",
    "SMALL": "sm-add-btn"
}

const AddButton = ({addFn, size}) => (
    <button className={`add-btn ${sizeToClass[size]}`} onClick={addFn}>
        <i className={'fas fa-plus'} />
    </button>
)

export default AddButton;