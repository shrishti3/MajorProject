import React from 'react'


const ArticleCard = (props) => {
  var {data} = props;
  console.log(data,"nn");
  return (
      <div className='flex flex-col'>
        <a href={data.Link}>
      <div className='relative'>
          <img src={data.image} className='h-64 w-72 rounded-xl hover:scale-90'/>
          <p className='bg-white rounded-full px-4 py-1 m-2 top-0 absolute'>{data.name}</p>
          <p className='pt-2 font-semibold'>{data.Text}</p>
      </div>
      </a>
  </div>
  )
}

export default ArticleCard