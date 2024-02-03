import React from 'react'
import { useState, useEffect } from 'react'
import { useLoaderData } from 'react-router-dom'


function Github() {
  // more optimize using useLoaderData()
  const data = useLoaderData()  
  
    // const [data, setData] = useState([])
    // useEffect(() => {
    //   fetch('https://api.github.com/users/ShubhGithub07')
    //   .then(response => response.json())
    //   .then(data => {
    //     console.log(data);
    //     setData(data)
    //   })
    // }, [])
    
  return (
    <div className='text-center p-4 m-4 bg-gray-600 text-white text-3xl rounded-3xl overflow-hidden'>Github followers: {data.followers}
    <img className='mt-2 rounded-full p-7' src={data.avatar_url} alt="Git picture" width={300} /></div>
  )
}

export default Github

export const githubInfoLoader = async () => {
  const response = await fetch('https://api.github.com/users/ShubhGithub07')
  return response.json()
}