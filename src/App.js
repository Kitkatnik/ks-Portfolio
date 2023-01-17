import { Outlet } from 'react-router-dom';

import { inject } from '@vercel/analytics';

import './App.scss'

import BrowserWindow from './components/browser-window/browser-window.component';
import IconBar from './components/icon-bar/icon-bar.component';
import Explorer from './components/explorer/explorer.component';
import StatusBar from './components/status-bar/status-bar.component';

function App() {
  // VERCEL ANALYTICS
  inject();

  return (
    <div className="browser">
      <BrowserWindow />
      <div className="app">
        <IconBar />
        <Explorer />
        <Outlet />
      </div>
      <StatusBar />
    </div>
  );
}

export default App;
