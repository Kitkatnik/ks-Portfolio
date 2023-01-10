import './browser-window.styles.scss';

import { 
    VscCircleFilled,
    VscAccount, 
    VscFolderOpened, 
    VscBriefcase, 
    VscPulse,
} from 'react-icons/vsc';
import {
    RiLayoutLeftLine,
    RiLayoutBottomLine,
    RiLayoutRightLine,
    RiLayout2Line
} from 'react-icons/ri';

const BrowserWindow = () => {
    return (
        <div className="browser-window">
            <div className="browser-options">
                <span className="close-button"><VscCircleFilled /></span>
                <span className="minimize-button"><VscCircleFilled /></span>
                <span className="maximize-button"><VscCircleFilled /></span>
            </div>
            <div className="file-name">
                <a href="/">
                    {/* [NAME OF PAGE HERE].jsx —  */}
                    katya-sarmiento-portfolio</a>
            </div>
            <div className="file-name-menu">
                <a href="/">
                    <div className="browser-menu">
                        <span className="red"><VscAccount /></span>
                        <p>Home</p>
                    </div> 
                </a>
                {/* <a href="/">
                    <div className="browser-menu">
                        <span className="yellow"><VscBriefcase /></span>
                        <p>Resume</p>
                    </div>
                </a> */}
                {/* <a href="/">
                    <div className="browser-menu">
                        <span className="stats purple"><VscPulse /></span>
                        <p>Stats</p>
                    </div>
                </a> */}
                <a href="/">
                    <div className="browser-menu">
                        <span className="green"><VscFolderOpened /></span>
                        <p>Projects</p>
                    </div>
                </a>
            </div>
            <div className="panel-options">
                <span className="panel-icon"><RiLayoutLeftLine /></span>
                <span className="panel-icon"><RiLayoutBottomLine /></span>
                <span className="panel-icon"><RiLayoutRightLine /></span>
                <span className="panel-icon"><RiLayout2Line /></span>
            </div>

        </div>
    )
}

export default BrowserWindow;