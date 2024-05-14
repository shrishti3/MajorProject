import React from 'react'
import focus11 from '../assets/mobile/focus11.png';
import focus12 from '../assets/mobile/focus12.png';
import focusAudio from '../assets/audio/focus.mp3';
const Focus = () => {
  return (
    <div className='flex flex-row px-16 cursor-pointer'>

    <div className='flex flex-row'>
                <img src={focus11} className='rotate-12 w-80 '/>
    
                </div>
        <div className='flex flex-col '>                   
         <p className='place-self-center font-bold text-3xl mb-8 '>Focus</p>
        <p className='overflow-hidden text-lg w-1/2 place-self-center mb-2 mt-12'>
        Get a clearer picture of what matters most with music and meditations designed to help boost your ability to focus.</p>
    
            <audio controls className="place-self-center rounded-none border-none mt-3">
    <source src={focusAudio} type="audio/mpeg" />
    </audio>
                </div >
                <div className='flex flex-row '>
                <img src={focus12} className='-rotate-12 w-80' />
                </div>
                </div>
  )
}

export default Focus