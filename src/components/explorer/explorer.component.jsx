import './explorer.styles.scss'

import { 
    VscEllipsis,
    VscChevronDown,
    VscAccount, 
    VscFolder, 
    VscFolderOpened, 
    VscFileCode, 
    VscSymbolFile, 
    VscFile,
    VscNewFile, 
    VscBriefcase, 
    VscBookmark, 
    VscCode,
    VscDashboard,
    VscCopy,
    VscHistory,
    VscMilestone,
    VscProject,
    VscPulse,
    VscPreview,
    VscMenu
} from 'react-icons/vsc';

const Explorer = () => {
    return (
            <div className="explorer">
                <div className="explorer-header">
                    <p>EXPLORER</p>
                    <span><VscEllipsis /></span>
                </div>
                <div className="explorer-divider">
                    <span>
                        <VscChevronDown />
                    </span>
                    <p>PORTFOLIO (WORKSPACE)</p>
                </div>
                <div className="explorer-links">
                    <div className="folder">
                        <span className="about"><VscAccount /></span>
                        <p>About</p>
                    </div>
                    <div className="folder">
                        <span className="about"><VscFolder /></span>
                        <p>Resume</p>
                    </div>
                    <div className="folder">
                        <span className="about"><VscFolder /></span>
                        <p>Stats</p>
                    </div>
                    <div className="folder">
                        <span className="about"><VscFolder /></span>
                        <p>Projects</p>
                    </div>
                </div>
            </div>
    )
}

export default Explorer;