import './App.scss'

// import { requestRepos } from './utils/github/github.utils';
import { inject } from '@vercel/analytics';

import BrowserWindow from './components/browser-window/browser-window.component';
import IconBar from './components/icon-bar/icon-bar.component';
import Explorer from './components/explorer/explorer.component';
import Home from './routes/home/home.component';
import StatusBar from './components/status-bar/status-bar.component';

function App() {
  inject();

  // const reposList = requestRepos()
  //   .then( response => response.json())
  //   .then( data => data)

  return (
    <div className="browser">
      <BrowserWindow />
      <div className="app">
        <IconBar />
        <Explorer />
        <Home />
      </div>
      <StatusBar />
    </div>
  );
}

export default App;
