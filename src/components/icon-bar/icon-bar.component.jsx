import './icon-bar.styles.scss'
import { 
    VscCallOutgoing, 
    VscMail, 
    VscGithub,
} from 'react-icons/vsc';
import { 
    SiLinkedin, 
    SiPolywork 
} from 'react-icons/si';

const IconBar = () => {
    return (
            <div className='iconbar'>
                <span className="icons"><VscCallOutgoing /></span>
                <span className="icons"><VscMail /></span>
                <span className="icons"><VscGithub /></span>
                <span className="icons si"><SiLinkedin /></span>
                <span className="icons si"><SiPolywork /></span>
            </div>
    )
}

export default IconBar;