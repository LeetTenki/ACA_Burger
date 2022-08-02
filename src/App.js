
import './App.css';
import React, {useState} from  'react';
const [showTomato, setShowTomato] = useState(true);

function TopBread()
{
  const mystyle={
    background:"orange",
    border: "20px 20px 0px 0px"
  };
return <div><button mstyle={mystyle} style={{border: '1px dashed red', borderRadius: '20% 20% 0% 0%'}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</button></div>
}

function Tomato() {
 
  const mystyle={
    background:"red",
    border: "20px 20px 0px 0px"
  };
 return <div><button onClick={() => setShowTomato(true)} style={mystyle}>Tomato</button></div>

}
function Meat()
{
  const mystyle={
    background:"brown"
  };
return <div><button style={mystyle}>Meat</button></div>
}
function Lattice()
{
  const mystyle={
    background:"green"
  };
return <div><button style={mystyle}>Lattice</button></div>
}
function BaseBread()
{
  const mystyle={
    background:"orange"
  };
return <div><button mstyle={mystyle} style={{border: '1px dashed red', borderRadius: '0% 0% 20% 20%'}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</button></div>
}
function App() {
  return (
    <div>
      <header>
        </header>
          <h1>ACA Burger</h1>

            <TopBread />
            <br></br>
            <Tomato />
            <br></br>
            <Meat />
            <br></br>
            <Lattice />
            <br></br>
            <BaseBread />
    </div>
  );
}

export default App;
