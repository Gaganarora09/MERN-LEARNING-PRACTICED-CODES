import { useState } from 'react';
import { RecoilRoot, atom, useRecoilValue, useSetRecoilState } from 'recoil';

const count=atom({
  default:0,
  key:'secret'
});

function App() {
  return (
    <RecoilRoot>
      <div>
        hi there
        <Increasecount></Increasecount>
        <Decreasecount></Decreasecount>
        <Valueshow></Valueshow>
      </div>
    </RecoilRoot>
  );
}




function Increasecount(){
  const setcount=useSetRecoilState(count);
  return <div>
      <button onClick={()=>setcount(count=>count+1)}>Increase</button> 
  </div>

}

function Decreasecount(){
  const statecount=useSetRecoilState(count);
  return <div>
      <button onClick={()=>statecount(count=>count-1)}>Decrease</button>
  </div>

}

function Valueshow(){
  const hellcount=useRecoilValue(count);
  return <div>
    {hellcount}
  </div>
}

export default App
