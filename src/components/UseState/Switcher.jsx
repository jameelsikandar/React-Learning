import React from 'react'
import { useState } from 'react';


const Switcher = () => {
    
    const [sw, setSw] = useState(false);
  
  
  
    return (
    <>
        {
            sw ? (
                <span className=' text-center text-3xl text-red-600'>Dark</span>
            ) : (
                <span className=' text-center text-3xl text-red-600'>Light</span>
            )
        }

        <br />


        <input type="text"  key={sw ? "Dark" : "Light"}/>

        <button className='text-white w-2 pl-3 text-xl' onClick={ ()=> setSw((s)=> !s) }>Switch</button>
    
    
    </>
  )
}

export default Switcher