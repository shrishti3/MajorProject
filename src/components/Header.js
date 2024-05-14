import React from 'react'
import { Link } from 'react-router-dom';
const Header = () => {
  return (
    <div className='bg-sky-200'> 
        <div className='ml-16 flex flex-row justify-between '>
        <div className='mt-6'>
        <Link to="/"> <p className='font-bold text-3xl pb-2'>Mindwell</p> </Link>
    
      </div>
      <div className='flex flex-row gap-8 mt-8'>
      <Link to="/therapist"><p className='font-bold text-gray-500'>Find a therapist</p></Link> 
      <Link to='/articles' className='font-bold text-gray-500'> Articles</Link>
      <Link to='/games'><p className='font-bold text-gray-500'>Stress buster games</p></Link>
      <Link to='/podcast'><p className='font-bold text-gray-500'>Podcast</p></Link>
      <Link to='/pomrodo'>
      <p className='font-bold text-gray-500'>Promodro</p>   </Link>
      </div>
      <div className='flex flex-row gap-8 mt-8 mr-8'>
        <p className='font-bold text-gray-500'>Login</p>
        <p className='font-bold text-gray-500'>Signup</p>
      </div>
      </div>
      </div>
  )
}

export default Header