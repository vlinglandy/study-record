import React from 'react'
import {add, sub, getState} from './reducer.js'
import { useSelector, useDispatch } from 'react-redux'



export default function Counter() {
  let count = useSelector(getState)
  let dispatch = useDispatch()
  return (
    <div>
        { count }
        <button onClick={() => dispatch(add())}>add</button>
        <button onClick={() => dispatch(sub())}>sub</button>
    </div>
  )
}
