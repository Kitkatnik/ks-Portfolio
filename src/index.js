import React from 'react';
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  createRoutesFromElements,
} from "react-router-dom";

import { ReposProvider } from './contexts/repos.context';

import './index.css';

import App from './App';
import Home from './routes/home/home.component';
import Projects from './routes/projects/projects.component';
import Resume from './routes/resume/resume.component';
import Stats from './routes/stats/stats.component';
import ProjectsOverview from './components/projects-overview/projects-overview.component';
import ProjectPage from './components/project-page/project-page.component';
import NotFound from './routes/not-found/not-found.component';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />}>
      <Route index element={<Home />} />
      <Route path='projects' element={<Projects />} >
        <Route index element={<ProjectsOverview />} />
        <Route path=":project" element={<ProjectPage />} />
      </Route>
      <Route path='resume' element={<Resume />} />
      <Route path='stats' element={<Stats />} />
      <Route path="*" element={<NotFound />} /> 
    </Route>
  )
)

const root = createRoot(document.getElementById('root'));
root.render(
  <ReposProvider>
    <RouterProvider router={router}>
      <App />
    </RouterProvider>
  </ReposProvider>
);
