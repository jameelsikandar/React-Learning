import React, { useEffect, useState } from 'react'

const Fetch = () => {

    const [data, setData] = useState([]);

    useEffect(()=> {

        async function getData() {
            const response = await fetch('https://jsonplaceholder.typicode.com/posts');
            const data = await response.json();

            if(data && data.length) setData(data);



        }

        getData();


    }, [])


  return (
    <>
        <ul className='text-white'>
            {
                data.map(todo => (
                    <div key={todo.id}>
                        <li>{todo.title}</li>
                        <br />
                        <li>Body -- {todo.body}</li>
                    </div>
                ))
            }
        </ul>
    
    
    </>
  )
}

export default Fetch