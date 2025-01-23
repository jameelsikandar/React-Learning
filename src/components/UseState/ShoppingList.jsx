import React, { useState } from 'react'

const ShoppingList = () => {

    const [items, setItems] = useState([]);

    const [name, setName] = useState("");

    const [quantity, setQuantity] = useState("");

    const handleSubmit = (e)=> {
        e.preventDefault();
        if(!name || !quantity) return;

        const newItem = {
            name,
            quantity: parseInt(quantity),
        };

        setItems( (prevItem) => [...prevItem, newItem] );

        setName("");
        setQuantity("");


    }

  return (
    <>
        <h1 className='text-center text-3xl text-blue-600'>Shoping List</h1>

        <form onSubmit={handleSubmit}>
            <input type="text" placeholder='Item Name' value={name} onChange={(e)=> setName(e.target.value)} />
            <input type="number" placeholder='Quantity' value={quantity} onChange={(e)=> setQuantity(e.target.value)} />
            

            <button type='submit'>Add Item</button>

        </form>


        <ul>
            {items.map( (item, value)=> (
                <li key={value}>
                    {item.name} - Quantity: {item.quantity}
                </li>
            ) )}
        </ul>
    

    </>
  )
}

export default ShoppingList