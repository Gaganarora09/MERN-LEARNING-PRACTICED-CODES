import { useState ,createContext} from 'react'

function App() {
 const [bulb,setBulb]=useState(true);
  return<div>
  <Bulb Bulb={bulb} setBulb={setBulb}></Bulb>
    <div>
      Bulb status:{bulb?"on":"Off"}
    </div>
  </div>
  const bulbContext=createContext();

}
function Bulb({Bulb,setBulb}){
  return <div>
    <Bulbon  bulb={Bulb} setBulb={setBulb}></Bulbon>
    <Bulboff bulb={Bulb} setBulb={setBulb}></Bulboff>
    <ToogleBulb bulb={Bulb} setBulb={setBulb}></ToogleBulb>
  </div>
}
function Bulbon({bulb,setBulb}){
  return <div>
    <button onClick={()=>setBulb(true)}>bulbon</button>
  </div>
}
function Bulboff({bulb,setBulb}){
  return <div>
   <button onClick={()=>setBulb(false)}>bulboff</button>
   <div>
   </div>
  </div>
}
function ToogleBulb({bulb,setBulb}){
  return <div>
    <button onClick={()=>setBulb(!bulb)}>bulbtoggle</button>
    <div>{bulb}</div>
  </div>
}


export default App
