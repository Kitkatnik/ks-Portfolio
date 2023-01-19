import './status-bar.styles.scss';

import { 
    VscRemote,
    VscWorkspaceTrusted,
    VscSourceControl,
    VscPass,
    VscError,
    VscQuestion,
    VscSymbolNamespace,
    VscRocket,
    VscCheckAll,
    VscFeedback,
    VscBell,
} from 'react-icons/vsc';

import { IoHeadsetSharp } from 'react-icons/io5';

const StatusBar = () => {
    const date = new Date();
    return (
        <div className='status-bar'>
            <div className="status-left">
                <div className="block">
                    <span><VscRemote /></span>
                </div>
                <div className="block">
                    <span><VscWorkspaceTrusted /></span>
                </div>
                <div className="block">
                    <a href="https://www.gitkraken.com/gitlens" target="_blank" rel="noreferrer" className="extension">
                        <span><VscSourceControl /></span>
                        <p>main*</p>
                    </a>
                </div>
                <div className="block">
                    <a href="https://marketplace.visualstudio.com/items?itemName=softwaredotcom.music-time" target="_blank" rel="noreferrer" className="extension">
                        <span><IoHeadsetSharp /></span>
                        <p>MusicTime </p>
                    </a>
                </div>
                <div className="block">
                    <a href="https://jestjs.io/" target="_blank" rel="noreferrer" className="extension">
                        <p>Jest-WS:</p>
                        <span><VscPass /></span>
                        <p className="status-align space">{date.getFullYear().toString().substring(0,2)}</p> 
                        <span><VscError /></span>
                        <p className="status-align space">{date.getFullYear().toString().substring(2)}</p>
                        <span><VscQuestion /> </span>
                        <p>0</p>
                    </a>
                </div>
                <div className="block">
                    <a href="https://marketplace.visualstudio.com/items?itemName=WallabyJs.quokka-vscode" target="_blank" rel="noreferrer" className="extension">
                        <p>Quokka</p>
                    </a>
                </div>
                <div className="block">
                    <a href="https://marketplace.visualstudio.com/items?itemName=WallabyJs.wallaby-vscode" target="_blank" rel="noreferrer" className="extension">
                        <p>Wallaby</p>
                    </a>
                </div>
            </div>
            <div className="status-right">
                <div className="block">
                    <a href="https://reactjs.org/" target="_blank" rel="noreferrer" className="extension">
                        <span><VscSymbolNamespace /></span>
                        <p>JavaScript React</p>
                    </a>
                </div>
                <div className="block">
                    <p className="extension">Ln {date.getMonth() + 1}, Col {date.getDate()}</p>
                </div>
                <div className="block">
                    <a href="https://marketplace.visualstudio.com/items?itemName=softwaredotcom.swdc-vscode" target="_blank" rel="noreferrer" className="extension">
                        <span><VscRocket /></span>
                        <p>{date.getHours()}h {date.getMinutes()}m</p>
                    </a>
                </div>
                <div className="block">
                    <a href="https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode" target="_blank" rel="noreferrer" className="extension">
                        <span><VscCheckAll /></span>
                        <p>Prettier</p>
                    </a>
                </div>
                <div className="block">
                    <span><VscFeedback /></span>
                </div>
                <div className="block">
                    <span><VscBell /></span>
                </div>
            </div>
        </div>
    )
}

export default StatusBar;