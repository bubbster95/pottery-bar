import React from 'react';

import './social-icon.scss'

const SocialIcon = ({path, title}) => {

    const handleClick = (e, path) => {
        if (e.target.id === 'phone') {
            window.open(`tel:${path}`)
        } else if (e.target.id === 'email') {
            window.open(`mailto:${path}`)
        } else {
            window.open(path, '_blank')
        }
    }

    return <div
        className="icon"
        id={title}
        onClick={(e) => handleClick(e, path)}
        style={{backgroundImage: `url(assets/social-icons/${title}.png)`}}
    ></div>
}

export default SocialIcon;
