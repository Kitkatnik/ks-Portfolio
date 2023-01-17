import { useParams } from 'react-router-dom';
import { useContext } from 'react';
import { ReposContext } from '../../contexts/repos.context';

import './project-page.styles.scss';
import { VscLoading } from 'react-icons/vsc';

const ProjectPage = () => {
    const { repos } = useContext(ReposContext);
    const { project } = useParams();

    let content = null;
    const currRepo = repos.filter( repo => {
        return repo.name === project;
    })
    if(repos.length > 0){
        content = currRepo[0].contents_html;
    }

    return (
        <div className='nested'>
            {
                repos.length > 0
                ? <div className='projects-page-container' dangerouslySetInnerHTML={{ __html: content }} />
                : 'Loading your project...'
            }
            <br/>
        </div>
    )
}

export default ProjectPage;