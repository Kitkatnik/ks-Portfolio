import './explorer.styles.scss'

import { BsPerson } from 'react-icons/bs';

const Explorer = () => {
    return (
            <div className="explorer">
                <div className="folder">
                    <span className="about"><BsPerson /></span>
                    <p>ABOUT</p>
                </div>
            </div>
    )
}

export default Explorer;