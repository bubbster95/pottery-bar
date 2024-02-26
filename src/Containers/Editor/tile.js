import React from "react";
import { unslugify } from "../../helpers";

import './editor.scss'

// Renders all of the information in each info object
const Tile = ({
    info,
    setEditing,
    setTileBeingModified,
    updateTiles,
    cosmic,
    usersGym
}) => {
    const infoKeys = Object.keys(info)
    return <div className="tile-wrapper" key={info.id}>
        {infoKeys.map(key => {
            return (key === 'html' || key === 'hero_image')? 
                <div key={`${key}-${info[key].id}`}>
                    
                </div>
                : (key !== 'id') && <p key={`${key}-${info[key].id}`}>
                    <b>{unslugify(key)}:</b> {info[key]}
                </p>
        })}
        {(cosmic || info.gyms.includes(usersGym)) && <>
            <button
                className="edit-tile"
                onClick={() => {
                    setEditing(true)
                    setTileBeingModified(info)
                }}
            >Edit</button>
            <button className="delete-tile" onClick={()=>updateTiles(info, true)}>Delete</button>
        </>}
    </div>
};

export default Tile;