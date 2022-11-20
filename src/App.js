import './App.css'

// import { requestRepos } from './utils/github/github.utils';

import IconBar from './components/iconbar/iconbar.component';
import Explorer from './components/explorer/explorer.component';


function App() {
  // const reposList = requestRepos()
  //   .then( response => response.json())
  //   .then( data => data)

  return (
    <div className="app">
      <IconBar />
      <Explorer />
      <h1>Something</h1>
    </div>
  );
}

export default App;
