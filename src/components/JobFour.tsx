import React from 'react'
import image from '../assets/Google.webp'

const JobFour = () => {
  return (
    <div className='w-5/6 mx-auto mt-52 flex'>
      <div className='w-1/2 bg-slate-100 p-5 rounded-lg'>
        <h1 className="text-6xl mb-4 font-bold">Google</h1>
        <p>Google is one of my fever dreams. I would need to dedicate many more years to the field to even be considered for an entry level spot.</p>
        <a className='ml-32 underline hover:text-purple-700' href='https://www.google.com/about/careers/applications/?utm_source=about&utm_medium=referral&utm_campaign=footer-link' target='_blank'>Google Careers</a>
      </div>
      <div className='w-1/2'>
          <img className='mt-20 ml-32' src={image} alt='Inside Google HQ' width={500}/>
      </div>
    </div>
  )
}

export default JobFour