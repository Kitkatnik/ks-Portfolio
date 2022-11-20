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
    VscBell
} from 'react-icons/vsc';

import { IoHeadsetSharp } from 'react-icons/io5';

const StatusBar = () => {
    const date = new Date();
    return (
        <div className='status-bar'>
            <div className="status-left">
                <span className="status"><VscRemote /></span>
                <span className="status"><VscWorkspaceTrusted /></span>
                <span className="status">
                    <VscSourceControl /> 
                    <span className="status-align"> main*</span>
                </span>
                <span className="status">
                    <a href="https://marketplace.visualstudio.com/items?itemName=softwaredotcom.music-time" target="_blank">
                        <IoHeadsetSharp />
                        <span className="status-align"> MusicTime </span>
                    </a>
                </span>
                <span className="status">
                    <a href="https://github.com/jest-community/vscode-jest#installation" target="_blank">
                        <span className="status-align">Jest-WS: </span>
                        <VscPass />
                        <span className="status-align space"> 0</span> 
                        <VscError />
                        <span className="status-align space"> 0</span> 
                        <VscQuestion /> 
                        <span className="status-align"> 0</span>
                    </a>
                </span>
                <span className="status ">
                    <span className="status-align">
                        <a href="https://marketplace.visualstudio.com/items?itemName=WallabyJs.quokka-vscode" target="_blank">Quokka</a>
                    </span>
                </span>
                <span className="status">
                    <span className="status-align">
                    <a href="https://marketplace.visualstudio.com/items?itemName=WallabyJs.wallaby-vscode" target="_blank">Wallaby</a>
                    </span>
                </span>
            </div>
            <div className="status-right">
                <span className="status">
                    <span className="status-align">
                        Ln {date.getMonth() + 1}, Col {date.getDate()}
                    </span>
                </span>
                <span className="status">
                    <span className="status-align">
                        Spaces: 4
                    </span>
                </span>
                <span className="status">
                    <a href="https://code.visualstudio.com/docs/nodejs/reactjs-tutorial" target="_blank">
                        <VscSymbolNamespace /> 
                        <span className="status-align space">
                            JavaScript React
                        </span>
                    </a>
                </span>
                <span className="status">
                    <a href="https://marketplace.visualstudio.com/items?itemName=softwaredotcom.swdc-vscode" target="_blank">
                        <VscRocket /> 
                        <span className="status-align space">
                            2h 37m
                        </span>
                    </a>
                </span>
                <span className="status">
                    <a href="https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode" target="_blank">
                        <VscCheckAll /> 
                        <span className="status-align space">
                            Prettier
                        </span>
                    </a>
                </span>
                <span className="status">
                    <VscFeedback />
                </span>
                <span className="status">
                    <VscBell />
                </span>
            </div>
        </div>
    )
}

export default StatusBar;