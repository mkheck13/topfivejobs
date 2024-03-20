import React from 'react'
import image from '../assets/cisco.avif'

const JobTwo = () => {
  return (
    <div className='w-5/6 mx-auto mt-52 flex'>
      <div className='w-1/2 bg-slate-100 p-5 rounded-lg'>
        <h1 className="text-6xl mb-4 font-bold">Cisco</h1>
        <p>I choose Cisco as its one of the bigger tech companies out there.  They offer an apprenticeship program that would teach me a lot of the skills I would need to land a job at one of their sites. Currently I don’t have the skills needed to get a job here. </p>
        <a className='ml-32 underline hover:text-purple-700 mt-3' href='https://www.cisco.com/c/en/us/about/careers/communities/students-and-new-graduates/apprenticeship.html' target='_blank'>Cisco Apprenticeship Application</a>
      </div>
      <div className='w-1/2'>
          <img className='mt-20 ml-32' src={image} alt='Cisco Team' width={500}/>
      </div>
    </div>
  )
}

export default JobTwo