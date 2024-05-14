import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import meditate_img from '../assets/podcasts/meditate.png'
import GetStartedBy from '../assets/home/getstartedbg.svg'
import studyAudio from '../assets/audio/study.mp3';
import { CountdownCircleTimer } from 'react-countdown-circle-timer'

const Meditate = () => {
  const [seconds,setSeconds] = useState(30);
  const [minutes,  setMinutes] = useState(1);
  const [breaks, setBreaks] = useState(false);
  var timer;


  useEffect(()=>{
    timer = setInterval(()=>{
    setSeconds(seconds-1);
    if(seconds===0){
    setMinutes(minutes-1);
    setSeconds(60);
    }
    if(minutes===0 && seconds===0 && breaks===false){
        setBreaks(true);
        setMinutes(4);
        setSeconds(60);
    }
    if(minutes==0 && seconds===0 &&  breaks===true){
      setMinutes(28);
      setSeconds(60);
      setBreaks(false);

    }
    }, 1000)
    return () =>clearInterval(timer);
  })

  const restart=()=>{
    setBreaks(false);
    setSeconds(60);
    setMinutes(28);
  }

  const stop = () =>{
clearInterval(timer);
  }
  
  
  return (
    <div className='flex-col'>
      <div>
        <Header/>
      </div>
      <div className='flex flex-row bg-sky-50'>
        <img src={GetStartedBy} className='h-1/2 w-1/2' />
        <img src={GetStartedBy} className='h-1/2 w-1/2' />
       <div className='absolute top-16 left-4 flex flex-col justify-content-center pt-8'>
          <p className='place-self-center font-bold text-xl text-yellow-400'>POMODORO</p>
          <p className='place-self-center font-bold text-5xl mt-8'>WHAT IS POMODORO TECHNIQUE? </p>
          <p className='place-self-center text-center mt-4 text-md text-center w-1/2'>The Pomodoro Technique is a time management method.The main idea behind the Pomodoro Technique is to break work into manageable intervals, allowing you to maintain focus and avoid burnout.By using the Pomodoro Technique, you can improve your productivity and manage your time more effectively. The structured intervals help you work with greater concentration while the breaks provide opportunities for rest and rejuvenation. </p>
       </div>
    </div>


    <div className='grid grid-cols-2 gap-6 justify-center justify-items-center mt-8'>
    <div>
     <div className='flex flex-col justify-items-center'>
      <p className='place-self-center text-5xl'>Timer
      </p>
      <div className='place-self-center'>
      <div className=''>
    
        <h1 className='text-3xl mt-4'>{minutes<10 ? "0"+minutes:minutes} : {seconds<10 ?"0"+seconds:seconds}</h1>
    </div>
      </div>
      <div className='place-self-center'>
      <button className='bg-sky-400 px-8 py-3 rounded-xl mr-5' onClick={restart}>Restart</button>
      <button className='bg-sky-400 px-8 py-3 rounded-xl' onClick={stop}>Stop</button>
      
      </div>
      </div>
      <div className='flex justify-center justify-items-center'>
      <p className={` ${breaks? 'text-red-500' : 'text-green-500'} font-bold text-2xl `}>{breaks ? 'Have a break' : 'Its focus time! Lets Work Together '}</p>
      </div>
      </div>
      <div className=' text-3xl mt-4'>
      <p className='font-semibold'> Need peaceful focus music? 
       Play here!
       </p>
       
       <audio controls className="place-self-center decoration-none border-none mt-10">
    <source src={studyAudio} type="audio/mpeg" />
    </audio>
      </div>
    </div>


    <div className='mt-16 ml-16 grid grid-cols-5 bg-gray-100 mr-16 rounded-xl p-6'>
      <div className='col-span-2'>
      <p className='font-bold text-3xl justify-between mb-4'>How to use a Promodro Feature </p>
      <p className='text-xl'>This is an excellent feature that can help users integrate spiritual learning into their daily routine and promote a healthier work-life balance.</p>
      <div className='flex pt-4'>
      <p className='font-bold text-xl '>1.</p>
      <p className='text-xl '>Set a timer for 25 minutes and work on your task.</p>
        </div>
        <div className='flex pt-4'>
          <p className='font-bold text-xl'>2.</p>
          <p className='text-xl'>
          After 25 minutes, take a 5-minute break. An alert will be there to read a Bhagavad Gita shloka with explanation.
          </p>
        </div>
        <div className='flex pt-4'>
          <p className='font-bold text-xl'>3.</p>
          <p className='text-xl'>After 4 breaks, take a 30-minute break.</p>
        </div>
        <div className='flex pt-4'>
          <p className='font-bold text-xl'>4.</p>
          <p className='text-xl'>Repeat the process until you complete all the tasks.</p>
        </div>
        <div>
          <p className='text-xl pt-6 font-bold'>Good Luck!</p>
        </div>
        </div>
        <div className=''>
            
        </div>
       <div className='col-span-2 justify-content-end bg-gradient-to-r from-amber-100 to-sky-100 rounded-full mr-32'>
      <img src={meditate_img}  className='w-4/5 justify-items-center' />
      </div>
    </div>
 
    

</div>
  )
}

export default Meditate