import {useState,useEffect} from "react";
function App(){
  return <div>
    <h1>hello</h1>
    
    <Content todo={"gagan"} done={"yes"}>
    </Content>
    <Content todo={"gagan2"} done={"yes"}></Content>
  </div>
}
/*function Counter(){
  const [count,countHelp]=useState(0);
  const[Timer,setTimer]=useState(0);
  useEffect(function(){
    let clock=setInterval(function(){
      setTimer(function(Timer){
        return Timer+1;
      })
    },1000)
    return function(){
      return clearInterval(clock);
    }
  },[]);
    
  

  return <div>
    <h1>{count}</h1>
    <h1>{Timer}</h1>
    <button onClick={()=>countHelp(count+1)}>count</button>
  </div>
}*/
function Content({todo,done}){
  return <div>
    <div>{todo}</div>
    <div>{done}</div>
  </div>
}

export default App
