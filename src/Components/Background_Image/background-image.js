import React, { useEffect, useState } from "react";
import { getImageFromStore } from "../../firebase";

import './background_image.scss';

const BackgroundImage = ({ src, alt, setClass = 'background-image' }) => {

    // Sets default image while loading
    const [url, setUrl] = useState('');

    useEffect(() => {
        // Gets url from firbase then sets state with is
        const getUrl = async () => {
            // If this image is embedded in code pull from assets folder
            if (src.match(/(assets)/gm)) {
                setUrl(src);
            } else { // Else pull from firebase storage bucket
                const data = await getImageFromStore(`/${src}`);
                setUrl(data);
            };
        };

        getUrl();
    }, [src]);
    
    return  <div
        className={setClass}
        style={{ backgroundImage: `url(${url})` }}
        alt={alt}
    />
}

export default BackgroundImage;