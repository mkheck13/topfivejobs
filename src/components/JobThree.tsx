import React from 'react'
import image from '../assets/nvidia.jpg'

const JobThree = () => {
  return (
    <div className='w-5/6 mx-auto mt-52 flex'>
      <div className='w-1/2 bg-slate-100 p-5 rounded-lg'>
        <h1 className="text-6xl mb-4 font-bold">Nvidia</h1>
        <p>I choose Nvidia as I like that they don’t just focus on gaming. If I was to attempt to get hired on with them I would go for the gaming team as they focus on UI/Ux design and such. I don’t currently have the skills needed. </p>
        <a className='ml-32 underline hover:text-purple-700' href='https://www.nvidia.com/en-us/about-nvidia/careers/' target='_blank'>Nvidia Careers</a>
      </div>
      <div className='w-1/2'>
          <img className='mt-20 ml-32' src={image} alt='Nvidia Logo' width={500}/>
      </div>
    </div>
  )
}

export default JobThree