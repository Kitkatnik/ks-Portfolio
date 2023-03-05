import { useContext } from 'react';
import { ReposContext } from '../../contexts/repos.context';

import ProjectPreview from '../../components/project-preview/project-preview.component';

import './projects-overview.styles.scss';

const ProjectsOverview = () => {
    const { repos } = useContext(ReposContext);

    return(
    
        <div className='nested'>
            {
                repos.slice(0).reverse().map( (repo, index) => {
                    return (
                        <div className='project-preview-container' key={repo.id}>
                            <ProjectPreview repo={repo} index={index} />
                        </div>
                    )

                })
            }
        </div>
    )
}

export default ProjectsOverview;