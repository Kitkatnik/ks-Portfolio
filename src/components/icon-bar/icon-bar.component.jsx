import { useState, Fragment } from 'react';
import { NavLink } from 'react-router-dom';
import MediaQuery from 'react-responsive';

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
    const codes = {
        forwardSlash: 47,
    }
    const charCode = (code) => { return String.fromCharCode(code) }

    const [popup, setPopup] = useState(false);

    const onClickHandler = () => setPopup(!popup);

    const onLinkChangeHandler = () => setPopup(!popup);;

    return (
            <>
                <div className='iconbar'>
                    <a href="tel:3058909834" target="_blank" rel="noreferrer" className="icon-button">
                        <span><VscCallOutgoing /></span>
                    </a>
                    <a href="mailto:katya@btsbusiness.com?subject=Portfolio%20Contact&body=Write%20your%20message%20here%20%3A)" target="_blank" rel="noreferrer" className="icon-button">
                        <span><VscMail /></span>
                    </a>
                    <a href="https://github.com/Kitkatnik" target="_blank" rel="noreferrer" className="icon-button">
                        <span><VscGithub /></span>
                    </a>
                    <a href="https://www.linkedin.com/in/katyasarmiento/" target="_blank" rel="noreferrer" className="icon-button">
                        <span className="si"><SiLinkedin /></span>
                    </a>
                    <a href="https://www.polywork.com/kitkatnik" target="_blank" rel="noreferrer" className="icon-button">
                        <span className="si"><SiPolywork /></span>
                    </a>
                    <a onClick={onClickHandler} className="icon-button menu">
                        <span><VscMenu /></span>
                    </a>
                </div>
                <MediaQuery maxWidth={768}>
                    <div className="icon-bar-navigation">
                        <div className={popup ? 'show-menu' : 'hide-menu'}>
                            <NavLink to="/"> 
                                {({ isActive }) => (
                                    <button className={isActive ? 'linkActive' : undefined} onClick={onLinkChangeHandler}>
                                        {`${charCode(codes.forwardSlash)}* HOME *${charCode(codes.forwardSlash)}`}
                                    </button>
                                )}
                            </NavLink> 
                            {/* <NavLink to="/resume">
                                {({ isActive }) => (
                                    <button className={isActive ? 'linkActive' : undefined} onClick={onLinkChangeHandler}>
                                        {`${charCode(codes.forwardSlash)}* RESUME *${charCode(codes.forwardSlash)}`}
                                    </button>
                                )}
                            </NavLink>
                            <NavLink to="/stats">
                                {({ isActive }) => (
                                    <button className={isActive ? 'linkActive' : undefined} onClick={onLinkChangeHandler}>
                                        {`${charCode(codes.forwardSlash)}* STATS *${charCode(codes.forwardSlash)}`}
                                    </button>
                                )}
                            </NavLink> */}
                            <NavLink to="/projects">
                            {({ isActive }) => (
                                    <button className={isActive ? 'linkActive' : undefined} onClick={onLinkChangeHandler}>
                                        {`${charCode(codes.forwardSlash)}* PROJECTS *${charCode(codes.forwardSlash)}`}
                                    </button>
                                )}
                            </NavLink>
                        </div>
                    </div>
                </MediaQuery>
            </>
    )
}

export default IconBar;