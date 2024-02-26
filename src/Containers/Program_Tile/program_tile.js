import React, { useState } from "react";
import Modal from "../../Components/Modal/modal";
import { unslugify } from "../../helpers";
import { oldGyms } from "../../config";

let GYMS = oldGyms

/*
    This Component Renders the Proram tiles.
    Each tile has a hover state and when clicked opens a modal displaying any sub categories of a program.
*/
const ProgramTile = ({categoryKey, programKey}) => {
    const [active, setActive] = useState(false)

    const category = GYMS['RS'].programs[categoryKey];
    const program = category[programKey];
    const subProgamKeys = Object.keys(program);

    const navigate = (to) => { 
        window.open(to, '_parent');
    }

    return <>
        <div onClick={() => setActive(!active)} className='sub-program' style={{backgroundImage: `url(assets/programs-images/${programKey}.jpeg)`}}>
            <h2 className='titleCaps sub-program-header'>{unslugify(programKey)}</h2>
            <div className="sub-program-overlay"></div>
        </div>
        <Modal toggleModal={() => setActive(!active)} show={active}>
            <h2 className='titleCaps sub-program-header active'>{unslugify(programKey)}</h2>
            <div className={active?'sub-program-container visible-program':'sub-program-container hidden'}>
                {subProgamKeys.map(subProgram => {
                    const subProgramObj = program[subProgram];
                    const {title, dsc, age_range, contact, length, duration} = subProgramObj;
                    const link = GYMS[GYM].programs[categoryKey][programKey][subProgram]

                    return <div className={`program-tile`}key={subProgram}>
                        <h3> {title } </h3>
                        {age_range && <p><b>Age Range:</b> {age_range}</p>}
                        {length && <p><b>Legth:</b> {length}</p>}
                        {duration && <p><b>Duration:</b> {duration}</p>}
                        
                        <p>{dsc && dsc}</p>
                        {contact && <p><b>Please Contact:</b> {contact}</p>}
                        {link !== '' && <button className="learn-more" onClick={() => navigate(link)}>Learn More / Register</button>}
                    </div>
                })}
            </div>
        </Modal>
    </>
}

export default ProgramTile