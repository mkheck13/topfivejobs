import React from 'react'
import image from '../assets/discord.jpeg'
import { Link } from 'react-router-dom'



const JobOne = () => {
  return (
    <>
    <div className='w-5/6 mx-auto mt-52 flex'>
      <div className='w-1/2 bg-slate-100 p-5 rounded-lg'>
        <h1 className="text-6xl mb-4 font-bold">Discord</h1>
        <p>I selected Discord as their culture seemed very appealing to me. I like the fact that they offer a summer intern course. I have the basic understanding of backend work but I would definitely have to get better at it. I would have to learn machine learning as well. My goals would be to learn the basic skills of my job then continue to learn to move up to better positions. I do not currently have all the necessary skills for the job.</p>
        <a className='ml-32 underline hover:text-purple-700 mt-3' href='https://discord.com/jobs/7260171002' target='_blank'>Discord Software Engineer Position</a>
      </div>
      <div className='w-1/2'>
          <img className='mt-20 ml-32 rounded-lg' src={image} alt='Discord employees working together' width={500}/>
      </div>
    </div>
    </>
  )
}

export default JobOne