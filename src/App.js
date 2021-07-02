import React,{useEffect, useState} from 'react';  
import './App.css';

function App() {

const [joke,setJoke] = useState('')
const [but,setBut]  = useState('')
  
  useEffect (()=> {
    
    const fetchJoke = async () => 
    await fetch (
      `http://api.icndb.com/jokes/random`

      )
      .then((res) => res.json())
      .then ((data) => {

        setJoke(data.value.joke)
        
      });

fetchJoke()

  },[but])

  const generateJoke = (e) => {
    e.preventDefault();
  
  setBut(joke)
  
  }


  return (
    <div className="App">
<div>
    <h1 style={{color: "Yellow" ,fontSize: "120px", background: "red"}}>JOKER</h1>
    <button style={{color: "red" , fontSize: "60px"}} onClick={generateJoke}>JOKEBOOK</button>
      <h1 style={{color: "yellow" , fontSize: "40px", background: "red"}}>{joke}</h1>

</div>
    </div>
  );
}

export default App;
