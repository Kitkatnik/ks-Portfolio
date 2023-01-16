import { useParams } from 'react-router-dom';

import './project-page.styles.scss';

const ProjectPage = ({ repos }) => {
    const { project } = useParams();
    console.log(project)
    console.log(repos)
    const currRepo = repos.filter( repo => {
        return repo.name === project;
    })
    const { contents_html } = currRepo[0];

    return (
        <div className='projects-page-container' dangerouslySetInnerHTML={{ __html: contents_html }} />
    )
}

export default ProjectPage;