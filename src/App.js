/* Burger app that allow person to remove ingredients they do not like */
import './App.css';
import React, { useState } from 'react';

/* Below are ingredients of the burger*/
const TopBread = () => {
  const [show, setShow] = useState(true);
  return(
    <>
      <button style={{border: '1px dashed red', borderRadius: '20% 20% 0% 0%'}} onClick={() => setShow(prev => !prev)}> </button>     
    </>
  );
}

const Tomato = () => {
  const [hidden, setHidden] = useState(false);
  const mystyle={
    background:"red"
  };
  return(
    <div>
       <div className="Tomato">
          {!hidden && <button  style={mystyle} onClick={() => setHidden(true)}>Tomato</button>}
      </div>
    </div>
  );
}

const Meat = () => {
  const [hidden, setHidden] = useState(false);
  const mystyle={
    background:"brown"
  };
  return(
    <div>
      <div className="Meat">
        {!hidden && <button  style={mystyle} onClick={() => setHidden(true)}>Meat</button>}
      </div>
   </div>
  );
}

const Lattice = () => {
  const [hidden, setHidden] = useState(false); //default state of button is not removed
  const mystyle={
    background:"green"
  };
  return(
    <div>
      <div className="Lattice">
        {!hidden && <button  style={mystyle} onClick={() => setHidden(true)}>Lattice</button>}
      </div>
   </div>
  );
}
const BaseBread = () => {
  const [show, setShow] = useState(true); 
  return(
    <>
      <button  style={{border: '1px dashed red', borderRadius: '0% 0% 20% 20%'}} onClick={() => setShow(prev => !prev)}> </button>     
    </>
  );
}
 function App() {
  return (
    <div style={{textAlign: 'center'}}>

        <h1>ACA Burger</h1>

        <div><TopBread/> </div>
        <br></br>
        <div><Tomato/></div>
        <br></br>
        <div><Meat/></div>
        <br></br>
        <div><Lattice/></div>
        <br></br>
        <div><BaseBread/></div>
      </div>
  );
}
export default App;
