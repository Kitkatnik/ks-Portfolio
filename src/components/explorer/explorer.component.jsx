import { NavLink } from 'react-router-dom';

import { useContext } from 'react';
import { ReposContext } from '../../contexts/repos.context';

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
    const { repos } = useContext(ReposContext);
// console.log(repos)
    return (
            <div className="explorer">
                <div className="header">
                    <p>EXPLORER</p>
                    <span><VscEllipsis /></span>
                </div>
                <div className="files">
                    <div className="top">
                        <div className="divider shadow">
                            <span><VscChevronDown /></span>
                            <p>PORTFOLIO (WORKSPACE)</p>
                        </div>
                        <SimpleBar className="links">
                            <NavLink to='/'>
                                { ({ isActive }) => (
                                    <div className={isActive ? 'folder home linkActive' : 'folder home'}>
                                        <span className="purple"><VscAccount /></span>
                                        <p>Home</p>
                                    </div>
                                )}
                            </NavLink>
                            {/* <NavLink to='resume'>
                                {({ isActive }) => (
                                    <div className={isActive ? 'folder linkActive' : 'folder'}>
                                        <span className="yellow"><VscBriefcase /></span>
                                        <p>Resume</p>
                                    </div>
                                )}
                            </NavLink>
                            <NavLink to='stats'>
                                {({ isActive }) => (
                                    <div className={isActive ? 'folder stats linkActive' : 'folder stats'}>
                                        <span className="stats red"><VscPulse /></span>
                                        <p>Stats</p>
                                    </div>
                                )}
                            </NavLink> */}
                            <NavLink end to='projects'>
                                {({ isActive }) => (
                                    <div className={isActive ? 'folder linkActive' : 'folder'}>
                                        <span className="green"><VscFolderOpened /></span>
                                        <p>Projects</p>
                                    </div>
                                )}
                            </NavLink>
                            <div className="projects">
                                {repos.map( repo => {
                                    const formatName = repo.name.replace('ks-','').replace('wip-','').replaceAll('-', ' ');
                                    return(
                                        <NavLink to={`projects/${repo.name}`} state={repo}>
                                        {({ isActive }) => (
                                            <div className={isActive ? 'folder linkActive' : 'folder'} key={repo.id}>
                                                <span className='blue'><VscCode /></span>
                                                <p>{formatName}</p>
                                            </div>
                                        )}
                                    </NavLink>
                                    )
                                })}
                            </div>
                        </SimpleBar>
                    </div>
                    <div className="bottom">
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