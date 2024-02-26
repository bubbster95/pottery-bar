import React from "react";
import HeroImage from "../../Components/Hero-Image/hero_image";

import './programs.scss'

const Programs = () => {

    return <>
        <HeroImage
            title={`Programs For Everyone`}
            subHead={ "Fun For All Ages, All Abilities."}
            url={'RS/hero/programs.jpeg'}
            callToAction={['Fill Out A Waiver', '/waiver']}
        />
        
        <div className="page-content">
        
            
            
        </div>
</>
}

export default Programs




/*
*********************
* Old Programs Page *
*********************
*/

// {categoryKeys.map(categoryKey => {
//     const programKeys = Object.keys(GYMS[GYM].programs[categoryKey])
    
//     return <div key={categoryKey} className='category-container'>
//         <h2 className="titleCaps">{unslugify(categoryKey)}</h2>
//         <div className="program-container">
//             { programKeys.map(programKey => {
//                 return <ProgramTile key={`${programKey}-tile`} categoryKey={categoryKey} programKey={programKey}/>
//             })}
//         </div>
//     </div>
// })}