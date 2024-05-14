import React, { useEffect, useState } from 'react'
import  Header  from '../components/Header'

import home1 from '../assets/home/homeing.png';
import Cloudbg from '../assets/home/cloud-bg-cut.jpg';
import checkmark from '../assets/home/check-mark.png';
import college1 from '../assets/home/college1.svg';
import college2 from '../assets/home/college2.svg';
import college3 from '../assets/home/college3.svg';

import college5 from '../assets/home/college5.svg'
import icon1 from '../assets/home/icon1.png';
import icon2 from '../assets/home/icon2.png';
import icon3 from '../assets/home/icon3.png';
import icon4 from '../assets/home/icon4.png';
import mag1 from '../assets/home/Magzine/magzine.png'
import mag2 from '../assets/home/Magzine/magzine1.png'
import mag3 from '../assets/home/Magzine/magzine3.png'
import vector1 from '../assets/home/Vector1.svg';
import Getstarted from '../components/Getstarted';

const Home = () => {
  const [showpara1, setShowPara1] = useState(true);
  const [showpara2, setShowPara2] = useState(false);
  const [showpara3, setShowPara3] = useState(false);
  const [showpara4, setShowPara4] = useState(false);
 
  const hideParagraph1 = ()=>{
    if(showpara1==false){
    setShowPara1(true);
    }
  else{
      setShowPara1(false);
  }
  }
 
  const hideParagraph2 = ()=>{
    if(showpara2==false){
    setShowPara2(true);
    }
  else{
      setShowPara2(false);
  }
  }
 
  const hideParagraph3= ()=>{
    if(showpara3==false){
    setShowPara3(true);
    }
  else{
      setShowPara3(false);
  }
  }
 
  const hideParagraph4 = ()=>{
    if(showpara4==false){
    setShowPara4(true);
    }
  else{
      setShowPara4(false);
  }
  }
 
  

  return (
    
    <div className=''>
      <div>
      <Header />
      </div>

      <div className='relative'>
      <img src={Cloudbg}/>
      <div className='absolute flex flex-col pl-2 left-1/3 top-32'>
        <p className='text-6xl font-bold pl-12 '>
            Make your life a </p>
     <span className='text-6xl font-bold' >little more Happiful </span>
        <p className='ml-48 py-4 bg-sky-200 text-black font-bold rounded-lg w-32 pl-8 mt-8'>
                   Join Now
        </p>
        
        <div className='flex flex-row gap-8 mt-8'>
          <div className='flex flex-row gap-2'>
        <img src={checkmark} className='w-6 h-6'/>
          <p className='font-bold'>
            No account needed 
          </p>
          </div>
          <div className='flex flex-row gap-2'>
          <img src={checkmark} className='w-6 h-6'/>
          <p className='font-bold'>
            Free to connect
          </p>
          </div>
         <div className='flex flex-row gap-2'>
          <img src={checkmark} className='w-6 h-6'/>
          <p className='text-black font-bold'>
              Online and face to face 
          </p>
          </div>
        </div>
       
        </div>
        <div className='flex flex-row justify-around flex-wrap relative z-0'>
            <div className='flex flex-row flex-wrap bg-sky-100 rounded-3xl pl-8 pr-8 py-16 gap-14 border-1'>
               <img src={college1} className='w-64 h-16'/>
               <img src={college2} className='w-64 h-16'/>
               <img src={college3} className='w-64 h-16'/>
               <img src={college5} className='w-64 h-16'/>
                </div>
        
        </div>
      </div>

  < p className='font-bold text-4xl ml-32 flex justify-center mt-16'> One platform, multiple touchpoints</p>
      <div className='bg-gradient-to-t from-sky-100 to-white  '>
          <div className='flex flex-row place-items-center ml-32'>
            <div>
            <p className='font-bold text-3xl mb-8'>We support students, no matter what they're dealing with.</p>
            <ul>
              <li className='mt-4'>
                <div className='flex'>
                <img src={icon2} className='w-8 h-8'/>
                <p onClick={hideParagraph1} className='cursor-pointer font-bold'>Personalized therapist-led support groups</p>
              </div>
              { showpara1 && (
                <p className=''> Weekly virtual groups, consisting of 5-10<br/>students and a licensed clinician, custom-<br/>tailored to each students needs, lived<br/> experiences, and personality type. <br/>
                <span className='pl-4'>Our program, rooted in the latest evidence- <br/> based practices, helps students build an inclusive community that understands the complexity <br/> of their experiences and supports them as they <br/> move forward. </span></p>
              )}
              </li>
              <li className='mt-4'>
              <div className='flex'>
              <img src={icon1} className='w-8 h-8'/>
               <p onClick={hideParagraph2} className='cursor-pointer  font-bold'> 1:1 check-ins with casually competent therapist</p>
               </div>
               { showpara2 && (
                <p className=''> Weekly virtual groups, consisting of 5-10<br/>students and a licensed clinician, custom-<br/>tailored to each students needs, lived<br/> experiences, and personality type. <br/>
                <span className='pl-4'>Our program, rooted in the latest evidence- <br/> based practices, helps students build an inclusive community that understands the complexity <br/> of their experiences and supports them as they <br/> move forward. </span></p>
              
              )}
              </li>
              <li className='mt-4'>
              <div className='flex'>
              <img src={icon3} className='w-8 h-8'/>
                <p onClick={hideParagraph3} className='cursor-pointer  font-bold'>Real-time SMS support</p>
                </div>
                { showpara3 && (
                <p className=''> Weekly virtual groups, consisting of 5-10<br/>students and a licensed clinician, custom-<br/>tailored to each students needs, lived<br/> experiences, and personality type. <br/>
                <span className='pl-4'>Our program, rooted in the latest evidence- <br/> based practices, helps students build an inclusive community that understands the complexity <br/> of their experiences and supports them as they <br/> move forward. </span></p>
              
              )}
              </li>
              <li className='mt-4'>
                <div className='flex'>
              <img src={icon4} className='w-8 h-8'/>
                <p onClick={hideParagraph4} className='cursor-pointer  font-bold'>Interactive mental health resource library </p>
                </div>
                { showpara4 && (
               <p className=''> Weekly virtual groups, consisting of 5-10<br/>students and a licensed clinician, custom-<br/>tailored to each students needs, lived<br/> experiences, and personality type. <br/>
               <span className='pl-4'>Our program, rooted in the latest evidence- <br/> based practices, helps students build an inclusive community that understands the complexity <br/> of their experiences and supports them as they <br/> move forward. </span></p>
             )}
              </li>
            </ul> 
          </div>
          
          <div className='flex place-content-center relative'>
           
            <img src={vector1} className='w-64 h-48 absolute right-3/4 top-1/3' />
           
          <img src={home1} className='w-2/3 place-items-' />
          
          <img src={vector1} className='w-64 h-48 absolute left-3/4 top-1/3 rotate-90' />
           
           
          </div>
          </div>
         
   </div>
     

 
    <div className='bg-gradient-to-b from-sky-100 to-white pt-32 pl-32'>
        <div className='flex flex-row gap-4'>
         <div className='flex flex-col gap-8'>
            <p className='font-bold text-5xl'>Happiful Magzine</p>
            <p className='text-lg'>These is filled with guidance, insightful articles, <br/>and personal interviews, all aimed at nurturing a sense of positive mental health and wellbeing.</p>
        </div>
        <div className='flex flex-row gap-8 mr-32'>
            <a href="https://shop.happiful.com/product/happiful-magazine-Issue-74/" target="_blank">
                  <img src={mag1} className='w-full h-73 rounded-xl' />
            </a>
            <a href='https://shop.happiful.com/product/happiful-magazine-Issue-73/' target="_blank">
            <img src={mag2} className=' h-73 rounded-xl' />
            </a>
            <a href='https://shop.happiful.com/product/happiful-magazine-Issue-75/' target="_blank">
            <img src={mag3} className=' h-73 rounded-xl' />
            </a>
            
            
        </div>
        </div>
   </div> 
   <div className=''>
    
    <Getstarted/>
   </div>
   
        
       
    </div>
  )
}

export default Home

