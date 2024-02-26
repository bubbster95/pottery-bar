import React from 'react';
import BackgroundImage from '../Background_Image/background-image';

import './thumbnail.scss'

const Thumbnail = ({ alt, src, title, clickHandler }) => {

    const handleHover = (e) => {
        let thisImageText;
        if (e.target.className === 'thumbnail-image') {
            thisImageText = e.target.nextSibling
        } else if (e.target.className === 'thumbnail') {
            thisImageText = e.target.lastChild
        } else {
            thisImageText = e.target
        }

        thisImageText.classList = 'thumbnail-title thum-visible';
    }

    const handleMouseLeave = () => {
        const imageText = document.getElementsByClassName('thum-visible')
        
        Array.from(imageText).map(key =>  key.classList = 'thumbnail-title thumb-hidden')
    }

    return <div
        className='thumbnail'
        onMouseEnter={(e) => handleHover(e)}
        onMouseLeave={handleMouseLeave}
        onClick={() => clickHandler()}
    >
        <BackgroundImage
        alt={alt}
        src={src}
        setClass='thumbnail-image'
        />
        <div className="thumbnail-title thumb-hidden">{title}</div>
    </div>
  
}

export default Thumbnail