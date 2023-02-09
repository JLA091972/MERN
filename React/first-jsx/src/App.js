import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hello Dojo!!
        </p>

        <p>Things I need to do:</p>

        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
         * Learn React
        </a>
        <p>* Climb Mt. Everest </p>
        <p>* Run a 10k marathon </p>
        <p>* Feed the Dogs</p>
        <p>* Enjoy Dinner</p>
        
      </header>
    </div>
  );
}

export default App;

