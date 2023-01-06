import './explorer.styles.scss'
import vscodepets from '../../assets/vscodepets.png';

import { 
    VscEllipsis,
    VscChevronRight,
    VscChevronDown,
    VscAccount, 
    VscFolderOpened, 
    VscBriefcase, 
    VscPulse,
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
                            <div className="folder home">
                                <span className="red"><VscAccount /></span>
                                <p>Home</p>
                            </div>
                            <div className="folder">
                                <span className="yellow"><VscBriefcase /></span>
                                <p>Resume</p>
                            </div>
                            <div className="folder stats">
                                <span className="stats purple"><VscPulse /></span>
                                <p>Stats</p>
                            </div>
                            <div className="folder">
                                <span className="green"><VscFolderOpened /></span>
                                <p>Projects</p>
                            </div>
                            <div className="projects">
                                <div className="folder">
                                    <span className="blue"><VscCode /></span>
                                    <p>Links here</p>
                                </div>
                                <div className="folder">
                                    <span className="blue"><VscCode /></span>
                                    <p>Links here</p>
                                </div>
                                <div className="folder">
                                    <span className="blue"><VscCode /></span>
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
                            <img src={vscodepets} alt="Screenshot of a VSCodePets cat climbing in a forest"/>
                        </div>
                    </div>
                </div>
            </div>
    )
}

export default Explorer;