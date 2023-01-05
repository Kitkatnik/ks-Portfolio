import './explorer.styles.scss'
import vscodepets from '../../assets/vscodepets.png';

import { 
    VscEllipsis,
    VscChevronRight,
    VscChevronDown,
    VscAccount, 
    VscFolderOpened, 
    VscFileCode, 
    VscBriefcase, 
    VscDashboard,
    VscCode
} from 'react-icons/vsc';

const Explorer = () => {
    return (
            <div className="explorer">
                <div className="header">
                    <p>EXPLORER</p>
                    <span><VscEllipsis /></span>
                </div>
                <div className="files">
                    <div className="top">
                        <div className="divider">
                            <span><VscChevronRight /></span>
                            <p>OPEN EDITORS</p>
                        </div>
                        <div className="divider shadow">
                            <span><VscChevronDown /></span>
                            <p>PORTFOLIO (WORKSPACE)</p>
                        </div>
                        <div className="links">
                            <div className="folder">
                                <span><VscAccount /></span>
                                <p>About</p>
                            </div>
                            <div className="folder">
                                <span><VscBriefcase /></span>
                                <p>Resume</p>
                            </div>
                            {/* <div className="folder">
                                <span><VscDashboard /></span>
                                <p>Stats</p>
                            </div> */}
                            <div className="folder">
                                <span><VscFolderOpened /></span>
                                <p>Projects</p>
                            </div>
                            <div className="projects">
                                <div className="folder">
                                    <span><VscCode /></span>
                                    <p>Links here</p>
                                </div>
                                <div className="folder">
                                    <span><VscCode /></span>
                                    <p>Links here</p>
                                </div>
                                <div className="folder">
                                    <span><VscCode /></span>
                                    <p>Links here</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="bottom">
                        <div className="divider">
                            <span><VscChevronRight /></span>
                            <p>OUTLINE</p>
                        </div>
                        <div className="divider">
                            <span><VscChevronRight /></span>
                            <p>TIMELINE</p>
                        </div>
                        <div className="divider">
                            <span><VscChevronRight /></span>
                            <p>NPM SCRIPTS</p>
                        </div>
                        <div className="divider">
                            <span><VscChevronDown /></span>
                            <p>VS CODE PETS</p>
                        </div>
                        <div>
                            <img src={vscodepets} />
                        </div>
                    </div>
                </div>
            </div>
    )
}

export default Explorer;