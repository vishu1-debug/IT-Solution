import React from 'react'
import Image from 'next/image'

const Navbar = () => {
  return (
    <div><header className="text-white body-font">
    <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
      <a className="flex title-font font-medium items-center text-white mb-4 md:mb-0">
        
         <Image
                 src="/img/Circle-icon.png"
                 alt="Image"
                 width={30} 
                 height={30} 
                 className="ml-25"
               />
        <span className="ml-1 ">FLYINGFEATHER IT</span>
      </a>
      <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
        <a className="mr-5 hover:text-black">HOME</a>
        <a className="mr-5 hover:text-black">About Us</a>
        <a className="mr-5 hover:text-black">Services</a>
        <a className="mr-5 hover:text-black">Careers</a>
        <a className="mr-5 hover:text-black">Contant</a>
      </nav>
      <a className="mr-5 hover:text-black ml-10">Login</a>
      <button className="inline-flex items-center  border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">Let's talk
       
      </button>
    </div>
  </header></div>
  )
}

export default Navbar