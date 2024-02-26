import React from "react";

import './list-section.scss'

const ListSection = ({ title, text}) => {
    
    return <div className="list-section">
        <div className={`list-wrapper`}>
            <h2>{title}</h2>
            <ul>
                { text.map((p, index) => <li key={`${title}-${index}`}>{p}</li>) }
            </ul>
        </div>
    </div>
}

export default ListSection
