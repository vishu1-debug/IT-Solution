import Image from 'next/image'
import Footer from "./components/Footer";
import Head from 'next/head';
import Navbar from "./components/navbar" 

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <div className=' bg flex min-h-screen flex-col items-center justify-between'>
        <Navbar/>
      {/* <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <p className="fixed left-0 top-0 text-white flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-1 lg:dark:bg-zinc-800/30">
        FlyingFeather IT
          
        </p>
        <nav className="container text-white">
        <div className="container1">
         <a href="/">Home</a> 
         <a href="about.js">About</a>
         <a href="/services">Services</a>
         <a href="/carrier">Carrier</a>
        <a href="/contact">Contact</a>
        </div>
        <div className="left">
        <a href="/login">Login</a>
        <a href="/talk"><button>Let's Talk</button></a>
        </div>
        </nav>
        <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
          <a
            className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"

            target="_blank"
            rel="noopener noreferrer"
          >
          </a>
        </div>
      </div> */}

      <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] ">
      < h1 className="text-center flex mb-4 max-w-2xl text-4xl font-extrabold leading-none tracking-tight dark:text-white md:text-5xl xl:text-6xl" >Experience the Future of IT Solutions</h1>
      </div>
      <p className="text-center flex m-0 max-w-[70ch] text-white">Our mission is to empower businesses like yours by providing top-notch IT solution that address your specified needs. Let's embark on a transformative journey together. het started now and unlock the full potential of your business!</p>
      <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
        

        <a
          href=""
          className="text-cente group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold text-white `}>
          GET IN TOUCH{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
        </a>
      </div>
      </div>
      <h1 className=" mb-5 text-3xl font-semibold dark:text-blue ">Our Futuristic IT Solutions</h1>
        <div className="fun">
          <div className="fut text-center bg-white-500 hover:bg-blue-500 text-black hover:text-white p-4 transition duration-300">
          <div className="flex items-center justify-center p-5">
          <Image
                 src="/img/groupp.png"
                 alt="Image"
                 width={80} 
                 height={80} 
                 className="ml-25"
               />
               </div>
            <h2 className="mb-3 text-2xl font-semibold">Moblie app development</h2>
              <p>Our Time of highlyu skilled and experience mobile app engineers crafts stunning application using the latest technology stack, including the populer choice, Flutter. Your ideas, brought to life in the palm of your users hands.</p>
           </div>
          <div className="fut text-center  bg-white-500 hover:bg-blue-500 text-black hover:text-white p-4 transition duration-300 ">
          <div className='flex items-center justify-center p-5'>
          <Image
                 src="/img/Group.png"
                 alt="Image"
                 width={80} 
                 height={80} 
                 className=" "
               />
               </div>
            <h2 className="mb-3 text-2xl font-semibold">Backend development</h2>
            <p>Seamless performance is the backbone of any successful application. Our dedicated Backend engineers, armed with expertise in technologies like Serverpod, NodeJs, Django and more ensure that your app's core functions run flawlessly.</p>
          </div>
          <div className="fut text-center bg-white-500 hover:bg-blue-500 text-black hover:text-white p-4 transition duration-300">
          <div className="flex items-center justify-center p-5">
          <Image
                 src="/img/Gro.png"
                 alt="Image"
                 width={80} 
                 height={80} 
                 className="ml-25"
               />
               </div>
            <h2 className="mb-3 text-2xl font-semibold">Devops</h2>
            <p>Navigating the cloud is made easy with our DevOps engineers. They're well-versed in leading cloud services like AWS, GCP and others, ensuring your digital infrastructure operates seamlessly scales efficiently and stays secure.</p>
          </div>
        
        </div>
        <a
          href=""
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            VIEW MORE{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
        </a>
        <div className="list">
          <div>
            <h1 className=" mb-5 text-3xl font-semibold dark:text-blue ">Everything you need in one place</h1>
            <ul className='ml-20'>
              <li>rstjhrjtyek</li>
            </ul>
          </div>
          <div>
          <Image
                 src="/img/illustration.png"
                 alt="Image"
                 width={350} 
                 height={350} 
                 className="ml-25"
               />
          </div>
        </div>
        <div className="ever text-center ">
          <div className=" mt-8 ">
            <div className=" fut " >
            <div className='flex items-center justify-center p-5'>
            <Image
                 src="/img/robot.png"
                 alt="Image"
                 width={30} 
                 height={20} 
                 className=""
               />
               </div>
              <h2 className="mb-3 text-2xl font-semibold">Artifical Intelligence</h2>
              <p>Enhance customer support and engagement with AI-powered chatbots.</p>
            </div>
            <div className="fut mt-8">
              <div className='flex items-center justify-center p-5'>
            <Image
                 src="/img/shield-lock.png"
                 alt="Image"
                 width={30} 
                 height={20} 
                 className="ml-25"
               />
               </div>
              <h2 className="mb-3 text-2xl font-semibold">Cybersecurity Automation</h2>
              <p>Strengthen your cybersecurity defences and response.</p>
            </div>
          </div>
          <div className=" ">
            <div className="fut">
              <div className='flex items-center justify-center p-5'>
             <Image
                 src="/img/cloud-cog.png"
                 alt="Image"
                 width={30} 
                 height={20} 
                 className="ml-25"
               />
               </div>
              <h2 className="mb-3 text-2xl font-semibold">Cloud-Native Application</h2>
              <p>Embrace the power of cloud-native application for increased scalability, agility and cost-effectiveness.</p>
            </div>
            <div className='mt-8  fut '>
              <div className='flex items-center justify-center p-5'>
               <Image
                 src="/img/access-point.png"
                 alt="Image"
                 width={30} 
                 height={20} 
                 className="ml-25"
               />
               </div>     
              <h2 className="mb-3 text-2xl font-semibold">Internet of Things(IoT)</h2>
              <p>Monitor, analyze and optimize IoT devices and operations in real-time.</p>
              </div>
          </div>
          <div className="flex justify-start">
          <div className="ml-24 mt-40 text-left">
            <h1 className='mb-3 text-3xl font-semibold'>Popular IT Services Features</h1>
            <p className='ml-25'>From AI-drive chatbots to cloud-native application our services are designed to elevate your performance and provide a campetitive edge.</p>
            <a
          href=""
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            MORE DETAILS{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
        </a>
          </div>
          </div>
      </div>
      <div className=" flex justify-between">
        <div className=' ml-24'>
        <Image
                 src="/img/Groupboy.png"
                 alt="Image"
                 width={450} 
                 height={350} 
               />
        </div>
        <div className='ml-24'>
        <div className=''>
          <h1 className="mb-3 text-3x1 font-semibold">Technologies we use to collaborate with our clients</h1>
          <ul className=" ml-24 ">
            <li className='list-inside list-disc'>
              <h2 className="mb-3 text-2xl font-semibold">Web Frontend</h2>
              <p>JavaScript, HTML5, CSS3, React, Angular</p>
            </li>
            <li>
              <h2 className="mb-3 text-2xl font-semibold">Backend</h2>
              <p>Node Js, Django, Magneto</p>
            </li>
            <li>
              <h2 className="mb-3 text-2xl font-semibold">Cloud</h2>
              <p>AWS Cloud, Google Cloud</p>
            </li>
            <li>
              <h2 className="mb-3 text-2xl font-semibold">Databases</h2>
              <p>MySQL, MongoDB</p>
            </li>
          </ul>
        </div>
        </div>
      </div>
      <h1 className="mb-3 text-2xl font-semibold">What Other Say About Us</h1>
      {/* TEAM */}
      <section className="text-black body-font">
        <h1 className="mb-3 text-2xl font-semibold text-center">Our Teams</h1>
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-wrap -m-4">
      <div className="lg:w-1/3 lg:mb-0 mb-6 p-4">
        <div className="h-full text-center">
          <image
           className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100" />
          <p className="leading-relaxed">A Senior Product Designer leads the design strategy and execution for digital products, ensuring user-centered, aesthetically pleasing, and functional designs that align with business goals and user needs.</p>
          <span className="inline-block h-1 w-10 rounded bg-indigo-500 mt-6 mb-4"></span>
          <h2 className="text-black font-medium title-font tracking-wider text-sm">Raju Kumar</h2>
          <p className="text-gray-500">Senior Product Designer</p>
        </div>
      </div>
      <div className="lg:w-1/3 lg:mb-0 mb-6 p-4">
        <div className="h-full text-center">
          <image 
          className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100" />
          <p className="leading-relaxed">A UI developer specializes in creating the user interface of web applications, focusing on layout, design, and interactivity to enhance user experience and ensure effective communication.</p>
          <span className="inline-block h-1 w-10 rounded bg-indigo-500 mt-6 mb-4"></span>
          <h2 className="text-blue font-medium title-font tracking-wider text-sm">Vishwajeet Kumar</h2>
          <p className="text-gray-500">UI Develeoper</p>
        </div>
      </div>
      <div className="lg:w-1/3 lg:mb-0 p-4">
        <div className="h-full text-center">
          <image
           className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100" />
          <p className="leading-relaxed">
                A Chief Technology Officer (CTO) is a high-level executive responsible for technology strategy, innovation, and managing the technical aspects of a company, ensuring alignment with business goals.</p>
          <span className="inline-block h-1 w-10 rounded bg-indigo-500 mt-6 mb-4"></span>
          <h2 className="text-blue font-medium title-font tracking-wider text-sm">Vishu kumar</h2>
          <p className="text-gray-500">CTO</p>
        </div>
      </div>
    </div>
  </div>
</section>
{/* Ind */}
<h1 className="mb-3 text-2xl font-semibold">Industry Expertise</h1>
<div className='flex flex-wrap'>
  <div className='md:mr-8 text-center'>
    <div className='w-48 h-48 border border-black-500 md:mt-8 rounded-lg p-5 bg-white-500 hover:bg-blue-500 text-black hover:text-white transition duration-300'>
    <div className='flex items-center justify-center p-5'>
    <Image
      src="/img/edu.png"
      alt="Image"
      width={30} 
      height={20} 
      // className="ml-25"
     />
     </div>
     <div>
     <a  href=""
          className="group rounded-lg transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
     <h2 className='mb-3 text-xs font-semibold mt-6'>EDUCATION</h2>
     </a>
     </div>
    </div>
    <div className='h-48 w-48 border border-black-500 md:mt-8 rounded-lg p-5 bg-white-500 hover:bg-blue-500 text-black hover:text-white transition duration-300'>
    <div className='flex items-center justify-center p-5'>
       <Image
      src="/img/cargo 1.png"
      alt="Image"
      width={30} 
      height={20} 
     /></div>
     <a  href=""
          className="group rounded-lg transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
     <h2 className='mb-3 text-xs font-semibold mt-6'>LOGISTIC</h2>
     </a>
     </div>
    <div className='h-48 w-48 border border-black-500 md:mt-8 rounded-lg p-5 bg-white-500 hover:bg-blue-500 text-black hover:text-white transition duration-300'>
    <div className='flex items-center justify-center p-5'>
      <Image
      src="/img/fintech 1.png"
      alt="Image"
      width={30} 
      height={20} 
      // className="ml-25"
     />
     </div>
     <a  href=""
          className="group rounded-lg transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
     <h2 className='mb-3 text-xs font-semibold mt-6'>FIN-TECH</h2>
     </a>
     </div>
  </div>
  <div className='text-center'>
    <div className='w-48 h-48 border border-black-500 md:mt-8 rounded-lg p-5 bg-white-500 hover:bg-blue-500 text-black hover:text-white transition duration-300'>
    <div className='flex items-center justify-center p-5'>
    <Image
      src="/img/Rectangle.png"
      alt="Image"
      width={30} 
      height={20} 
      className="ml-25"
     />
     </div>
     <a  href=""
          className="group rounded-lg transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
     <h2 className='mb-3 text-xs font-semibold mt-6'>ECOMMERCE</h2>
     </a>
    </div>
    <div className='w-48 h-48 border border-black-500 md:mt-8 rounded-lg p-5 bg-white-500 hover:bg-blue-500 text-black hover:text-white transition duration-300'>
    <div className='flex items-center justify-center p-5'>
    <Image
      src="/img/network 1.png"
      alt="Image"
      width={30} 
      height={20} 
      // className="ml-25"
     /></div>
     <a  href=""
          className="group rounded-lg transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
     <h2 className='mb-3 text-xs font-semibold mt-6'>SOCIL NETWORKING</h2>
     </a>
    </div>
    <div className='w-48 h-48 border border-black-500 md:mt-8 rounded-lg p-5 bg-white-500 hover:bg-blue-500 text-black hover:text-white transition duration-300'>
    <div className='flex items-center justify-center p-5'>
     <Image
      src="/img/manufacturing 1.png"
      alt="Image"
      width={30} 
      height={20} 
      // className="ml-25"
     />
     </div>
     <a  href=""
          className="group rounded-lg transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
     <h2 className='mb-3 text-xs font-semibold mt-6'>MANUFACTURING</h2>
     </a>
    </div>
  </div>
  <div className=' text-center'>
    <div className='w-48 h-48 border border-black-500 md:mt-8 md:ml-6 rounded-lg p-5 bg-white-500 hover:bg-blue-500 text-black hover:text-white transition duration-300'>
    <div className='flex items-center justify-center p-5'>
    <Image
      src="/img/education.png"
      alt="Image"
      width={30} 
      height={20} 
      // className="ml-25"
     />
     </div>
     <a  href=""
          className="group rounded-lg transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
       <h2 className='mb-3 text-xs font-semibold mt-6'>HEALTHCARS</h2>
       </a>
    </div>
    <div className='w-48 h-48 border border-black-500 md:mt-8 md:ml-6 rounded-lg p-5 bg-white-500 hover:bg-blue-500 text-black hover:text-white transition duration-300'>
    <div className='flex items-center justify-center p-5'>
    <Image
      src="/img/travel-and-tourism 1.png"
      alt="Image"
      width={30} 
      height={20} 
      // className="ml-25"
     />
     </div>
     <a  href=""
          className="group rounded-lg transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
     <h2 className='mb-3 text-xs font-semibold mt-6'>TAVEL</h2>
     </a>
    </div>
    <div className='w-48 h-48 border border-black-500 md:mt-8 md:ml-6 rounded-lg p-5 bg-white-500 hover:bg-blue-500 text-black hover:text-white transition duration-300'>
    <div className='flex items-center justify-center p-5'>
    <Image
      src="/img/gaming 1.png"
      alt="Image"
      width={30} 
      height={20} 
      // className="ml-25"
     />
     </div>
     <a  href=""
          className="group rounded-lg  transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
     <h2 className='mb-3 text-xs font-semibold mt-6'>GAMING</h2>
     </a>
    </div>
  </div>
 
</div>
<a
          href=""
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-base font-semibold`}>
            LET'S DISCUSS YOUR PROJECT{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
        </a>
      {/* Contect Section */}
      <section className="text-gray-600 body-font relative">
  <div className="container px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap">
    <div className="lg:w-2/3 md:w-1/2 bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
    <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
        fjdcfjdr
        </div>
    <Image
         src="/img/Clippath.png"
         alt="Image"
         width={450} 
         height={350} 
        />
    </div>
    <div className="lg:w-1/3 md:w-1/2 bg-white flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
      <h2 className="text-gray-900 text-lg mb-1 font-medium title-font">Feedback</h2>
      <p className="leading-relaxed mb-5 text-gray-600"></p>
      <div className="relative mb-4">
        <label htmlFor="name" className="leading-7 text-sm text-Black">Name</label> 
        {/* <input type="text" id="name" name="name" value={name} onChange={handleNameChange} className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out">  */}
      </div>
      <div className="relative mb-4">
       <label htmlFor="email" className="leading-7 text-sm text-black">Email</label>
        {/* <input type="email" id="email" name="email" class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"> */}
      </div>
      <div className="relative mb-4">
        {/* <label for="message" class="leading-7 text-sm text-gray-600">Message</label> */}
        <textarea id="message" name="message" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
      </div>
      <button className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Send</button>
      <p className="text-xs text-gray-500 mt-3"></p>
    </div>
  </div>
</section>
      <Footer/>
    </main>
  )
}
