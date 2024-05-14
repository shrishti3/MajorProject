import React from 'react'
import Header from '../components/Header'
import Getstartedby from '../assets/home/getstartedbg.svg';
import TherapistCard from '../components/TherapistCard';

const Therapist_detail = () => {
  return (
    <div>
        <Header />
        <div className=''>
            <div className='flex flex-row bg-sky-50'>
         <img src={Getstartedby}  className='h-1/2 w-1/2 '/>
         <img src={Getstartedby}  className='h-1/2 w-1/2'/>
         </div>
         <div className='grid grid-cols-4 absolute top-16 '>
           <div className='bg-white border-2 border-gray-200 my-24 mx-10 flex flex-col py-8 px-12 h-min shadow-lg shadow-gray-500/50'>
                <p className='text-2xl font-bold'>Filters</p>
                <hr />
                <div className='flex flex-col py-4'>
                    <p className='text-lg font-semibold pb-2'>Search by name</p>
                    <input type='text' className='px-4 py-2 rounded-lg border-2 border-gray-400' placeholder='search by name' />
                </div>
                <div className='flex flex-col py-4'>
                <label className='text-lg font-semibold'>Type of professional</label>
                <select name="dog-names" id="dog-names"> 
        <option value="rigatoni">counsellor / advisor</option> 
        <option value="dave">Therapist</option> 
        <option value="pumpernickel">Life coach</option> 
        <option value="reeses">Academic guide</option>
        <option value="reeses">Need a help</option>
        <option value="reeses">Sucide help</option> 
            </select>
            </div>  
            <hr />
            <div className='flex flex-col py-4'>
                <p className='text-lg font-semibold pb-2'>Session type</p>
                <p className='border-2 rounded-lg px-4 py-2 mb-4'>Online</p>
                <p className='border-2 rounded-lg px-4 py-2'>Telephone</p>
            </div>
            <hr />
            <div className='flex flex-col gap-2 py-4'>
                <p className='text-lg font-semibold'> Language preffered</p>
                <div>
            <input type="checkbox" value="english" />
            <label for="english" className='pl-2'>English</label>
            </div>
            <div>
            <input type="checkbox" value="tamil" />
            <label for="tamil" className='pl-2'>Tamil</label>
            </div>
            <div>
            <input type="checkbox" value="hindi" />
            <label for="hindi" className='pl-2'>Hindi</label>
            </div>
            <div>
            <input type="checkbox"  value="french" />
            <label for="french" className='pl-2'>French</label>
            </div>
            </div>
            <div className='flex justify-center'>
                <button type='submit' className='bg-sky-700 px-16 py-2 rounded-lg text-white'>Search</button>
            </div>
           </div>

           
           <div className='col-span-3 flex flex-col my-24 mx-20 '>
            <p className='text-4xl mb-2'>Professionals and Therapists Available Online</p>
            <p>1,270 results found</p>
            <div className='flex flex-col pt-12 gap-8'>
            <TherapistCard />
            <TherapistCard />
            <TherapistCard />
            <TherapistCard />
            </div>
           
           </div>
         </div>
        </div>

    </div>
  )
}

export default Therapist_detail