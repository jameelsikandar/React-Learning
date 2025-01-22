import React, { useState } from 'react'

const Profile = () => {

    const [profile, setProfile] = useState({
        name: "",
        age: "",
    })


    const handleChange = (e)=> {
        const {name, value} = e.target;

        setProfile( (prevProfile)=> (
            {
                ...prevProfile,
                [name]: value,
            }
        ) );
    }

  return (
    <>
        <h2 className='text-center text-3xl text-blue-500'>User Profile</h2>
        <div>
        <label>
            Name:
            <input type="text" name='name' value={profile.name} onChange={handleChange} />
        </label>
        </div>

        <div>
        <label>
            Age:
            <input type="text" name='age' value={profile.age} onChange={handleChange} />
        </label>
        </div>

        <h3 className='text-center text-3xl text-blue-950'>Profile Information</h3>
        <p>Name: {profile.name}</p>
        <p>Age: {profile.age}</p>
    </>
  )
}

export default Profile