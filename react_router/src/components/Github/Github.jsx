import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'

function Github() {
    const [data, setData] = useState([])
    useEffect(() => {
      fetch('https://api.github.com/users/ShubhGithub07')
      .then(response => response.json())
      .then(data => {
        console.log(data);
        setData(data)
      })
    }, [])
    
  return (
    <div className='text-center p-4 m-4 bg-gray-600 text-white text-3xl rounded-3xl overflow-hidden'>Github followers: {data.followers}
    <img src={data.avatar_url} alt="Git picture" width={300} /></div>
  )
}

export default Github