import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  return (
    <div className="App">
      <Counter></Counter>
      
    </div>
  );
}

function Counter(){
  const [count, setCount]= useState(0);
  // console.log(count, setCount);
  const handleIncrease = () => {
    setCount(count + 1);
  }

  const handleDecrease = () => {
    setCount(count - 1);
  }
  
  return(
    <div>
      <h1>Count: {count}</h1>
      <button onClick={handleIncrease}>Increase</button>
      <button onClick={handleDecrease}>Descrease</button>
      
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


      // <ul>
      //   {
      //     nayoks.map(nayok => <li>{nayok}</li>)
      //   }
        
      // </ul>
      {/* <Cinema nayok="J Bond" naika="Cat W"></Cinema> */}
      // {
      //   cinemas.map(cinema =>    <Cinema nayok={cinema.nayok} naika={cinema.naika}></Cinema>)
      // }



/*
  const nayoks = ['Rubel', 'BappaRaz', 'shovu', 'Omar Sani'];

  const cinemas = [
    { nayok: 'Koober', naika: 'Kopila'},
    { nayok: 'Rubel', naika: 'Moushumi'},
    { nayok: 'Razzak', naika: 'Shabana'},
    { nayok: 'Jashim', naika: 'Suchorita'},
  ]
*/

/*
<Person name="Rubel" naika="Moushomi"></Person>
<Person name="BappaRaz" naika="Cheka"></Person>
*/

/*
<Person name={nayoks[0]} naika="Moushomi"></Person>
      <Person name={nayoks[1]} naika="Cheka"></Person>
*/
export default App;
