
import logo from './logo.svg';
import './App.css';
import TodoList from'./Todo.js';
import Radio from './Radio';
import Clock from './Clock';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        
    <Clock/>
    <Radio/>
       
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
