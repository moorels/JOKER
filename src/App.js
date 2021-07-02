import React,{useEffect, useState} from 'react';  
import './App.css';

function App() {

const [joke,setJoke] = useState('')

  
  useEffect (()=> {
    
    const fetchJoke = async () => 
    await fetch (
      `http://api.icndb.com/jokes/random?`

      )
      .then((res) => res.json())
      .then ((data) => {

        setJoke(data.value.joke)
        
      });

fetchJoke()

  },[])

  




  return (
    <div className="App">
<div>
    <h1 style={{color: "Yellow" ,fontSize: "120px", background: "red"}}>JOKER</h1>
    
  <button style={{color: "red" , fontSize: "60px"}} >JOKEBOOK</button>
      <div>{joke}</div>
      <h1 style={{color: "yellow" , fontSize: "40px", background: "red"}}>{joke}</h1>

</div>
    </div>
  );
}

export default App;
