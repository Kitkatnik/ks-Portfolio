import './browser-window.styles.scss';

import { 
    VscCircleFilled,
    VscSearch,
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
                Portfolio.jsx — katya-sarmiento
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