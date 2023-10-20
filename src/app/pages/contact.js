import React from 'react'
import Navbar from '../components/navbar'
import Footer from '../components/footer'


function contact() {
  return (
    <div>
      <Navbar/>
      <div className='bg-cover bg-center h-screen' style={{ backgroundImage: url('/img/about/background.png')}}>
        <div>
          <h1>Unleash Your Business's Creativity with</h1>
          <h1>Custom Software Development</h1>
          <button className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Get In Touch
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </button>
          </div>      
      </div>  
      <section className="text-black body-font relative">
  <div className="container px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap">
    <div className="lg:w-2/3 md:w-1/2 bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
    <div className=''>
    <div className="flex justify-center items-center ">
      <h2 className='mb-3 text-2xl font-semibold text'> Get In Touch</h2>
    </div>
    <Image
         src="/img/Clippath.png"
         alt="Image"
         width={600} 
         height={300} 
        />
    </div>
    </div>
    <div className="lg:w-1/3 md:w-1/2 bg-white flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
      <h2 className="text-gray-900 text-lg mb-1 font-medium title-font">Feedback</h2>
      <p className="leading-relaxed mb-5 text-gray-600"></p>
      <div className="relative mb-4">
        <label htmlFor="name" className="leading-7 text-sm text-Black">Name</label> 
        <input type="text" id="name" name="name" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
      </div>
      <div className="relative mb-4">
       <label htmlFor="email" className="leading-7 text-sm text-black">Email</label>
        <input type="email" id="email" name="email" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
      </div>
      <div className="relative mb-4">
        <label htmlFor="message" className="leading-7 text-sm text-gray-600">Message</label>
        <textarea id="message" name="message" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-black py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
        </div>
      <button className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Send</button>
        <p className="text-xs text-gray-500 mt-3"></p>
        </div>
       </div>
      </section> 
      <div>
        <h1>Why people love to work with us</h1>
      </div>
      <div>
        <p>From AI-drive chatbots to cloud-native applications our services are designed to elevate your performance and provide a competitive edge.</p>
        <button className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Get In Touch
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </button>
      </div>
      <div>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <Footer/>
    </div>
  )
}

export default contact