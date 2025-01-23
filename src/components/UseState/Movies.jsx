import React, { useState } from 'react'

const Movies = () => {

    // let [movie, setMovie] = useState({
    //     title: 'Kate',
    //     rating: 7,
    // });

    // let handleClick = ()=> {
    //     setMovie(
    //         {
    //             ...movie,
    //             rating: 10,
    //         }
    //     )
    // }

    const [movie, setMovie] = useState([
        { id: 1, title: "SpiderMan", rating: 7},
        { id: 2, title: "Last Seen Alive", rating: 9},
        { id: 3, title: "Kate", rating: 8},
        { id: 4, title: "HitMan", rating: 6},
    ]
    )

   const handleClick = ()=> {
        setMovie(

            movie.map( (m)=> (
                m.id == 2 ? {...movie, title: "John Wick"} : m
            ) )
            
        )
   }

  return (
    <>

        {
            movie.map(m => (
                <li key={Math.random()} >{m.title}</li>
            ))
        }


        <button onClick={handleClick} className='p-4 bg-red-200'>Change Name</button>


        {/* <h1>Movie Name: {movie.title}</h1>
        <h1>Movie Rating: {movie.rating}</h1>
        <button onClick={handleClick} className='p-4 bg-red-100' >Update rating</button> */}
    </>
  )
}

export default Movies