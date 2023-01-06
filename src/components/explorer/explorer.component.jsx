import SimpleBar from 'simplebar-react';
import 'simplebar/dist/simplebar.min.css';

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
                        <a href="https://marketplace.visualstudio.com/items?itemName=alefragnani.project-manager" target="_blank" rel="noreferrer">
                            <div className="divider">
                                <span><VscChevronRight /></span>
                                <p>
                                    PROJECT MANAGER: FAVORITES 
                                    {/* (#) */}
                                </p>
                            </div>
                        </a>
                        <div className="divider shadow">
                            <span><VscChevronDown /></span>
                            <p>PORTFOLIO (WORKSPACE)</p>
                        </div>
                        <SimpleBar className="links">
                            <div className="folder home linkActive">
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
                        </SimpleBar>
                    </div>
                    <div className="bottom">
                        <a href="https://marketplace.visualstudio.com/items?itemName=UrosVujosevic.explorer-manager" target="_blank" rel="noreferrer">
                            <div className="divider">
                                <span><VscChevronRight /></span>
                                <p>BOOKMARKS: EXPLORER</p>
                            </div>
                        </a>
                        <a href="https://yarnpkg.com/" target="_blank" rel="noreferrer">
                            <div className="divider">
                                <span><VscChevronRight /></span>
                                <p>YARN</p>
                            </div>
                        </a>
                        <a href="https://marketplace.visualstudio.com/items?itemName=tonybaloney.vscode-pets" target="_blank" rel="noreferrer">
                            <div className="divider">
                                <span><VscChevronDown /></span>
                                <p>VS CODE PETS</p>
                            </div>
                        </a>
                        <a href="https://marketplace.visualstudio.com/items?itemName=tonybaloney.vscode-pets" target="_blank" rel="noreferrer">
                            <img src={vscodepets} alt="Screenshot of a VSCodePets cat climbing in a forest"/>
                        </a>
                    </div>
                </div>
            </div>
    )
}

export default Explorer;