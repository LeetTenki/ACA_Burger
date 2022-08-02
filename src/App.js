
import './App.css';

import React, { useState } from 'react';

const TopBread = () => {
  const [show, setShow] = useState(true);
  return(
    <>
      <button style={{border: '1px dashed red', borderRadius: '20% 20% 0% 0%'}} onClick={() => setShow(prev => !prev)}> </button>     
    </>
  );
}
const Tomato = () => {
  const [show, setShow] = useState(true);
  const mystyle={
    background:"red"
  };
  return(
    <>
      <button style={mystyle} onClick={() => setShow(prev => !prev)}> {show && <p>Tomato</p>}</button>
    </>
  );
}
const Meat = () => {
  const [show, setShow] = useState(true);
  const mystyle={
    background:"brown"
  };
  return(
    <>
      <button style={mystyle} onClick={() => setShow(prev => !prev)}> {show && <p>Meat</p>}</button>    
    </>
  );
}
const Lattice = () => {
  const [show, setShow] = useState(true);
  const mystyle={
    background:"green"
  };
  return(
    <>
      <button style={mystyle} onClick={() => setShow(prev => !prev)}> {show && <p>Lattice</p>}</button>     
    </>
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
