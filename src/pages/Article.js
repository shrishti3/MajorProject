import React, { useEffect, useState } from 'react';
import axios from 'axios';

import Header from '../components/Header';
import ArticleCard from '../components/ArticleCard';
import img0 from '../assets/articles/img0.png';
import img1 from '../assets/articles/img1.png';
import img2 from '../assets/articles/img2.png';
import { Link } from 'react-router-dom';
import articleData from '../pages/articleData.json';

const Article = () => {
  return (
    <div>
      <Header />
      <div className="bg-sky-100 grid grid-cols-5 py-12 px-8">
        <div className="col-span-2">
          <p className="font-semibold text-2xl">
            Trusted mental health information
          </p>
          <p className="text-sky-700 font-semibold text-2xl">
            Make your life a little more happiful
          </p>
        </div>
        <div className="border-r-4 border-white pl-4 pr-4">
          <p className="font-bold ">Articles just for you</p>
          <p className="text-justify">
            Discover actionable mental health and wellbeing advice from our
            experts
          </p>
        </div>
        <div className="border-r-4 border-white pl-4 pr-4">
          <p className="font-bold">Topics</p>
          <p className="text-justify">
            From ADHD to anxiety, depression, spoon theory, relationships and
            beyond
          </p>
        </div>
        <div className="pl-4">
          <p className="font-bold">Verified</p>
          <p className="text-justify">
            Content checked and approved by Happiful’s in-house editorial team
          </p>
        </div>
      </div>

      <div className="grid grid-cols-5 p-8">
        <div className="col-span-3 relative">
          <Link to="https://happiful.com/5-essential-tips-for-choosing-the-right-couples-therapist-for-you">
            <img src={img0} className="rounded-lg" />
            <p className="absolute bg-white text-gray rounded-full left-4 top-4 px-6">
              RECENT
            </p>
            <p className="absolute text-3xl font-bold bottom-20 text-white pl-4">
              Articles writtern just for you! : Finding what works
            </p>
            <p className="absolute text-xl font-bold bottom-10 text-white pl-4">
              How to find moments of peace when you’re depressed
            </p>
          </Link>
        </div>

        <div className="col-span-2 px-4">
          <div className="relative">
            <Link to="https://happiful.com/20-affirmations-to-soothe-sunday-night-anxiety">
              <img src={img1} className="w-full h-1/3 rounded-xl" />
              <p className="absolute bg-white text-gray rounded-full left-4 top-4 px-6 ">
                RECENT
              </p>
              <p className="absolute text-3xl font-bold bottom-5 text-white pl-4">
                20 affirmations to soothe Sunday night anxiety
              </p>
            </Link>
          </div>

          <div className="bg-sky-900 relative rounded-lg ">
            <img src={img2} className="h-1/4 w-1/2 mt-6 p-4 hover:p-2" />
            <p className="absolute top-4 left-1/2 text-white font-semibold">
              What is behavioural activation therapy
            </p>
            <p className="absolute top-20 left-1/2 text-white ">
              Could behavioural activation help mental health?...
            </p>
          </div>
        </div>
      </div>

      <div className="pl-8 pr-8">
        <p className="text-2xl font-bold mb-4">Browse article categories</p>
        <div className="flex flex-row justify-between gap-4">
          {
            articleData.articles.map((dataToPass) =>{
              console.log(dataToPass);
              return(
             <ArticleCard data={dataToPass} key={dataToPass.id}/>)
            })
}
        </div>
        </div>
        <div>
          <hr className='mt-8 mx-8'/>
        </div>
        <div className='flex flex-row justify-between gap-4 mt-8 ml-8'>
          <div className='relative bg-orange-100 w-1/2'>
          <img src="http://res.cloudinary.com/dsjfatghw/image/upload/v1695472041/mjzn77rrehkuhkadmrvt.avif" className=' bottom-0'/>
          <p className='absolute bottom-10 left-24 bg-white px-6 py-2 rounded-xl'>Browse All </p>
          </div>
          <div className='flex flex-col ml-8'>
            
                <img src="http://res.cloudinary.com/dsjfatghw/image/upload/v1694970291/fytxfzof3ttbxtky2cvw.avif" className=' rounded-xl'/>
                <p className='my-3 text-justify w-3/4'>4 ways to trick your mind into thinking you're cold </p>
                <hr/>
                <p className='my-3 text-justify w-3/4  '>How to find meaningful work and improve your wellbeing</p>
                <hr/>
                <p className='my-3 text-justify w-3/4'>How to stop being the target of testing </p>
            
          </div>
          <div className='flex flex-col'>
           
            <img src="http://res.cloudinary.com/dsjfatghw/image/upload/v1695470055/dozvu56yzlmusjffxyjd.avif" className='rounded-xl h-full'/>
                <p className='my-3 text-justify w-3/4'>4 ways to trick your mind into thinking you're cold </p>
                <hr/>
                <p className='my-3 text-justify w-3/4'>How to find meaningful work and improve your wellbeing</p>
                <hr/>
                <p className='my-3 text-justify w-3/4'>How to stop being the target of testing </p>
            
          </div>
          <div className='flex flex-col'>
          
            <img src="http://res.cloudinary.com/dsjfatghw/image/upload/v1695470097/dely8rn482p4btsmztba.avif" className='rounded-xl '/>
            <p className='my-3 text-justify w-3/4'>4 ways to trick your mind into thinking you're cold </p>
                <hr/>
                <p className='my-3 text-justify w-3/4'>How to find meaningful work and improve your wellbeing</p>
                <hr/>
                <p className='my-3 text-justify w-3/4'>How to stop being the target of testing </p>
            
          </div>  
        </div>
        <div className="pl-8 pr-8">
        <p className="text-2xl font-bold mb-4">Browse article categories</p>
        <div className="grid grid-cols-4 justify-between gap-4">
          {
            articleData.SecondRow.map((dataToPass) =>{
              console.log(dataToPass);
              return(
             <ArticleCard data={dataToPass} key={dataToPass.id}/>)
            })
}
        </div>
        </div>
      </div>
  );
};

export default Article;
