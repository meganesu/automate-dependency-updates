import React, { useState } from 'react'
import './Counter.css'

const Counter = ({ initialCount = 0 }) => {
  const [count, setCount] = useState(initialCount)

  return (
    <button onClick={() => { setCount(count + 1)}}>
      This button has been clicked {count} time{count !== 1 && 's'}!
    </button>
  )
}

export default Counter