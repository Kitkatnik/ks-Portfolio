import { Outlet } from 'react-router-dom';

import SimpleBar from 'simplebar-react';
import 'simplebar/dist/simplebar.min.css';

const Projects = () => {
        const codes = {
            leftBrace: 123,
            rightBrace: 125,
            greaterThan: 62,
            lessThan: 60,
            forwardSlash: 47,
            leftBracket: 91,
            rightBracket: 93,
        }
    
        const charCode = (code) => { return String.fromCharCode(code) }
    
        return (
            <SimpleBar className="project-container">
                <p>
                    <span className="code">
                        const
                    </span> <span className="identifier">
                        Projects
                    </span> = (<span className="variable">
                        github_repos
                    </span>) ={charCode(codes.greaterThan)} {charCode(codes.leftBrace)}
                </p>
                <br/>
                {/* start */}
                <div className='nested'>
                    <p>
                        <span className="code">return (</span>
                    </p>
                    <br/>
                    <Outlet />
                    <p>
                    <span className="code">)</span>
                </p><br/>

            </div>
            {/* end */}
            <p>{charCode(codes.rightBrace)}</p>
            <br/>
            <p>
                <span className="code">export default</span> <span className="identifier">Projects;</span>
            </p>
        </SimpleBar>
    )
}

export default Projects;