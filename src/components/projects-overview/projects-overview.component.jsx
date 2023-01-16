import SimpleBar from 'simplebar-react';
import 'simplebar/dist/simplebar.min.css';

import ProjectPreview from '../../components/project-preview/project-preview.component';

import './projects-overview.styles.scss';

const ProjectsOverview = ({repos}) => {

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
                <div className='nested'>
                    {
                        repos.map( (repo, index) => {
                            return (
                                <div className='project-preview-container' key={repo.id}>
                                    <ProjectPreview repo={repo} index={index} />
                                </div>
                            )

                        })
                    }
                </div>
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

export default ProjectsOverview;