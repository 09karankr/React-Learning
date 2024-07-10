import React from 'react'
import { useEffect, useState } from 'react'

function Github() {
    const [data,setData] = useState([])
    useEffect(() => {
        fetch(`https://api.github.com/users/09karankr`)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            setData(data)
        })
    },[])
    return (
        <div className="bg-gray-600 text-whte text-3xl p-4 text-center w-screen">Github followers: {data.followers}
        <img src = {data.avatar_url} alt= "image" width = {300}/>
        </div>
    )
}

export default Github
