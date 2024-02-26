import React from 'react';
import { useState } from 'react';
import { useSwipeable } from 'react-swipeable';

import './carousel.scss';

const Carousel = ({ children }) => {
    const [activeIndex, setActiveIndex] = useState(0);

    // Sets index, if index is already 0 it wraps around to the end and vice versa
    const updateIndex = (newIndex) => {
        if (newIndex < 0) {
            newIndex = React.Children.count(children) - 1;
        } else if (newIndex >= React.Children.count(children)) {
            newIndex = 0
        }

        setActiveIndex(newIndex);
    }

    // Swipe handlers
    const handlers = useSwipeable({
        onSwipedLeft: () => updateIndex(activeIndex+1),
        onSwipedRight: () => updateIndex(activeIndex-1)
    })

    return (
        <div {...handlers} className='carousel'>
            {/* 
            Acts as a camera that provides a view of the larger div containing all images inline.
            Upon scrolling or clicking it translates left and right.
             */}
            <div className='inner-carousel' style={{ transform: `translateX(-${activeIndex * 100}%)` }}>
                {React.Children.map(children, (child, index) => {
                    return React.cloneElement(child, { width: "100%"});
                })}
            </div>
            <div className='carousel-arrows'>
                <button className='carousel-left-arrow'
                    onClick={ () => { updateIndex(activeIndex - 1) }}
                >
                    {'<'}
                </button>
                <div className='carousel-dots'>
                {/* Creates a new circle button for each image and its index */}
                {React.Children.map(children, (child, index) => {
                    return (
                        <button 
                            className={`${index === activeIndex ? "carousel-dot active-dot": "carousel-dot"}`}
                            onClick={() => { updateIndex(index) }}
                        />
                    )
                })}
                </div>
                <button className='carousel-right-arrow'
                    onClick={() => {
                        updateIndex(activeIndex + 1)
                    }}
                >
                    {'>'}
                </button>
            </div>
        </div>
    )
}

export default Carousel