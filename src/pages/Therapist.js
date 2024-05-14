import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import one from '../assets/therapist/one.svg';
import two from '../assets/therapist/two.svg';
import three from '../assets/therapist/three.svg';
import getstartedbg from '../assets/home/getstartedbg.svg';
import hand1 from '../assets/hands/Black-in-Jacket12.png';
import hand2 from '../assets/hands/Black-in-Jacket3.png';
import hand3 from '../assets/hands/Brown-in-Jumper7.png';
import hand4 from '../assets/hands/Dark-white-in-Basic9.png';
import hand5 from '../assets/hands/Light-brown-in-Jacket3.png';
import hand6 from '../assets/hands/White-in-Basic11.png';
import wfh from '../assets/therapist/wfh.png';
const Therapist = () => {
const [filter, setFilter] =useState('');

const handleFilter = () =>{
    switch(filter){
        case 'counsellor':
            setFilter('counsellor');
        case 'therapist':
            setFilter('therapist');
        case 'life_coach':
            setFilter('life_coach');
        case 'academic_guide':
            setFilter('academic_guide');
        case 'sucide_help':
            setFilter('sucide_help');
        case 'friend':
            setFilter('friend');
            default:
                setFilter('');
    }
    console.log(filter);
  }

  return (
    <div className='h-screen'>
        <Header/>
    <div className='relative'>
    <img src={getstartedbg} className=''/>
    <div className='absolute top-32 left-96 ml-8 bg-white p-8 rounded-xl shadow-lg shadow-gray-500'>
        <p className='text-5xl font-bold'>What type of help are you </p>
        <p className='text-5xl font-bold mb-8 pl-48'>seeking?</p>
        <div className='flex flex-col gap-6'>
                <div className='flex flex-row gap-4 justify-center'>
                    <p className={filter=='counsellor'?'border-2 bg-gray-400 border-gray-400 rounded-lg p-3  cursor-pointer':'border-2 border-gray-400 rounded-lg p-3 hover:bg-gray-100 cursor-pointer' } onClick={()=> setFilter('counsellor')}>
                       PROFESSIONAL THERAPIST
                    </p>
                    <p className={filter=='therapist'?'border-2 bg-gray-400 border-gray-400 rounded-lg p-3  cursor-pointer':'border-2 border-gray-400 rounded-lg p-3 hover:bg-gray-100 cursor-pointer' } onClick={()=> setFilter('therapist')}>
                        LIFE COACH
                    </p>
                </div>
                <div className='flex flex-row gap-4 justify-center'>
                    <p className={filter=='life_coach'?'border-2 bg-gray-400 border-gray-400 rounded-lg p-3  cursor-pointer':'border-2 border-gray-400 rounded-lg p-3 hover:bg-gray-100 cursor-pointer' } onClick={()=>  setFilter('life_coach')}>
                    COUNSELLOR /THERAPIST
                    </p>
                    <p className={filter=='academic_guide'?'border-2 bg-gray-400 border-gray-400 rounded-lg p-3 cursor-pointer':'border-2 border-gray-400 rounded-lg p-3 hover:bg-gray-100 cursor-pointer' } onClick={()=>  setFilter('academic_guide')}>
                        ACADEMIC GUIDE
                    </p>
                </div>
                <div className='flex flex-row gap-4 justify-center'>
                    <p className={filter=='sucide_help'?'border-2 bg-gray-400 border-gray-400 rounded-lg p-3 cursor-pointer':'border-2 border-gray-400 rounded-lg p-3 hover:bg-gray-100 cursor-pointer'} onClick={() => setFilter('sucide_help')}>
                        SUCIDE HELP
                    </p>
                    <p className={filter=='friend'?'border-2 bg-gray-400 border-gray-400 rounded-lg p-3 cursor-pointer':'border-2 border-gray-400 rounded-lg p-3 hover:bg-gray-100 cursor-pointer' } onClick={() => setFilter('friend')}>
                        NEED A FRIEND
                    </p>
                </div>
                
                <div >
                    <a href='/therapistSearch'>
                    <p className='border-2 border-sky-200 rounded-lg bg-sky-700 p-3 text-center text-white justify-content-center cursor-pointer ' onClick={()=>handleFilter()}> VIEW RESULTS  </p></a>
                </div>
                
        </div>
    </div>
    
    <div className='absolute bottom-0 flex flex-row -space-x-96 left-0'>
<img src={hand1} className='h-72'/>
<img src={hand5} className='h-72 '/>
<img src={hand3} className='h-72 '/>
<img src={hand4} className='h-72'/>

<img src={hand6} className='h-72'/>
<img src={hand1} className='h-72'/>
<img src={hand3} className='h-72 '/>
<img src={hand4} className='h-72'/>

    </div>
    <div className='flex flex-col justify-center bg-gray-100 relative '>
    
    <p className=' text-2xl font-bold px-16'>Wanna help others? and be a part of our strong team !?</p><Link to="/registerpeople" className='bg-sky-700 rounded-xl px-3 py-2 mt-2 text-white font-semibold w-32 mx-16'>Register here</Link>
    
    <p className=' text-2xl font-bold'>  </p>
     </div>
    </div>
    

    <div className='flex flex-col to-white'>
        <p className='font-bold text-3xl pl-16 pb-12 text-gray-500 mt-16'>Let's Get Started</p>
        <div className='flex flex-row justify-around mb-32 '>
        <div className='flex flex-col bg-gray-100 opacity-50 px-8 py-6 '>
            <img src={one}  className='h-10 w-10'/>
            <p className='font-bold text-2xl'>Answer a few questions</p>
            <p className='text-lg'>let us know what you are looking for</p>
        </div>
        <div className='flex flex-row'>
        <div className='flex flex-col bg-gray-100 opacity-50 px-8 py-6'>
        <img src={two}  className='h-10 w-10'/>
            <p className='font-bold text-2xl'>Browse your result</p>
            <p className='text-lg'>We'll deliver a curated list of your needs</p>
        </div> 
        </div>
        <div className='flex flex-row'>
        <div className='flex flex-col bg-gray-100 opacity-50 px-8 py-6'>
            <img src={three}  className='h-10 w-10'/>
            <p className='font-bold text-2xl'>Connect with a therapist</p>
            <p className='text-lg'>  Contact any of our professionals, <br/>for free, to arrange an initial consultation</p>
        </div>
        </div>
        </div>
    </div>
    
    <div className='bg-sky-100 py-16 relative'>
        <div className='flex flex-col pl-16'>
        <div>
            <p className='text-3xl font-bold pb-8 text-gray-500'>Our Vision</p>
        </div>
        <div className='flex flex-row '>
        <p> We’re on a mission to create a healthier, happier, more sustainable society.</p>
       
        </div> 
        <div className='absolute right-0 -bottom-6'>
        <img src={wfh}  className='h-96'/>
        </div>
        </div>
        <div>
            
        </div>
    </div>
    </div>

  )
}

export default Therapist