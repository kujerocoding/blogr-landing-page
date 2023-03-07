import React from 'react'

const Body = () => {
  return (
    <main className='mt-24 text-center flex justify-center flex-col items-center overflow-x-hidden'>

      <h2 className='px-10 md:text-3xl'>Designed for the future</h2>

      <div className='md:grid md:grid-cols-2'>
        <img className='w-full md:hidden' src="./src/assets/images/illustration-editor-mobile.svg" alt="editor illustration"/>
        <img className='w-full hidden md:block md:col-start-2 md:translate-x-40 md:scale-125 md:-translate-y-24 ' src="./src/assets/images/illustration-editor-desktop.svg" alt="editor illustration"/>
        <div className='md:row-start-1 md:text-left md:pl-20'>
        <h2>Introducing an extensible editor</h2>
        <p>Blogr features an exceedingly intuitive interface which lets you focus on one thing: creating content. The editor supports management of multiple blogs and allows easy manipulation of embeds such as images, videos, and Markdown. Extensibility with plugins and themes provide easy ways to add functionality or change the looks of a blog.</p>
        <h2>Robust content management</h2>
        <p>Flexible content management enables users to easily move through posts. Increase the usability of your blog by adding customized categories, sections, format, or flow. With this functionality, you're in full control.</p>
        </div>
      </div>
     
     {/*  absolute -top-44 left-0 z-20 md:-top-16 md:left-16 */}

      <div className='relative w-full bg-gradient-to-b from-darkgrayblue to-darkdesaturatedblue rounded-tr-[80px] rounded-bl-[80px]  mt-60 md:grid md:grid-cols-2 md:items-center'>

        <div className='relative w-full h-[300px] md:h-[400px] rounded-[inherit]'>
          <img className='absolute -top-48 md:-top-20 z-20 md:ml-12' src="./src/assets/images/illustration-phones.svg" alt="phones illustration" />
        </div>
        
        <div className='absolute w-full h-full top-0 left-0 overflow-hidden rounded-[inherit]'>
            <img className='absolute z-10 -top-[100px] scale-125 md:scale-75 md:-top-[500px] md:-left-[300px] ' src="./src/assets/images/bg-pattern-circles.svg" alt="circles pattern" />
        </div>

        <div className='relative my-10 md:mt-0 md:col-start-2 md:text-left md:pr-24 z-30'>
          <h2 className=' text-white text-4xl pt-10 md:pt-0'>State of the Art Infrastructure</h2>  
          <p className=' text-grayblue md:leading-8'>With reliability and speed in mind, worldwide data centers provide the backbone for ultra-fast connectivity. This ensures your site will load instantly, no matter where your readers are, keeping your site competitive.</p>
        </div>

      </div>

      <div className='my-24'>
        <img className='w-full' src="./src/assets/images/illustration-laptop-mobile.svg" alt="laptop illustration" />
        <h2>Free, open, simple</h2>
        <p>Blogr is a free and open source application backed by a large community of helpful developers. It supports features such as code syntax highlighting, RSS feeds, social media integration, third-party commenting tools, and works seamlessly with Google Analytics. The architecture is clean and is relatively easy to learn.</p>
        <h2> Powerful tooling</h2>
        <p>Batteries included. We built a simple and straightforward CLI tool that makes customization and deployment a breeze, but capable of producing even the most complicated sites.</p>
      </div>
      
    </main>
  )
}

export default Body
