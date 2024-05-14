import React from 'react'
import Meditate_audio from '../assets/audio/meditate.mp3';
import mob11 from '../assets/mobile/mob11.png';
import mob12 from '../assets/mobile/mob12.png';
const Meditate = () => {
  return (
    <div className='flex flex-row px-16 cursor-pointer'>

<div className='flex flex-row'>
            <img src={mob11} className='rotate-12 w-80 '/>

            </div>
    <div className='flex flex-col '>                   
     <p className='place-self-center font-bold text-3xl mb-8 '>Meditate</p>
    <p className='overflow-hidden text-lg w-1/2 place-self-center mb-2 mt-12'>
    Learn to manage feelings and thoughts with the lifelong skill of everyday mindfulness, any time of the day.</p>

        <audio controls className="place-self-center rounded-none border-none mt-3">
<source src={Meditate_audio} type="audio/mpeg" />
</audio>
            </div >
            <div className='flex flex-row '>
            <img src={mob12} className='-rotate-12 w-80' />
            </div>
            </div>
  )
}

export default Meditate