import React, {useState} from 'react'


const UploadImage = () => {
    const [image,setImage] = useState("");
    const submitImage = () =>{
        const data = new FormData()
        data.append("file", image)
        data.append("upload_preset", "mindwell")
        data.append("cloud_name", "dsjfatghw")
        fetch("https://api.cloudinary.com/v1_1/dsjfatghw/image/upload", {
            method:"post", 
            body:data
        }).then((res) => res.json())
        .then((data) =>{
            console.log(data);
        }).catch((err)=>{
            console.log(err)})}
    return (
        <div>
            <div>
                <input type="file" onChange={(e) =>setImage(e.target.files[0])} />
                <button onClick={submitImage}>upload</button>
            </div>
        </div>
  )
}

export default UploadImage