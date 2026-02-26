import { useState,createContext} from 'react'
import {useContext} from 'react'; 
const BulbContext=createContext();
function App() {
  const[bulb,setBulb]=useState(true);
  return <div>
    <BulbContext.Provider value={{
      Bulb:bulb,
      setBulb:setBulb
    }}>
      <Bulb></Bulb>
    </BulbContext.Provider>
    <div>
      Bulb Status:{bulb?"ON":"OFF"}
    </div>
  </div>
}
function Bulb(){
  return <div>
    <Toggle></Toggle>
    <Bulboff></Bulboff>
  </div>
}
function Toggle(){
  const {Bulb,setBulb}=useContext(BulbContext);
  return <div>
    <button onClick={()=>setBulb(!Bulb)}>Toggle</button>
    <div>
    
    </div>
  </div>
}
function Bulboff(){
  const {Bulb,setBulb}=useContext(BulbContext);
  return <div>
    <button onClick={()=>setBulb(false)}>bulboff</button>
    <div>
      
    </div>
  </div>
}
export default App
