import { Routes, Route } from 'react-router-dom';

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

  return (
    <div className="browser">
      <BrowserWindow />
      <div className="app">
        <IconBar />
        <Explorer />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='projects/*' element={<Projects />} />
          <Route path='resume' element={<Resume />} />
          <Route path='stats' element={<Stats />} />
        </Routes>
      </div>
      <StatusBar />
    </div>
  );
}

export default App;
