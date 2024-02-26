import React, { useState, useEffect }  from "react";

import GenericForm from "../Generic_Form/generic-form";
import Tile from "./tile";

import './editor.scss'

import { oldGyms } from "../../config";
let config = oldGyms

/* The Editor builds and displays information on the back end
    Users can populate the website with these editors */
const Editor = ({ usersGym, cosmic = false, formConfig }) => {
    const [isOpen, setIsOpen] = useState(false)
    const [editing, setEditing] = useState(false);
    const [relevantTiles, setRelevantTiles] = useState([]);
    const [oldTiles, setOldTiles] = useState([]);
    const [tileBeingModified, setTileBeingModified] = useState({});

    useEffect(() => {
        if (config) {
            // Relevent tiles ? display them
            if (config.relevant?.length > 0) setRelevantTiles(config.relevant);
            // Old tiles ? display them
            if (config.old?.length > 0) setOldTiles(config.old);
        }

        // If Admin is cosmic tier add higher level functions
        if (cosmic) {
            formConfig.fields.unshift({
                type: 'text',
                required: true,
                label: "Gyms",
                key: "gyms"
            });
        } 
    }, [cosmic, formConfig]);

    // Update Tiles in the UI & DB
    const updateTiles = (info, deleteTile=false) => {
        // If User is admin set gym to default
        if (!cosmic) info.gyms = usersGym
        // Remove info from oldTiles
        const moveToOld = oldTiles.filter(oldTile => oldTile !== info);
        // Remove Info from relevantTiles
        let keepTiles = relevantTiles.filter(tile => {
            // If we are deleting this tile move it to old
            if (deleteTile && tile === info) moveToOld.push(tile);
            return tile !== info;
        })
        // Add new tile info unless it is being deleted
        if (!deleteTile) keepTiles.push(info);
        // Set UI and Update DB
        setRelevantTiles(keepTiles);
        setOldTiles(moveToOld);
        // return updateRsDocs(keepTiles, moveToOld, formConfig.component);
        return null
    }

    // If editing not false show form
    if (editing !== false) {
        return <GenericForm
            callBack={updateTiles}
            formConstructor={formConfig}
            existingValues={(editing) ? tileBeingModified : {}} // This value fills in default values
            closeForm={() => setEditing(false)}
        />;
    } else { // Display banner editor UI
        return <div className="editor">
            <h2
                className={isOpen? 'active-editor-header' : 'inactive-editor-header'}
                onClick={() => setIsOpen(!isOpen)}
            >
                {formConfig.label}
            </h2>
            <div className={isOpen? 'active-editor-container' : 'inactive-editor-container'}>
                <button className="add-tile" onClick={() => setEditing(null)}>Add New</button>

                {/* Render a Tile Set for relevant and old tiles */}
                {[relevantTiles, oldTiles].map((tileSet, index) => (
                    <div key={`${formConfig.component}-tile-set-${index}`} className="tile-set">
                        {(tileSet.length > 0) && <h2>{index === 0 ? 'Relevant' : "Old"}</h2>}
                        <div className="tile-container">
                            {/* Loop through tile set and render tile */}
                            {tileSet.map(info => {
                                return <Tile
                                    key={`${info.id}-key`}
                                    info={info}
                                    setEditing={setEditing}
                                    setTileBeingModified={setTileBeingModified}
                                    updateTiles={updateTiles}
                                    cosmic={cosmic}
                                />
                            })}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    };
};
export default Editor;
