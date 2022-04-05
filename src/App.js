import logo from './logo.svg';
import './App.css';

function App() {
  
  return (
    <div className="App">
      <Person name="Rubel" naika="Moushomi"></Person>
      <Person name="BappaRaz" naika="Cheka"></Person>
    </div>
  );
}

function Person(props){
  console.log(props)
  return (
    <div className='person'>
      <h1>Name: {props.name}</h1>
      <h4>Hero Of: {props.naika}</h4>
    </div>
  );
}
export default App;
