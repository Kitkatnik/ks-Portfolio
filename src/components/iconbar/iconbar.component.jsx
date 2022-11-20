import './iconbar.styles.scss'
import { IconContext } from 'react-icons';
import { AiOutlineMail } from 'react-icons/ai';


const IconBar = () => {
    return (
            <div className='iconBar'>
                <span className="iconbar-icons">
                    <AiOutlineMail />
                </span>
            </div>
    )
}

export default IconBar;