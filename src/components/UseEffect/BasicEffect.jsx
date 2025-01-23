import React, { useEffect, useState } from 'react'

const BasicEffect = () => {

    const [count, setCount]  = useState(0);

    useEffect(()=> {

        console.log('UseEffect countered');

        

    }, [count])


  return (
    <>
    <h2>Count: ${count}</h2>

    <button onClick={()=> setCount( count + 1)  }>Increment</button>
    
    
    </>
  )
}

export default BasicEffect