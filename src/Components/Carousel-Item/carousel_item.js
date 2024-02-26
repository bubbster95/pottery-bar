import React from "react"

import './carousel_item.scss'

export const CarouselItem = ({ children, width}) => {
    /* 
    Holds all of the images passed to it in one wide div
    allows carousel to scroll across 
    */
    return (
        <div className="carousel-item" style={{width: width}}>
            {children}
        </div>
    )
}

export default CarouselItem