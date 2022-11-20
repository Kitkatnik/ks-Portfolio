import './explorer.styles.scss'

import { 
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
                <div className="folder">
                    <span className="about"><VscAccount /></span>
                    <p>ABOUT</p>
                </div>
                <div className="folder">
                    <span className="about"><VscFolder /></span>
                    <p>RESUME</p>
                </div>
                <div className="folder">
                    <span className="about"><VscFolder /></span>
                    <p>STATS</p>
                </div>
                <div className="folder">
                    <span className="about"><VscFolder /></span>
                    <p>PROJECTS</p>
                </div>
            </div>
    )
}

export default Explorer;