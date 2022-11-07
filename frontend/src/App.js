import './App.css';
import loading from './loading.gif';
import { useEffect, useState } from 'react';
import List from './Components/List';

function App() {

  const [message, setmessage] = useState('')
  const [clicked, setclicked] = useState(true)

  useEffect(()=>{
    // api call may occur twice because strict mode triggers some events twice
    fetch("http://localhost:5000/").then((data) => data.json()).then((data) => {
      console.log(data.message);
      setmessage(data.message);
      setclicked(false);
    }).catch(()=>console.error("api call failed")).finally(()=>console.log("over with useEffect"))
  },[])

  return (
    <div className="App">
      {
        clicked
        ?
        <img src={loading} alt='Not' />
        :
        <div>
          <br />
          {message}
          
        </div>
      }
      <List/>
    </div>
  );
}

export default App;
