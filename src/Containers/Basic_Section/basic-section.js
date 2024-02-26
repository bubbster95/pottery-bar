import React from "react";
import BackgroundImage from "../../Components/Background_Image/background-image";

import './basic-section.scss'

import { staticText, staticPhoto } from "../../config";


const BasicSection = ({page, section}) => {
    
    return <div className="section-container">
        <div className="section-text-container">
            <h3>{staticText[page][section].title}</h3>
            <p>{staticText[page][section].dsc}</p>
        </div>
        <div className="section-image-container">
            {staticPhoto && <BackgroundImage src={staticPhoto[page][section].src} alt={staticPhoto[page][section].alt} />}
        </div>
    </div>
}


export default BasicSection