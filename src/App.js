import './App.css';
import { requestRepos } from './utils/github/github.utils';

function App() {
  const reposList = requestRepos()
    .then( response => response.json())
    .then( data => data)

  return (
    <>
      <h1>Something</h1>
      { 
        console.log(reposList) 
      }
    </>
  );
}

export default App;
