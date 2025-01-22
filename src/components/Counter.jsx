import React, { useState } from 'react'

const Counter = () => {

    let [count, setCount] = useState(0);

    const increment = ()=> setCount( count+ 1)
    


  return (
    <>
        <h1 className='text-center text-4xl text-red-900'>Count: {count}</h1>
        <div className='flex justify-center items-center pt-5'>
        <button onClick={increment} className='text-4xl bg-red-500 p-3 rounded-md'>+</button>
        </div>

    
    </>
  )
}

export default Counter