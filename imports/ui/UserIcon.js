import React from 'react';
import '../stylesheets/main.scss';

const sizeToClass = {
    "LARGE": 'lg-icon',
    "MEDIUM": "md-icon",
    "SMALL": "sm-icon"
}

const UserIcon = ({user, size}) => (
    <div className={`userIcon ${sizeToClass[size]}`}>
        <img src={user.imgUrl} />
    </div>
)

export default UserIcon;