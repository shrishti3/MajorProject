import React from 'react'
import Header from '../components/Header';
import GetStartedBy from '../assets/home/getstartedbg.svg'
import Podcast_img from '../assets/podcasts/podcast.png';
import tick from '../assets/podcasts/tick-icon.svg';

const Podcast = () => {
  return (
    <div className='flex-col'>
      <div>
        <Header/>
      </div>
      <div className='flex flex-row bg-sky-50'>
        <img src={GetStartedBy} className='h-1/2 w-1/2' />
        <img src={GetStartedBy} className='h-1/2 w-1/2' />
       <div className='absolute top-16 left-1/4 flex flex-col justify-content-center pt-8'>
          <p className='place-self-center font-bold text-xl text-yellow-400'>PODCAST</p>
          <p className='place-self-center font-bold text-5xl mt-8'>Happiful: Finding What Works</p>
          <p className='place-self-center text-center mt-4 text-md mt-3'>We are all individuals and it’s time for us to find what works for us.<br/> In our podcast, Happiful: Finding What Works, host Kat Nicholls talks <br/> to professionals in the wellness space and those <br/> with lived experience to understand what it means for something to ‘work’  <br/>and the steps we can take to find what works for us.  </p>
       </div>
      
    </div>

    
    <div className='bg-sky-50 pt-16 pb-16'>
    <p className='text-4xl font-semibold ml-16'>Pure Meditation</p>
      <div className='grid grid-cols-5'>
        <div className='col-span-3 p-8'>
        <iframe src="https://open.spotify.com/embed/artist/5pDpKXDZXe97W5nPVRQo8A?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
      </div>
      <div className=' mt-8 mr-4'>
      <iframe src="https://open.spotify.com/embed/track/7HiXppm6M9RtJCdx5jMHNL?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
      </div>
      <div className=' mt-8 mr-4'>
      <iframe src="https://open.spotify.com/embed/track/7ywNEAXgv5AEoL1bD4qRUk?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
      </div>
      <div>
      </div>
      </div>
      </div>

      <div className=''>
      <p className='text-4xl font-semibold mt-8 ml-16'>Top Podcasts On Mental Health</p>
      <div className='grid grid-cols-5'>
      <div className='py-16 pl-4 mr-4'>
      <iframe src="https://open.spotify.com/embed/episode/2ztMqMFImYrquGwlQUto1t?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
      </div>
      <div className='py-16 pl-4 mr-4'>
      <iframe src="https://open.spotify.com/embed/episode/4BNGWe69Pw8k1Q9EIQtzGI?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
      </div>
        <div className='py-16 pl-4 mr-4'>
        <iframe src="https://open.spotify.com/embed/episode/6hnWGi3HJOjbfLlJdQFMoa?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
      </div>
      <div className='py-16 pl-4 mr-4'>
      <iframe src="https://open.spotify.com/embed/episode/5g5InUJ3wTKB8XaQTlGRP4?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
      </div>
      <div className='py-16 pl-4 mr-4'>
      <iframe src="https://open.spotify.com/embed/episode/0A1EjnLfPMvUjJuISXTKF6?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
      </div>

      </div>
      </div>

    <div className='bg-sky-50'>
      <p className='text-4xl font-semibold mt-8 ml-16'>Sri Krishna Meditation</p>
      <div className='grid grid-cols-5'>
      <div className=' mt-16 pl-8'>
      <iframe src="https://open.spotify.com/embed/track/5Gpcx6ZA84crgZGV25t59s?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
      </div>
      <div className=' mt-16 pl-8 '>
      <iframe src="https://open.spotify.com/embed/track/7ywNEAXgv5AEoL1bD4qRUk?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
      </div>
        <div className='col-span-3 py-16 pl-4 mr-4'>
        <iframe src="https://open.spotify.com/embed/playlist/2fM4jTPIlOuqdZxHZSDAMS?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
      </div>
      </div>
      </div>
      
      

    <div className='bg-gray-50 flex flex-row p-16'>
      <div className='flex flex-row gap-16'>
        <img src={Podcast_img} className='h-96 w-96' />
        <div className='flex flex-col justify-center ml-32'>
        <p className='text-5xl font-semibold mb-6'>What To Expect</p>
        <div className='flex flex-row gap-2 text-xl mb-2 mb-6'>
          <img src={tick} className='w-5 h-5 mt-1' />
        <p>A 360° approach to wellness: our mental, physical and emotional health. </p>
        </div>
        <div className='flex flex-row gap-2  text-xl mb-2 mb-6  text-justify'>
          <img src={tick} className='w-5 h-5 mt-1' />
          <p>Solution-focused episodes involving professionals and those with lived experience.</p>
        </div>
        
        <div className='flex flex-row gap-2  text-xl mb-2'>
          <img src={tick} className='w-5 h-5 mt-1' />
          <p>Looking at what works for us, individually and as a society.</p>
        </div>
        <div className='flex flex-row gap-2  text-xl mb-2'>
          <img src={tick} className='w-5 h-5 mt-1' />
          <p>‘Exhale’ episodes to help you put what you’ve learnt into practice.</p>
          </div>
          <div className='flex flex-row gap-2  text-xl mb-2'>
          <img src={tick} className='w-5 h-5 mt-1' />
          <p>A slower, more mindful way of consuming content.</p>
          </div>
        </div>
      </div>
       </div>
    </div>
  )
}

export default Podcast