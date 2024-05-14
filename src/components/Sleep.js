import React from 'react'
import sleep11 from '../assets/mobile/sleep11.png';
import sleep12 from '../assets/mobile/sleep12.png';

import sleepAudio from '../assets/audio/sleep.mp3'
const Sleep = () => {
  return (
    <div className='flex flex-row px-16 cursor-pointer'>

    <div className='flex flex-row'>
                <img src={sleep11} className='rotate-12 w-80 '/>
    
                </div>
        <div className='flex flex-col '>                   
         <p className='place-self-center font-bold text-3xl mb-8 '>Sleep</p>
        <p className='overflow-hidden text-lg w-1/2 place-self-center mb-2 mt-12'>
        Create the conditions for a more restful night’s sleep with sleepcasts, music, and other unique audio experiences.</p>
    
            <audio controls className="place-self-center rounded-none border-none mt-3">
    <source src={sleepAudio} type="audio/mpeg" />
    </audio>
                </div >
                <div className='flex flex-row '>
                <img src={sleep12} className='-rotate-12 w-80' />
                </div>
                </div>
  )
}

export default Sleep