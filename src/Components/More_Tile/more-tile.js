import React from "react";
import { useNavigate } from "react-router-dom";

import './more-tile.scss'

// Renders all of the information in each info object
const MoreTile = ({ info, index }) => {
    const page = (index === 0) ? 'news' : (index === 1) ? 'blog' : 'problemots'
    const goToPage = useNavigate()
    return <div
        className="more-tile-wrapper"
        key={info.id}
        style={{ backgroundImage: `url(${info.hero_image})`}}
        onClick={() => goToPage(`/${page}?id=${info.id}`)}
        >
        <div className="more-tile-text">
            <h2>{info.hero_header && info.hero_header.toUpperCase()}</h2>
            <h4>{info.hero_sub && info.hero_sub}</h4>
        </div>
        <div className="more-tile-overlay"></div>
    </div>
};

export default MoreTile;