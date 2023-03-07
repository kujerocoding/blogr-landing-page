import React from 'react'

const Hero = () => {
  return (
    <div className='absolute w-full top-0 flex flex-col justify-center items-center text-center text-white my-36 z-10'>
             
       <div className='p-5 flex flex-col items-center'>
            <h1 className='text-4xl md:text-6xl'>A modern <span className='whitespace-nowrap md:whitespace-normal'>publishing platform</span> </h1>
            <p className='mt-5 text-xl opacity-80'>Grow your audience and build your online brand</p>
            <div className='hero--btns mt-10 w-4/5 px-4 flex justify-between gap-4 md:justify-center'>
                <button className='bg-white text-red-400 py-3 w-2/4 md:w-1/4 font-semibold rounded-full hover:bg-lightred hover:text-white'>Start for Free</button>
                <button className='bg-transparent outline outline-1 py-3 w-2/4 md:w-1/4 font-semibold rounded-full hover:bg-white hover:text-lightred'>Learn More</button>
            </div>
        </div>
        
    </div>
  )
}

export default Hero
