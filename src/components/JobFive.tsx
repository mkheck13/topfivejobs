import React from 'react'
import image from '../assets/james-harrison-vpOeXr5wmR4-unsplash (1).jpg'

const JobFive = () => {
  return (
    <div className='w-5/6 mx-auto mt-52 flex'>
      <div className='w-1/2 bg-slate-100 p-5 rounded-lg'>
        <h1 className="text-6xl mb-4 font-bold">Freelancer</h1>
        <p>I choose freelance work due to being able to more or less work at my own pace and take on as much work as I want. I have skills to start doing freelance work right now and the more skills I learn I’ll only get better at it.</p>
      </div>
      <div className='w-1/2'>
          <img className='mt-20 ml-32 rounded-lg' src={image} alt='Computer with code' width={500}/>
      </div>
    </div>
  )
}

export default JobFive