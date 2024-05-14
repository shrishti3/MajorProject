import React,{useState} from 'react'
import Getstartedbg from '../assets/home/getstartedbg.svg';
import Meditate from './Meditate';
import Sleep from './Sleep';
import Move from './Move';
import Wakeup from './Wakeup';
import Focus from './Focus';
const Getstarted = () => {

    const [activeSection, setActiveSection] = useState('meditate');
    

    const renderActiveSection = ()=>{
        switch(activeSection){
            case 'meditate':
                return <Meditate />;
            case 'sleep':
                return <Sleep/>
            case 'move':
                return <Move/>
            case 'wakeup':
                return <Wakeup/>  
            case 'focus':
                    return <Focus/>    
                default:
                    return <Meditate/> 
        }
      }
    
   
  return (
<div>
    <div className='flex flex-col mt-32'>
        <p className='font-bold text-6xl place-self-center'>Get started with </p>
        <p className='font-bold text-6xl place-self-center'> mindwell</p>
        <div className='place-self-center'>
        <p className='bg-sky-200 rounded-full px-8py-4 text-black font-bold px-8 py-2 text-black mt-6'>Register for more! </p>
        </div>
    </div>
    <div className='flex justify-center place-content-center mt-16 relative'>
    <div className='absolute flex flex-row gap-8 top-0'>
            <p className='top-0 bg-sky-300 z-40 px-6 py-1 rounded-lg hover:bg-sky-400' onClick={()=> setActiveSection('meditate')} >Meditate</p>
            <p className='top-0 bg-sky-300 z-30 px-6 py-1 rounded-lg hover:bg-sky-400' onClick={()=> setActiveSection('sleep')} >Sleep</p>
            <p className='top-0 bg-sky-300 z-20 px-6 py-1 rounded-lg hover:bg-sky-400' onClick={()=> setActiveSection('move')} >Move</p>
            <p className='top-0 bg-sky-300 z-10 px-6 py-1 rounded-lg hover:bg-sky-400' onClick={()=> setActiveSection('focus')}>Focus</p>
            <p className='top-0 bg-sky-300 z-0 px-6 py-1 rounded-lg hover:bg-sky-400'  onClick={()=> setActiveSection('wakeup')}>Wake up</p>
            </div>
            <img src={Getstartedbg} className='w-9/12 place-self-center '/>
           <div className='absolute flex flex-col justify-center top-1/4'>
            { renderActiveSection()}
                

                 {/* { showSleep && (

                    <div className='flex flex-col'>
                        <p className='place-self-center font-bold text-3xl mb-8 '>Meditate</p>
                        <p className='overflow-hidden text-lg w-1/2 place-self-center mb-2 mt-12'>
                            Learn to manage feelings and thoughts  with the
                            
                            lifelong skill of everyday mindfulness, any time of 
                            the day. Listen to Basics: Session 1 - 5 min</p>

                            <audio controls className="place-self-center rounded-none border-none mt-3">
                    <source src={Meditate_audio} type="audio/mpeg" />
                    </audio>
                                </div>
                    )}
                    
                { showMove&& (

                <div className='flex flex-col'>
                    <p className='place-self-center font-bold text-3xl mb-8 '>Meditate</p>
                    <p className='overflow-hidden text-lg w-1/2 place-self-center mb-2 mt-12'>
                        Learn to manage feelings and thoughts  with the
                        
                        lifelong skill of everyday mindfulness, any time of 
                        the day. Listen to Basics: Session 1 - 5 min</p>

                        <audio controls className="place-self-center rounded-none border-none mt-3">
                <source src={Meditate_audio} type="audio/mpeg" />
                </audio>
                            </div>
                )} */}

                                </div>
                        </div>
                    </div>
                )
                }

export default Getstarted