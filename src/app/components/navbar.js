import React from 'react'
import Link from 'next/link';
import Image from 'next/image';
import contect from 'next/link';
import Script from 'next/script';
function Navbar() {
  return (
    <div><header className="text-white  body-font">
      <div className="container mx-auto flex  flex-col md:flex-row">
        <a className="flex title-font font-medium items-center md:mb-0">
          <Image
            src="/img/Circle-icon.png"
            alt="Image"
            width={40}
            height={40}
           />
          <span className="ml-3 text-xl text-white md:mr-24">FlyingFeather IT</span>
        </a>
        <nav className="md:ml-auto md:mr-auto flex text-base p-5">
          
          <ul className="flex flex-wrap">
            <li className='hover:text-black'>
              <Link href="/">
            Home
          </Link></li>
           <li className='hover:text-black'><Link href="/pages/about">
            About us
          </Link></li>
            <li className='hover:text-black'>
            <Link href={"/pages/services"}>Services</Link></li>
          <li className='hover:text-black'>
            <Link href={"/pages/contact"} >Contact</Link></li>
          <li className='hover:text-black md:ml-24 '>
            <Link href={"/pages/login"}>Login</Link></li>
            <li><button className=" hover:text-black  border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base ">Let's Talk </button>
            </li>
        </ul>
        
        </nav>
      </div>
    </header></div>
  );
}

export default Navbar