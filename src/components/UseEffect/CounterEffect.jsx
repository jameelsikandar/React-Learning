import React, { useEffect, useState } from 'react'

const CounterEffect = () => {

    const [count, setCount] = useState(0);


    useEffect(()=> {
        console.log("UseEffect is powerfull");

        document.title = `Counter ${count}`;


    }, [count]  )



  return (
    <>
    
    <h2>Count: {count}</h2>

    <div className='text-3xl items-center'>
        <button onClick={()=> setCount(count + 1)} >Increment</button>
    </div>
    
    
    </>
  )
}

export default CounterEffect