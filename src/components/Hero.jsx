import React from 'react'

const Hero = () => {
  return (
    <div className='absolute top-0 w-full h-[600px] p-5 rounded-bl-[80px] bg-gradient-to-t from-lightred to-verylightred overflow-hidden flex flex-col justify-center items-center text-center text-white'>
       
       <img className='absolute bottom-5 left-[100px] scale-[3]' src="./src/assets/images/bg-pattern-intro-mobile.svg" alt="Round background pattern" />

       <div className='absolute p-5'>
            <h1 className='text-4xl'>A modern <span className='whitespace-nowrap md:whitespace-normal'>publishing platform</span> </h1>
            <p className='mt-5 text-xl opacity-80'>Grow your audience and build your online brand</p>
            <div className='hero--btns mt-10 w-full px-4 flex justify-between gap-4'>
                <button className='bg-white text-red-400 py-3 w-2/4  font-semibold rounded-full'>Start for Free</button>
                <button className='bg-transparent outline outline-1 py-3 w-2/4 font-semibold rounded-full'>Learn More</button>
            </div>
        </div>
        
    </div>
  )
}

export default Hero
