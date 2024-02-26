import React, { useState } from 'react';
import { Link } from "react-router-dom";

import { LOGO, NAV_BUTTONS } from '../../config';

import './nav-button.scss'

const NavButtonMobile = ({path, title, options}) => {
    const [dropDownVisible, setDropDownVisible] = useState(false)

    const toggleDropDown = () => {
        setDropDownVisible(!dropDownVisible)
    }

    // Home button gets its own render template
    if (title === 'Home') {
        return  <Link className="home-link" to="/">
            <img className='logo' alt={LOGO.alt} src={LOGO.src} />
            <p>
                La Taza
            </p>
        </Link>
    } else {
        return <>{
            options
            // If There are options render a link with a dropdown of options
            ? 
            <div className='nav-button-wrapper' onClick={toggleDropDown} >
                <Link className='link' to={path}>{title}</Link>
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
            : 
            <div className='nav-button-wrapper' >
                <Link className='link' to={path}>{title}</Link>
            </div>
        }</>
    }
}

export default NavButtonMobile
