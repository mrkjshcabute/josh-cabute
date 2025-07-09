import React from 'react'
import Header from './components/Header'
import JoshPf from "../assets/img/josh-pf.png"
import JoshMap from "../assets/img/josh-map.png"
import { FaHtml5, FaReact, FaVuejs, FaNpm, FaNodeJs, FaGitAlt, FaGithub } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa6";
import { DiJavascript, DiMaterializecss } from "react-icons/di";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiPrimevue, SiQuasar } from "react-icons/si";

const About = () => {
  return (
    <div className='overflow-x-hidden'>
      <Header />

      <div className='bg-about text-center text-[#B1C9EF] text-[100px] md:text-[140px] lg:text-[200px] font-semibold'>
        <div className='drop-shadow-xl leading-none py-8'>ABOUT ME</div>
      </div>

      <div className='flex flex-col items-center justify-center'>
        <img src={JoshPf} className='w-48 h-48 rounded-full object-cover -mt-24 z-20'/>
        <div className='mt-4 text-center'>
          <div className='flex flex-col md:flex-row gap-2'>
            <h3 className='font-bold text-[24px]'>Mark Josuah J. Cabute</h3>
            <h4 className='font-normal text-[24px]'>/jos-wa/</h4>
          </div>
          <p className='text-[#626262] text-[16px]'>Front-End Developer</p>
        </div>
      </div>

      <div className='md:relative grid grid-cols-1 md:grid-cols-2'>
        <ul className="timeline timeline-vertical mt-20 w-[140%]">
          <li>
            <hr className='bg-[#B1C9EF]'/>
            <div className="timeline-start text-[18px] text-right mx-8 w-[60%] py-12">A front-end developer quietly obsessed with clean code and clever design.</div>
            <div className="timeline-middle rounded-full h-4 w-4 bg-[#B1C9EF]"> 
            </div>
            <hr className='bg-[#B1C9EF]'/>
          </li>
          <li>
            <hr className='bg-[#B1C9EF]'/>
            <div className="timeline-start text-[18px] text-right mx-8 w-[60%] py-8">Finds joy in crafting smooth, user-friendly interfaces with thoughtful attention to detail.</div>
            <div className="timeline-middle rounded-full h-4 w-4 bg-[#B1C9EF]"> 
            </div>
            <hr className='bg-[#B1C9EF]'/>
          </li>
          <li>
            <hr className='bg-[#B1C9EF]'/>
            <div className="timeline-start text-[18px] text-right mx-8 w-[60%] py-12">Always striving to hit that perfect balance between design and development.</div>
            <div className="timeline-middle rounded-full h-4 w-4 bg-[#B1C9EF]"> 
            </div>
            <hr className='bg-[#B1C9EF]'/>
          </li>
        </ul>

        <div className='mt-20 mx-8 md:absolute md:top-0 md:left-[40%]'>
          <div className="text-[18px] w-full md:w-[60vw] xl:w-200">
            <h4 className='text-[#395886] font-bold text-[20px]'>Technology Stacks</h4>
            <div className='flex flex-wrap gap-4 bg-[#F0F3FA] justify-center md:justify-start p-4 md:px-8 shadow-xl border-1 border-black rounded-2xl md:mr-20 mt-4'>
              <div className='flex items-center gap-2 bg-white p-1 px-4 rounded-full shadow-md'>
                  <FaHtml5 className='text-[#ff5733]'/>
                  HTML
              </div>
              <div className='flex items-center gap-2 bg-white p-1 px-4 rounded-full shadow-md'>
                  <FaCss3Alt className='text-[#264de4]'/>
                  CSS
              </div>
              <div className='flex items-center gap-2 bg-white p-1 px-4 rounded-full shadow-md'>
                  <DiJavascript className='text-[#F0DB4F]'/>
                  JavaScript
              </div>
              <div className='flex items-center gap-2 bg-white p-1 px-4 rounded-full shadow-md'>
                  <FaReact className='text-[#61DBFB]'/>
                  React
              </div>
              <div className='flex items-center gap-2 bg-white p-1 px-4 rounded-full shadow-md'>
                  <FaVuejs className='text-[#42B883]'/>
                  Vue
              </div>
              <div className='flex items-center gap-2 bg-white p-1 px-4 rounded-full shadow-md'>
                  <RiTailwindCssFill className='text-[#3490dc]'/>
                  Tailwind
              </div>
              <div className='flex items-center gap-2 bg-white p-1 px-4 rounded-full shadow-md'>
                  <DiMaterializecss className='text-[#ee6e73]'/>
                  Materialize
              </div>
              <div className='flex items-center gap-2 bg-white p-1 px-4 rounded-full shadow-md'>
                  <SiPrimevue className='text-[#42B883]'/>
                  PrimeVue
              </div>
              <div className='flex items-center gap-2 bg-white p-1 px-4 rounded-full shadow-md'>
                  <SiQuasar className='text-[#1976d2]'/>
                  Quasar
              </div>
              <div className='flex items-center gap-2 bg-white p-1 px-4 rounded-full shadow-md'>
                  <FaNpm className='text-[#cc3534]'/>
                  NPM
              </div>
              <div className='flex items-center gap-2 bg-white p-1 px-4 rounded-full shadow-md'>
                  <FaNodeJs className='text-[#339933]'/>
                  Node JS
              </div>
              <div className='flex items-center gap-2 bg-white p-1 px-4 rounded-full shadow-md'>
                  <FaGitAlt className='text-[#f1502f]'/>
                  Git
              </div>
              <div className='flex items-center gap-2 bg-white p-1 px-4 rounded-full shadow-md'>
                  <FaGithub />
                  Github
              </div>
            </div>
          </div>

          <div className="text-[18px] mt-8 w-full md:w-[60vw] xl:w-200">
            <h4 className='text-[#395886] font-bold text-[20px]'>Interesting Hobbies</h4>
            <div className='flex flex-wrap gap-4 bg-[#F0F3FA] p-4 px-8 shadow-xl border-1 border-black rounded-2xl md:mr-20 mt-4 md:h-40 items-center'>
              <p className='text-center'>Code by day. Stories, soundtracks, and series by night. My escape? Wattpad chapters, cinematic worlds, and music that feels like a second heartbeats.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full h-60 md:h-120 overflow-hidden mt-20">
        <iframe
          className="w-full h-full"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3859.650801657522!2d121.20268651083981!3d14.675747975172982!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397bd6cdc0d11e5%3A0xa7557b19575b7569!2sPurok%203%20%2C%20Pintong%20Bukawe!5e0!3m2!1sen!2sph!4v1751527283289!5m2!1sen!2sph"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>

      <div className='flex justify-center mb-20'>
        <img src={JoshMap} className='w-[80%] md:w-[60%] h-40 sm:h-60 md:h-90 object-cover object-center rounded-xl -mt-24 md:-mt-50 z-24' />
      </div>

    </div>
  )
}

export default About
