import React from 'react'
import { createPortal } from 'react-dom';

const PopupContent = ( {copied} ) => {
  return createPortal(
    <section>
        {copied && (
            <div className='absolute bottom-3 text-3xl'>
                Copied to clipboard
            </div>
        )}
    

    </section>,
    document.querySelector('#pop-up-content')
  )
}

export default PopupContent