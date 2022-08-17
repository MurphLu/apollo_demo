import logo from './logo.svg';
import './App.css';
import { useHello } from './hooks/useHello'

function App() {
  const { loading, data, error } = useHello();
  if(loading) return <div> loading... </div>
  if(error) return <div> error occured... </div>
  console.log(data)
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
