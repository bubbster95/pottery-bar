import React from "react";
import BackgroundImage from "../Background_Image/background-image";

import './hero_image.scss';

const HeroImage = ({title, subHead, url, callToAction, alt=title}) => {
    return <div className='hero-container' >
        <div className='hero-wrapper'>
            <h1>{title}</h1>
            <h3>{subHead}</h3>
            {callToAction && 
                <a
                className='cta-button'
                href={callToAction[1]}>
                    {callToAction[0]}
                </a>
            }
        </div>
        <span className='hero-image overlay' />
        <BackgroundImage
            setClass='hero-image'
            src={url}
            alt={alt}/>
    </div>
};

export default HeroImage;
