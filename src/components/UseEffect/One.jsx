import React, { useEffect, useState } from 'react'

const One = () => {

    const [value, setValue] = useState(0);

    useEffect( ()=> {

        console.log("UseEffect in action");

        document.title = `Increment value: ${value}`;
        


    } )



  return (
    <>
        <h2>{value}</h2>
        <br />
        <button onClick={ ()=> setValue(value +1)}>Click me</button>
    
    </>

  )
}

export default One