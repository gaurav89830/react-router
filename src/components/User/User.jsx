import React from 'react'
import {useParams} from 'react-router-dom'
const User = () => {
    const {userID} = useParams();
    return (
        <div className='mx-auto w-full max-w-7xl'>
            User :{userID}
        </div>
    )
}

export default User
