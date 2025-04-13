import React, { useEffect, useState } from 'react'
import axios from 'axios'
const Examples = () => {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
   const API = "https://api.github.com/search/repositories?q=portfolio&per_page=12&sort=stars&order=desc"
   const getData = async ()=>{
    try{
      const res = await axios.get(API)
      console.log(res.data)
      setRepos(res.data.items);
        setLoading(false);
    }
    catch (error){
      console.log(error)
      setLoading(false);
    }
   }

   useEffect (()=>{
    getData()
   },[])
   
  return (
    <div className='mx-auto w-full p-4 text-center'>
      <div className='mt-12' >
        <h1 className='text-5xl font-thin'>Need Inspiration?</h1>
        <p className='pt-5 text-xl font-semibold'>See how the creatives below customized their Portfolio themes.</p>
      </div>
      <div className="p-5">
      
      <ul className=" grid grid-cols-3 gap-6">
        {repos.map((repo) => (
          <li key={repo.id} className="border p-3 rounded shadow-lg w-[80%] mx-auto bg-gradient-to-r from-purple-700 to-peach  hover:shadow-xl transition-shadow duration-300">
            <a
              href={repo.html_url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white font-semibold"
            >
              {repo.name}
            </a>
            <p className="text-gray-700">{repo.description || "No description available"}</p>
            <p className="text-sm text-gray-500"> {repo.stargazers_count} | Forks: {repo.forks_count}</p>
          </li>
        ))}
      </ul>
    </div>  
    </div>
  )
}

export default Examples