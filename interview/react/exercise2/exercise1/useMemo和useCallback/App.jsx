import React,{useState,useMemo, useCallback} from 'react'

export default function App() {
  let [count,setCount] = useState(0)
  let [flag,setFlag] = useState(true)
  let obj = {}
  let add = useCallback(() => {
    let num = Math.random()>0.5 ? 2 : 1
    console.log(num);
    setCount(count + num)
  },[count])
  let str = useMemo(() => {
    console.log(count);
    return Math.random() + ""
  },[count])
  function reverse(){
    setFlag(!flag)
  }
  // Object.defineProperty(obj, str, {
  //   set(newVal){
  //     console.log("set");
  //     setCount(newVal)
  //   },
  //   get(){
  //     console.log("get");
  //     return count
  //   }
  // })

  console.log(str);
  return (
    <div>
        <h1 {...obj}>{count}</h1>
        <h1 >{flag + ""}</h1>
        <div>
          <button onClick={add}> + </button>
          <button onClick={reverse}> reverse </button>
        </div>
    </div>
  )
}
