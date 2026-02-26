import { useState } from 'react'
import {usePrev} from './hooks/usePrev.jsx'

function App() {
    return <div>
      <div>
        <UsePrev></UsePrev>
      </div>
    </div>
}

function UsePrev(){
  const [count,setcount]=useState(0);
  const prev=usePrev(count);
  return <div>
    {count}
    <button onClick={()=>setcount(count+1)}>Click me</button>
    <p>The previous value is</p>
    {prev}
  </div>
}






export default App
