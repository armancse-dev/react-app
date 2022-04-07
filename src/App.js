import logo from './logo.svg';
import './App.css';

function App() {
  const nayoks = ['Rubel', 'BappaRaz', 'shovu', 'Omar Sani'];

  const cinemas = [
    { nayok: 'Koober', naika: 'Kopila'},
    { nayok: 'Rubel', naika: 'Moushumi'},
    { nayok: 'Razzak', naika: 'Shabana'},
    { nayok: 'Jashim', naika: 'Suchorita'},
  ]
  return (
    <div className="App">
      <ul>
        {
          nayoks.map(nayok => <li>{nayok}</li>)
        }
        
      </ul>
      {/* <Cinema nayok="J Bond" naika="Cat W"></Cinema> */}
      {
        cinemas.map(cinema =>    <Cinema nayok={cinema.nayok} naika={cinema.naika}></Cinema>)
      }
      
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

function Cinema(props){
  return (
    <div className='person'>
      <h2>Nayok: {props.nayok}</h2>
      <h4>Nayika: {props.naika}</h4>
    </div>
  )
}

/*
<Person name="Rubel" naika="Moushomi"></Person>
<Person name="BappaRaz" naika="Cheka"></Person>
*/

/*
<Person name={nayoks[0]} naika="Moushomi"></Person>
      <Person name={nayoks[1]} naika="Cheka"></Person>
*/
export default App;
