import React, { useState } from 'react';
import { Link } from "react-router-dom";

import { LOGO, NAV_BUTTONS } from '../../config';

import './nav-button.scss'

const NavButton = ({path, title, options}) => {
    const [dropDownVisible, setDropDownVisible] = useState(false)
    // When the mouse hovers over a link, set dropdown to visible
    const handleEnter = e => {
        let dropDown;
        if (e.target.className === 'nav-button-wrapper') {
            dropDown = e.target.lastChild;
        } else if (e.target.className === 'option') {
            dropDown = e.target.parentElement
        } else {
            dropDown = e.target.parentElement.lastChild
        }
        const left = e.target.offsetLeft 
        const width = e.target.offsetWidth
        dropDown.style.right = `${window.innerWidth-left-width}px`

        setDropDownVisible(true)
    }
    // When the mouse leaves set the dropdown to invisible.
    const handleLeave = () => {
        setDropDownVisible(false)
    }
    // Home button gets its own render template
    if (title === 'Home') {
        return  <Link className="home-link" to="/">
            <img className='logo' alt={LOGO.alt} src={LOGO.src} />
            <p>
                La Taza
                <br></br>
            </p>
        </Link>
    } else {
        return <>{
            options
            // If There are options render a link with a dropdown of options
            ? <div
                className='nav-button-wrapper'
                onMouseEnter={handleEnter}
                onMouseLeave={handleLeave}
            >
                <Link className='link' 
                to={path}>{title}</Link>

                <div className={dropDownVisible?"drop-down visible" : "drop-down hidden"} id={"dropdown-"+title}>
                    {
                        Object.keys(options).map(option =>{
                            const optionPath = NAV_BUTTONS[title.toLowerCase()].options[option].path;
                            const optionTitle = NAV_BUTTONS[title.toLowerCase()].options[option].title;
                            if (/(http(s?)):\/\//i.test(optionPath)) {
                                return <a
                                    key={option+'-option'}
                                    className='option'
                                    href={optionPath}
                                    rel="noopener noreferrer"
                                    target={"_blank"}
                                >{optionTitle}</a>
                            } else {
                                return <Link
                                    key={option+'-option'}
                                    className='option'
                                    to={optionPath}
                                > {optionTitle} </Link>
                            }
                        }
                    )}
                </div>
            </div>
            // Else render just the link with no open handler
            : <div className='nav-button-wrapper'>
                 <Link className='link' to={path}>{title}</Link>
            </div>
        }</>
    }
}

export default NavButton
