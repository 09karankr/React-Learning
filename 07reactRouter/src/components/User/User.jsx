import React from 'react'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'

function User() {
    
    const {userid} = useParams()
    return (
       <div className='bg-gray-600 text-3xl p-4 text-center w-screen text-white'>User: {userid}</div>
    )
}

export default User
