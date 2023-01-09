import './icon-bar.styles.scss'
import { 
    VscCallOutgoing, 
    VscMail, 
    VscGithub,
    VscMenu
} from 'react-icons/vsc';
import { 
    SiLinkedin, 
    SiPolywork 
} from 'react-icons/si';

const IconBar = () => {
    return (
            <div className='iconbar'>
                <a href="tel:3058909834" target="_blank" rel="noreferrer">
                    <span><VscCallOutgoing /></span>
                </a>
                <a href="mailto:katya@btsbusiness.com?subject=Portfolio%20Contact&body=Write%20your%20message%20here%20%3A)" target="_blank" rel="noreferrer">
                    <span><VscMail /></span>
                </a>
                <a href="https://github.com/Kitkatnik" target="_blank" rel="noreferrer">
                    <span><VscGithub /></span>
                </a>
                <a href="https://www.linkedin.com/in/katyasarmiento/" target="_blank" rel="noreferrer">
                    <span className="si"><SiLinkedin /></span>
                </a>
                <a href="https://www.polywork.com/kitkatnik" target="_blank" rel="noreferrer">
                    <span className="si"><SiPolywork /></span>
                </a>
                <a href="" target="_blank" rel="noreferrer" className="menu">
                    <span className="si"><VscMenu /></span>
                </a>
            </div>
    )
}

export default IconBar;