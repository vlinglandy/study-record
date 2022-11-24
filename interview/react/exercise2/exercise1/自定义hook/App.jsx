import React,{useState} from 'react'
function useMyHook(num){
  let [isPrimer,setIsprimer] = useState(num % 2 === 1)
  let fun = (num) => {
    setIsprimer(num%2===1)
  }
  return [isPrimer,fun]
}

export default function App() {
  let [numState,setNumState] = useMyHook(0)
  return (
    <div>
      <h1>{numState ? '奇数' : '偶数'}</h1>
      <input onChange={(e) => setNumState(e.target.value)} type="text" />
    </div>
  )
}
