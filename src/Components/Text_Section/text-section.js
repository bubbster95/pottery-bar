import React from "react";

// import BackgroundImage from "../../Components/Background_Image/background-image";
// import Gallery from "../../Containers/Gallery/gallery";

import './text-section.scss'

const TextSection = ({ title, text, image=false, gallery=false, layout='center'}) => {
    
    return <div className="text-section">
        {layout === 'right'?
            <>
                <div className={`text-wrapper text-wrapper-${layout}`}>
                    <h2>{title}</h2>
                    { text.map((p, index) => <p key={`${title}-${index}`}>{p}</p>) }
                </div>
            </>
            :<>
                <div className={`text-wrapper  text-wrapper-${layout}`}>
                    <h2>{title}</h2>
                    { text.map((p, index) => <p key={`${title}-${index}`}>{p}</p>) }
                </div>
            </>
            }
    </div>
}

export default TextSection
