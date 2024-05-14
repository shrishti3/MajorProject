import React, { useEffect, useState } from 'react'
import user from '../assets/user.png';
import user1 from '../assets/user/photo3.jpeg'
const TherapistCard = () => {
const [list,setList]=useState([]);

    useEffect(()=>{
        const userList= async()=>{
            try{
                const response = await fetch(`http://localhost:5000/api/data`);
                const data = await response.json();
                setList(data);
            }catch (error){
                console.log("error searching for the users", error);
            }
        }
        userList();
},[setList]);
console.log(list);

// const img= new Image();
// img.src = list[4].image;
// img.onload = function(){
//    canvas.width = img.width;
//    canvas.height = img.height;
//    const ctx = canvas.getContext('2d');
//   // Draw the image on the canvas
//   ctx.drawImage(img, 0, 0);

//   // Convert the canvas to a new image format (e.g., JPEG)
//   const newImageData = canvas.toDataURL('image/jpeg');

//   // Create a new image element with the new format
//   const newImg = new Image();
//   newImg.src = newImageData;

// }


  return (
  list.map((ListData)=>{
    return(
    <div className='shadow-lg shadow-gray-500/50'>
        <div className='grid grid-cols-4 border-2 border-gray rounded-lg p-8 bg-white '>
            <div className='flex border-r-2 justify-center bg-gray-50'>
                <img src={ListData.contact===9198466002?user:user1} className='rounded-full w-32 h-32 border-4 border-yellow-300 rounded-full mt-8' />
            </div>
            <div className='col-span-3 flex flex-col pl-4 '>
                <div className='flex flex-row justify-between '>
                    <p className='text-2xl font-bold'> {ListData.name} </p>
                    <p className='border-2 border-gray-100 px-2 py-1'>{ListData.speciality}</p>
                </div>
                <div className='text-sm'>
                {ListData.caption}
                </div>
                <div className='pt-3'>
                    <p>
                    {ListData.details}
                    </p>
                    <div className='flex flex-row justify-between mt-4'>
                        <p className='bg-yellow-400 rounded-lg px-4 py-2'> Schedule a meet </p>
                        <p className='text-md font-bold'>{ListData.contact}</p>
                    </div>
                </div>
            </div>
        </div>

    </div>
     ) })
  )
}

export default TherapistCard