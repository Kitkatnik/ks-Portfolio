import { useParams, useLocation } from 'react-router-dom';

import './project-page.styles.scss';

const ProjectPage = () => {
    const { project } = useParams();
    const location = useLocation();

    const content = location.state.contents_html

    return (
        <div className='nested'>
            <div className='projects-page-container' dangerouslySetInnerHTML={{ __html: content }} />
            <br/>
        </div>
    )
}

export default ProjectPage;