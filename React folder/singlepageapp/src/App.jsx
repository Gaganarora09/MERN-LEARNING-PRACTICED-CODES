import { useState,useRef } from 'react'
import {BrowserRouter,Routes,Route,Link,useNavigate} from "react-router-dom";

function App() {
  return <div>
    <BrowserRouter>
    <Routes path="/" element={<Layout></Layout>}>
      <Route path="/" element={<Main></Main>}></Route>
      <Route path="/Class11" element={<Class11></Class11>}></Route>
      <Route path="/Class12" element={<Class12></Class12>}></Route>
      <Route path="*" element={<Errorpage></Errorpage>}></Route>
    </Routes>
     <div>
      <div><Link to="/">MainPage</Link> </div>
      <div><Link to="/Class11">Class11</Link></div>
      <div><Link to="/Class12">Class12</Link></div>
    </div>
    <Navigate></Navigate>
    <Reference></Reference>
    </BrowserRouter>
  </div>
}

function Reference(){
  const refer=useRef();
  return <div>
    Sign up
    <input ref={refer} type="text"></input>
    <input type="text"></input>
    <button onClick={()=>refer.current.focus()}>Submit</button>
  </div>
}

function Layout(){
  return <div>
    hi
    <outlet></outlet>
    there
  </div>
}

function Errorpage(){
  return <div>
    Page not found
  </div>
}

function Main(){
  return <div>
    You are on home page
  </div>
}

function Class11(){
  return <div>
    You are on class11 page
  </div>
}

function Class12(){
  return <div>
    You are on class12 page
  </div>
}

function Navigate(){

  const navigate=useNavigate();

  return <div>
    <button onClick={()=>navigate("/")}>Get me to the home page</button>
  </div>
}
export default App
