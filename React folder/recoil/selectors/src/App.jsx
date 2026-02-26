import { useState } from 'react';
import { RecoilRoot, atom, useRecoilValue, useSetRecoilState,selector } from 'recoil';



const count=atom({
  default:0,
  key:'secret'
});

const even = selector({
  key: 'isEven',
  get: ({ get }) => {
    const iscount = get(count);
    const check=(iscount%2==0);
    return check;
  }
})


function App() {
  return (
    <RecoilRoot>
      <div>
        hi there
        <Increasecount></Increasecount>
        <Decreasecount></Decreasecount>
        <Valueshow></Valueshow>
        <Iseven></Iseven>
      </div>
    </RecoilRoot>
  );
}




function Increasecount(){
  const setcount=useSetRecoilState(count);
  return <div>
      <button onClick={()=>setcount(count=>count+2)}>Increase</button> 
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

function Iseven(){
  const iseven=useRecoilValue(even)
  return <div>
    {iseven?"EVEN":"ODD"}
  </div>
}

export default App
