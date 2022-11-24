import React,{useState} from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { add, sub, getCounter } from './reducer'

export default function Counter() {
  let count = useSelector(getCounter)
  let dispatch = useDispatch()
  let [num,setNum] = useState(1)
//   console.log(add())
  return (
    <div>{count}
        <select onChange={(e) => setNum(e.target.value * 1)}>
            <option value={1}>1</option>
            <option value={2}>2</option>
        </select>
        {num}
        <button onClick={() => dispatch(add(num))}>加法</button>
        <button onClick={() => dispatch(sub(num))}>减法</button>
    </div>
  )
}
