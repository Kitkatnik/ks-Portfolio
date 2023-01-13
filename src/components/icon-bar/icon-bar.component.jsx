import { useState, Fragment } from 'react';
import { NavLink } from 'react-router-dom';

import './icon-bar.styles.scss'
import { 
    VscCallOutgoing, 
    VscMail, 
    VscGithub,
    VscMenu
} from 'react-icons/vsc';
import { 
    SiLinkedin, 
    SiPolywork 
} from 'react-icons/si';

const IconBar = () => {

    const [popup, setPopup] = useState(false);

    const onClickHandler = () => setPopup(!popup);

    return (
            <>
                <div className='iconbar'>
                    <button href="tel:3058909834" target="_blank" rel="noreferrer" className="icon-button">
                        <span><VscCallOutgoing /></span>
                    </button>
                    <button href="mailto:katya@btsbusiness.com?subject=Portfolio%20Contact&body=Write%20your%20message%20here%20%3A)" target="_blank" rel="noreferrer" className="icon-button">
                        <span><VscMail /></span>
                    </button>
                    <button href="https://github.com/Kitkatnik" target="_blank" rel="noreferrer" className="icon-button">
                        <span><VscGithub /></span>
                    </button>
                    <button href="https://www.linkedin.com/in/katyasarmiento/" target="_blank" rel="noreferrer" className="icon-button">
                        <span className="si"><SiLinkedin /></span>
                    </button>
                    <button href="https://www.polywork.com/kitkatnik" target="_blank" rel="noreferrer" className="icon-button">
                        <span className="si"><SiPolywork /></span>
                    </button>
                    <button onClick={onClickHandler} className="icon-button menu">
                        <span><VscMenu /></span>
                    </button>
                </div>
                <div className="icon-bar-navigation">
                    <div className={popup ? 'show-menu' : 'hide-menu'}>
                        <NavLink to="/">
                            {({ isActive }) => (
                                <p className={isActive ? 'linkActive' : undefined}>
                                    /* HOME */
                                </p>
                            )}
                        </NavLink> 
                        <NavLink to="/resume">
                            {({ isActive }) => (
                                <p className={isActive ? 'linkActive' : undefined}>
                                    /* RESUME */
                                </p>
                            )}
                        </NavLink>
                        <NavLink to="/stats">
                            {({ isActive }) => (
                                <p className={isActive ? 'linkActive' : undefined}>
                                    /* STATS */
                                </p>
                            )}
                        </NavLink>
                        <NavLink to="/projects">
                        {({ isActive }) => (
                                <p className={isActive ? 'linkActive' : undefined}>
                                    /* PROJECTS */
                                </p>
                            )}
                        </NavLink>
                    </div>

                </div>
            </>
    )
}

export default IconBar;