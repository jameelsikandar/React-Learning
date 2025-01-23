import React, { useState } from 'react'
import PopupContent from './PopupContent';

const CopyInput = () => {

    const [inputValue, setInputValue] = useState('');
    const [copied, setCopied] = useState(false);

    const handleCopy = () => {
        navigator.clipboard.writeText(inputValue).then( ()=> {
            setCopied(true);
            setTimeout(()=> setCopied(false) , 2000)
        } )
    }


  return (
    <>
        <input type="text" placeholder='Enter text' value={inputValue} onChange={ (e)=> setInputValue(e.target.value) } />

        <button onClick={handleCopy}  className='p-1 text-red-200 bg-green-500'>Copy</button>

        <PopupContent copied={copied} />

    </>
  )
}

export default CopyInput