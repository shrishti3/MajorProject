import React from 'react'
import wakeup11 from '../assets/mobile/wakeup11.png';
import wakeup12 from '../assets/mobile/wakeup12.png';


const Wakeup = () => {
  return (
    <div className='flex flex-row px-16 cursor-pointer'>

<div className='flex flex-row'>
            <img src={wakeup11} className='rotate-12 w-80 '/>

            </div>
    <div className='flex flex-col '>                   
     <p className='place-self-center font-bold text-3xl'>Wake up</p>
    <p className='overflow-hidden text-lg w-1/2 place-self-center mb-12 mt-4'>
    Inspiring stories and mini-meditations delivered daily to help you start your morning right
        </p>

             <center> 
        <iframe width="450" height="220" src="https://www.youtube.com/embed/ZmISyAE71Cc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
             </center>
            </div >
            <div className='flex flex-row '>
            <img src={wakeup12} className='-rotate-12 w-80' />
            </div>
            </div>
  )
}

export default Wakeup