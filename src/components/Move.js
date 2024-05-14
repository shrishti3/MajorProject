import React from 'react'
import move11 from '../assets/mobile/move11.png';
import move12 from '../assets/mobile/move12.png';

const Move = () => {
  return (
    <div className='flex flex-row px-16 cursor-pointer'>

    <div className='flex flex-row'>
                <img src={move11} className='rotate-12 w-80 '/>
    
                </div>
        <div className='flex flex-col '>                   
         <p className='place-self-center font-bold text-3xl  '>Move</p>
        <p className='overflow-hidden text-lg w-1/2 place-self-center mb-2  mt-4 mb-12'>
        Train your body and mind at the same time with exercises to strengthen your mental and physical well-being.</p>
            <center>
            
            <iframe width="450" height="220" src="https://www.youtube.com/embed/tbMK48EoaBA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            </center>
                </div >
                <div className='flex flex-row '>
                <img src={move12} className='-rotate-12 w-80' />
                </div>
                </div>
  )
}

export default Move