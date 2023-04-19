import React, { useState } from 'react'
import './Counter.css'

const Counter = () => {
  const [count, setCount] = useState(0)

  return (
    <button onClick={() => { setCount(count + 1)}}>
      This button has been clicked {count} times!
    </button>
  )
}

export default Counter