import React from 'react'
import Navbar from '../components/navbar'
import Footer from '../components/Footer'
import { url } from 'inspector'
import Image from 'next/image'


const about = () => {
  return (
    <div>
      <Navbar/>
      {/* <div className='bg-cover bg-center h-screen' style={{ backgroundImage: url('/img/about/background.png')}}> */}
        <div>
          <div>
            <h2>To Know More About What Differentiates Us From Others</h2>
            <p>We are a trailblazing IT service provider with a mission to empower businesses across industries to thrive in the digital era.</p>
          </div>
          <div>CURIOUS</div>
        </div>
        <div className='flex justify-between'>
          <div>
            <h2>OUR VISION</h2>
            <h1>Leading the Way in Technology</h1>
            <p>At FFiT, our vision is clear: to be at the forefront of technology and lead the industry by delivering exceptional IT solutions. We strive to redefine IT excellence through our expertise, dedication and forward-thinking approach. Our vision drives us to explore emerging technologies and harness their potential to create..</p>
            <button className="text-black border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">More Detials
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </button>
          </div>
          <div className='flex'>
               <Image
                 src="/img/about/Rectangle 96.png"
                 alt="Image"
                 width={100} 
                 height={100}
               />
               </div>
        </div>
        <div className='flex justify-between'>
        <div className='flex'>
               <Image
                 src="/img/about/Rectangle 97.png"
                 alt="Image"
                 width={100} 
                 height={100}
               />
               </div>
               <div>
                <h2>OUR STORY</h2>
                <h1>Shaping the Future Since Inception</h1>
                <p>FFiT was founder in 2023 by a group of passionate tech enthusiasts who envisioned a world where businesses leverage the power of technology to drive growth and innovation. Since then, our journey has been one of continuous learning, growth snd client success. Over the years, we have evolved into a dynamic team of...</p>
                <button className="text-black border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">More Detials{''}
                   <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                    -&gt;
                  </span>
                </button>
               </div>
          </div>
            <div>
          <div>
            <h1>What Differentiates Us From Others</h1>
            <p>Expertise and innovation, customer-Centric Approach, Impact and innovation</p>
            <ul>
              <li>
                <h2>Empowering your Vision</h2>
                <p>We pride ourselves on being adaptive to the everchanging technology landscape, ensuring that our clients always benefit the latest advancements.</p>
              </li>
              <li>
                <h2>Your Success is Our Purpose</h2>
                <p>Our clients are at the heart of everything we do. We understand that each business is unique that's why we take the time to listen, understand your goals, challenges, and vision.</p>
              </li>
              <li>
                <h2>Empowering Your Business</h2>
                <p>From optimising to enhancing customer experiences our solutions lay the foundation for sustainable growth and a competitive advantage.</p>
              </li>
            </ul>
          </div>
          <div>
          <Image
                 src="/img/about/image 5.png"
                 alt="Image"
                 width={100} 
                 height={100}
               />
          </div>
          <section class="text-black-600 body-font">
  <div class="container px-5 py-24 mx-auto">
    <div class="flex flex-wrap w-full mb-20">
      <div class="lg:w-1/2 w-full mb-6 lg:mb-0">
        <h1 class="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">Pitchfork Kickstarter Taxidermy</h1>
        <div class="h-1 w-20 bg-indigo-500 rounded"></div>
      </div>
      <p class="lg:w-1/2 w-full leading-relaxed text-gray-500">Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke farm-to-table. Franzen you probably haven't heard of them man bun deep jianbing selfies heirloom prism food truck ugh squid celiac humblebrag.</p>
    </div>
    <div class="flex flex-wrap -m-4">
      <div class="xl:w-1/4 md:w-1/2 p-4">
        <div class="bg-gray-100 p-6 rounded-lg">
          {/* <img class="h-40 rounded w-full object-cover object-center mb-6" src="https://dummyimage.com/720x400" alt="content"> */}
          <h3 class="tracking-widest text-indigo-500 text-xs font-medium title-font">SUBTITLE</h3>
          <h2 class="text-lg text-gray-900 font-medium title-font mb-4">Chichen Itza</h2>
          <p class="leading-relaxed text-base">Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.</p>
        </div>
      </div>
      <div class="xl:w-1/4 md:w-1/2 p-4">
        <div class="bg-gray-100 p-6 rounded-lg">
          {/* <img class="h-40 rounded w-full object-cover object-center mb-6" src="https://dummyimage.com/721x401" alt="content"> */}
          <h3 class="tracking-widest text-indigo-500 text-xs font-medium title-font">SUBTITLE</h3>
          <h2 class="text-lg text-gray-900 font-medium title-font mb-4">Colosseum Roma</h2>
          <p class="leading-relaxed text-base">Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.</p>
        </div>
      </div>
      <div class="xl:w-1/4 md:w-1/2 p-4">
        <div class="bg-gray-100 p-6 rounded-lg">
          {/* <img class="h-40 rounded w-full object-cover object-center mb-6" src="https://dummyimage.com/722x402" alt="content"> */}
          <h3 class="tracking-widest text-indigo-500 text-xs font-medium title-font">SUBTITLE</h3>
          <h2 class="text-lg text-gray-900 font-medium title-font mb-4">Great Pyramid of Giza</h2>
          <p class="leading-relaxed text-base">Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.</p>
        </div>
      </div>
      <div class="xl:w-1/4 md:w-1/2 p-4">
        <div class="bg-gray-100 p-6 rounded-lg">
          {/* <img class="h-40 rounded w-full object-cover object-center mb-6" src="https://dummyimage.com/723x403" alt="content"> */}
          <h3 class="tracking-widest text-indigo-500 text-xs font-medium title-font">SUBTITLE</h3>
          <h2 class="text-lg text-gray-900 font-medium title-font mb-4">San Francisco</h2>
          <p class="leading-relaxed text-base">Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.</p>
        </div>
      </div>
    </div>
  </div>
</section>
      {/* </div> */}
      <Footer/>
    </div>
      </div>
    
  )
}

export default about