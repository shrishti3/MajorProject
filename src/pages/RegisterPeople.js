import React, { useEffect, useState } from 'react'
import axios from "axios";
import Header from '../components/Header';

const RegisterPeople = () => {
    const[added, setAdded] = useState(false);
    const[name,setName] = useState("counsellor");
    const[speciality, setSpeciality] = useState("");
    const[contact, setContact] = useState("");
    const[email, setEmail]=useState("");
    const[caption, setCaption] = useState("");
    const[details,setDetails] = useState("");
    const [image, setImage] = useState({myFile : ""});

    const handleOptionChange = (event) => {
        setSpeciality(event.target.value);
      }

      const handleFileUpload = async(e) =>{
          const file= e.target.files[0];
          const base64 = await convertToBase64(file);
          console.log(typeof(base64))
          setImage({...image, myFile:base64});
      }

      const convertToBase64=(file) =>{
          return new Promise((resolve, reject) =>{
            const fileReader = new FileReader();
            fileReader.readAsDataURL(file);
            fileReader.onload = () =>{
              resolve(fileReader.result)
            };
            fileReader.onerror = (error) =>{
              reject(error)
            }
          })
      }
   
    
    const handleFormSubmit = async (e) =>{
        e.preventDefault();
        console.log(image);
        const person = {
                name:name,
                speciality:speciality,
                contact:contact,
                email:email,
                caption:caption,
                details:details,
                image:image,
               
                
        }
        try{
            await axios.post("http://localhost:5000/people",person).then((res) =>{
                if(res.data=="newPerson"){
                    alert("person added successfully");
                    console.log("done");
                }else if(res.data == "alreadyexist"){
                    alert("user exists");
                    console.log(e);
                }
            }).catch((e)=>{
                alert("add all feilds");
                console.log(e);
            })
        }catch(e){
            console.log(e);
        }
    }

  return (
   <div>
    <Header/>
    <div className="bg-sky-100 grid grid-cols-5 py-12 px-8">
        <div className="col-span-2">
          <p className="font-semibold text-2xl">
            Be a part of our amazing team and help your friends in need!
          </p>
          </div>
          </div>
    <div className='grid grid-cols-2'>      
    <div className='bg-gray-100'>
       
    <form onSubmit={handleFormSubmit} encrypte="multipart/form-data" >
    <div className='flex flex-col bg-white p-8 w-4/6 justify-between ml-24 mt-16 gap-1'>
        <p className='text-xl'>Enter you Name</p>
        <input type='text' onChange={(event) => setName(event.target.value)} className='border-2 rounded-lg h-8 '/>
        <label for="dropdown" className='text-xl'>Speciality</label>
        <select id="dropdown" name="speciality" className='border-2 rounded-xl py-1'  value={speciality} onChange={handleOptionChange}>
        <option value="counsellor">Counsellor/advisor</option>
        <option value="therapist">Therapist</option>
        <option value="LifeCoach">Life Coach</option>
        <option value="AcademicGuide">Academic Guide</option>
        <option value="SucideHelp">Sucide Help</option>
        <option value="NeedAFriend">Need a friend</option>
        </select>
        <p className='text-xl'>contact</p>
        <input type='text' onChange={(event) => setContact(event.target.value)} className='border-2 rounded-lg h-8 '/>
        <p className='text-xl'>email</p>
        <input type='email' onChange={(event) => setEmail(event.target.value)} className='border-2 rounded-lg h-8'/>
        <p className='text-xl'>caption</p>
        <input type='text' onChange={(event) => setCaption(event.target.value)} className='border-2 rounded-lg h-8'/>
       
        <p className='text-xl'>details</p>
        <input type='text' onChange={(event) => setDetails(event.target.value)} className='border-2 rounded-lg h-8' />
       
        <p className='text-xl'>file</p>
        <input type="file" onChange={(event) => handleFileUpload(event)} className='border-2 rounded-lg h-8' name='file'/>
       
        <button type="submit" className="mt-12 border-2 bg-sky-900 text-yellow-50 rounded-lg p-3">
			Sign me up!
		</button>
    </div>
    </form>
    </div>
    <div className='bg-gray-50 flex justify-center place-items-end'>
    <img src="http://res.cloudinary.com/dsjfatghw/image/upload/v1696189766/jd042l8ivtq8fuo1lyy2.png" className='h-4/5'/>
    </div>
    </div>
   </div>

// "http://res.cloudinary.com/dsjfatghw/image/upload/v1696185306/nedtiq2vh53mlgmegyuo.png"
  )
}

export default RegisterPeople