import { Routes, Route } from 'react-router-dom';

import ProjectsOverview from '../../components/projects-overview/projects-overview.component';
import ProjectPage from '../../components/project-page/project-page.component';

const Projects = ({ repos }) => {

    return (
        <Routes>
            <Route index element={<ProjectsOverview repos={repos} />} />
            <Route path=":project" element={<ProjectPage repos={repos} />} />
        </Routes>
    )
}

export default Projects;