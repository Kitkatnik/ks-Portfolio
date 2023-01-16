import { Fragment } from 'react';
import { Routes, Route, Outlet } from 'react-router-dom';

import ProjectsOverview from '../../components/projects-overview/projects-overview.component';
import ProjectPage from '../../components/project-page/project-page.component';

const Projects = () => {

    return (
        <>
            <Routes>
                <Route index element={<ProjectsOverview />} />
                <Route path=":project" element={<ProjectPage />} />
            </Routes>
            <Outlet />
        </>
    )
}

export default Projects;