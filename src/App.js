import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
// import { base64 } from 'base-64';

import { storeRepos } from './utils/github/github.utils';
import { getRepos } from './utils/firebase/firebase.utils'; 
import { inject } from '@vercel/analytics';

import './App.scss'

import BrowserWindow from './components/browser-window/browser-window.component';
import IconBar from './components/icon-bar/icon-bar.component';
import Explorer from './components/explorer/explorer.component';
import StatusBar from './components/status-bar/status-bar.component';

import Home from './routes/home/home.component';
import Projects from './routes/projects/projects.component';
import Resume from './routes/resume/resume.component';
import Stats from './routes/stats/stats.component';

function App() {
  // VERCEL ANALYTICS
  inject();

// GITHUB REPOS
  const [repos, setRepos] = useState([]);

  useEffect( () => {
    const readRepos = () => getRepos().then(setRepos);
    readRepos();
    // console.log(repos);
  }, [])

  useEffect( () => {
    storeRepos();
  }, [])

  return (
    <div className="browser">
      <BrowserWindow />
      <div className="app">
        <IconBar />
        <Explorer repos={repos} />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='projects/*' element={<Projects repos={repos} />} />
          <Route path='resume' element={<Resume />} />
          <Route path='stats' element={<Stats />} />
        </Routes>
      </div>
      <StatusBar />
    </div>
  );
}

export default App;
