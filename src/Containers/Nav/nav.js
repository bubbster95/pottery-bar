import React, { useEffect, useState } from 'react';
// import { useAuth } from '../../Contexts/AuthContexts';

import NavButton from '../../Components/Nav-Button/nav-button';
import NavButtonMobile from '../../Components/Nav_Button_Mobile/nav-button-mobile';
import { NAV_BUTTONS } from '../../config';

import './nav.scss'


const Nav = () => {
    // const { currentUser } = useAuth()
    const [openNav, setOpenNav] = useState(false)
    const [navButtons, setNavButtons] = useState(NAV_BUTTONS)

    useEffect(() => {
        let tempNavButtons = NAV_BUTTONS;
        // const programLinks = GYMS[GYM].programs

        // Add Programs Buttons To Nav object in config
        // tempNavButtons.programs.options = {
        //     classes: {
        //         path: programLinks.classes,
        //         title: 'Classes'
        //     },
        //     groups: {
        //         path: programLinks.groups,
        //         title: 'Groups'
        //     },
        //     instruction: {
        //         path: programLinks.instruction,
        //         title: 'Instruction'
        //     },
        //     guiding: {
        //         path: programLinks.guiding,
        //         title: 'Guiding'
        //     }
        // }

        setNavButtons(tempNavButtons)
    
    }, [ ])

    const toggleAccordian = () => {
        setOpenNav(!openNav)
    }

    return <div className="nav-container">
        <div className={openNav ? 'hamburger cross' : "hamburger bars"} onClick={toggleAccordian}>
            <div className={openNav ? `top bar cross-top` : `top bar`}></div>
            <div className={openNav ? 'middle bar cross-middle' :`middle bar`}></div>
            <div className={openNav ? 'bottom bar cross-bottom' : `bottom bar`}></div>
        </div>
            {openNav ?
            // Only Renders When the mobile menu is open
            <>
            <nav className='nav' >
                {
                Object.keys(navButtons).map(button => <NavButtonMobile
                        key={button}
                        options={navButtons[button].options ? navButtons[button].options : false}
                        title={navButtons[button].title}
                        path={navButtons[button].path}
                    />)
                }
            </nav>

            <span className="close-hamburger close-hamburger-visible" onClick={toggleAccordian}></span>
            </>
            // Renders 
            : <nav className="nav closed">
                {
                Object.keys(navButtons).map(button => <NavButton
                        key={button}
                        options={navButtons[button].options ? navButtons[button].options : false}
                        title={navButtons[button].title}
                        path={navButtons[button].path}
                    />)
                }
                {/* Render Account Button or Profile Button */}
                {/* {currentUser ? 
                    <NavButton
                        options={false}
                        title={'Profile'}
                        path={'/profile'}
                    />
                    : <NavButton
                        options={false}
                        title={'Account'}
                        path={'/account'}
                    />
                } */}
            </nav>
            }
    </div>
}


export default Nav;
