import logo from './logo.svg';
import './App.css';

function App() {
  const number = 555;
  return (
    <div className="App">
      <header className="App-header">
        <h1>Hellow React Mamma!!</h1>
        <p>Doira felse tomre koi jaba</p>
        <div className="container">
          <h3>This is inside my container</h3>
          <p>My number is: {number}</p>
        </div>
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
