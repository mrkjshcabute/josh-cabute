import React, {useEffect} from 'react'
import { useNavigate } from 'react-router-dom';
import Header from './components/Header'
import { TbDownload } from "react-icons/tb";
import { SlSocialFacebook } from "react-icons/sl";
import { FiGithub } from "react-icons/fi";
import { LuLinkedin } from "react-icons/lu";
import { Ellipsis, Heart, MessageCircle, Send, Bookmark } from 'lucide-react';
import { FaHtml5, FaReact, FaVuejs, FaNpm, FaNodeJs, FaGitAlt, FaGithub } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa6";
import { DiJavascript, DiMaterializecss } from "react-icons/di";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiPrimevue, SiQuasar } from "react-icons/si";
import BlueCrop from "../assets/bg/Botton1.png"
import WhiteCrop from "../assets/bg/Botton.png"
import JoshPf from "../assets/img/josh-pf.png"
import { projectData } from "../data/ProjectData.jsx"
import ProjectDialog from './components/ProjectDialog.jsx';

const Home = () => {
    const navigate = useNavigate();

    const bgColors = {
        1: 'bg-[#B1C9EF]',
        2: 'bg-[#8AAEE0]',
        3: 'bg-[#638ECB]',
        4: 'bg-[#395886]',
    };

    useEffect(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, []);

  return (
    <div className='overflow-x-hidden'>
        <div className='relative bg-hero w-full h-screen flex flex-col justify-between pb-16 overflow-x-hidden'>
            <Header />

            <div className='flex flex-col justify-center items-center text-center'>
                <h2 className='text-[24px] md:text-[32px] text-[#1D1D1F] font-semibold'>FRONT-END DEVELOPER</h2>
                <h1 className='text-[80px] md:text-[160px] lg:text-[200px] leading-none mb-4 drop-shadow-xs'>JOSUAH</h1>
                <p className='text-[20px] md:text-[24px] text-wrap text-[#626262] font-medium mx-8 md:mx-20'>Crafting sleek, responsive, and interactive web interfaces with clean, modern code.</p>
            </div>

            <div className='flex justify-between items-end mx-8 md:mx-12'>
                <button className='flex space-x-2 items-center border-1 border-[#8AAEE0] rounded-xl p-2 px-4 text-[#8AAEE0] hover:bg-[#8AAEE0] hover:text-white focus:bg-[#8AAEE0] focus:text-white'>
                    <p className='font-semibold'>DOWNLOAD CV</p>
                    <TbDownload size={20}/>
                </button>

                <div className='text-[#626262] font-semibold'>
                    <a href='#' target='_blank' className='flex items-center transform -rotate-90 gap-2 absolute right-[1.5%] bottom-[14%] hover:text-[#395886] focus:text-[#395886]'>
                        <SlSocialFacebook className='leading-none'/>
                        <p className='leading-none'>FACEBOOK</p>
                    </a>
                    <a href='#' target='_blank' className='flex items-center transform -rotate-90 gap-2 absolute right-[1.8%] bottom-[44%] hover:text-[#395886] focus:text-[#395886]'>
                        <LuLinkedin className='leading-none'/>
                        <p className='leading-none'>LINKEDIN</p>
                    </a>
                    <a href='#' target='_blank' className='flex items-center transform -rotate-90 gap-2 absolute right-[2%] bottom-[70%] hover:text-[#395886] focus:text-[#395886]'>
                        <FiGithub className='leading-none'/>
                        <p className='leading-none'>GITHUB</p>
                    </a>
                </div>
            </div>
        </div>

        <img src={BlueCrop} className='w-full h-20 rotate-180 -mt-10'/>

        <div className='bg-[#D5DEEF] grid grid-cols-1 lg:grid-cols-2 gap-12 justify-center items-center  py-16 pb-32 px-8 md:px-40'>
            <div className='flex justify-center lg:justify-end w-full'>
                <div className=' bg-white rounded-lg p-4 space-y-4 shadow-lg'>
                    <div className='flex justify-between items-center'>
                        <div className='flex items-center space-x-2'>
                            <img src={JoshPf} className='w-8 h-8 rounded-full object-cover' />
                            <p className='text-[12px] font-semibold'>iamjoshjc</p>
                        </div>
                        <Ellipsis />
                    </div>
                    <img src={JoshPf} className='w-72 h-68 object-cover' />
                    <div className='flex justify-between'>
                        <div className='flex space-x-2'>
                            <Heart fill='red' color='red'/>
                            <MessageCircle />
                            <Send />
                        </div>
                        <Bookmark />
                    </div>
                </div>
            </div>

            <div className='flex flex-col space-y-4 md:space-y-8'>
                <div>
                    <h4 className='text-[24px] font-medium'>I'm Josuah,</h4>
                    <h3 className='text-[32px] font-bold'>FRONT-END DEVELOPER</h3>
                </div>

                <p className='text-[16px] text-[#626262] text-medium'>I build websites where design and code work together. Clean layouts, smooth interactions, and a Joshified touch bring every idea to life.</p>

                <div className='flex flex-wrap gap-2'>
                    <div className='flex items-center gap-2 bg-white p-1 px-2 rounded-lg shadow-md'>
                        <FaHtml5 className='text-[#ff5733]'/>
                        HTML
                    </div>
                    <div className='flex items-center gap-2 bg-white p-1 px-2 rounded-lg shadow-md'>
                        <FaCss3Alt className='text-[#264de4]'/>
                        CSS
                    </div>
                    <div className='flex items-center gap-2 bg-white p-1 px-2 rounded-lg shadow-md'>
                        <DiJavascript className='text-[#F0DB4F]'/>
                        JavaScript
                    </div>
                    <div className='flex items-center gap-2 bg-white p-1 px-2 rounded-lg shadow-md'>
                        <FaReact className='text-[#61DBFB]'/>
                        React
                    </div>
                    <div className='flex items-center gap-2 bg-white p-1 px-2 rounded-lg shadow-md'>
                        <FaVuejs className='text-[#42B883]'/>
                        Vue
                    </div>
                    <div className='flex items-center gap-2 bg-white p-1 px-2 rounded-lg shadow-md'>
                        <RiTailwindCssFill className='text-[#3490dc]'/>
                        Tailwind
                    </div>
                    <div className='flex items-center gap-2 bg-white p-1 px-2 rounded-lg shadow-md'>
                        <DiMaterializecss className='text-[#ee6e73]'/>
                        Materialize
                    </div>
                    <div className='flex items-center gap-2 bg-white p-1 px-2 rounded-lg shadow-md'>
                        <SiPrimevue className='text-[#42B883]'/>
                        PrimeVue
                    </div>
                    <div className='flex items-center gap-2 bg-white p-1 px-2 rounded-lg shadow-md'>
                        <SiQuasar className='text-[#1976d2]'/>
                        Quasar
                    </div>
                    <div className='flex items-center gap-2 bg-white p-1 px-2 rounded-lg shadow-md'>
                        <FaNpm className='text-[#cc3534]'/>
                        NPM
                    </div>
                    <div className='flex items-center gap-2 bg-white p-1 px-2 rounded-lg shadow-md'>
                        <FaNodeJs className='text-[#339933]'/>
                        Node JS
                    </div>
                    <div className='flex items-center gap-2 bg-white p-1 px-2 rounded-lg shadow-md'>
                        <FaGitAlt className='text-[#f1502f]'/>
                        Git
                    </div>
                    <div className='flex items-center gap-2 bg-white p-1 px-2 rounded-lg shadow-md'>
                        <FaGithub />
                        Github
                    </div>
                </div>
            </div>
        </div>

        <img src={WhiteCrop} className='w-full h-20 rotate-180 -mt-10'/>

        <div className=''>
            <h2
            className="text-center font-bold text-[64px] md:text-[120px] text-transparent leading-none py-8 mx-8"
            style={{
                WebkitTextStroke: '2px #395886',
            }}
            >
                FEATURED PROJECTS
            </h2>

            <div className='text-center text-[#626262] text-[20px] md:text-[24px] mb-12 text-wrap mx-8'>
                <p>Clean, responsive, purposeful.</p>
                <p>Explore the featured projects of the Joshboard.</p>
            </div>

            <div className='grid grid-cols-2 lg:grid-cols-4 mx-8 md:mx-12 gap-4'>
                {projectData.slice(0,4).map((project) => (
                    <div key={project.id} className='space-y-4'>
                        <div className={`h-[40vh] md:h-[60vh] relative flex flex-col justify-between px-4 ${bgColors[project.id] || 'bg-[#CCCCCC]'}`}>
                            <div className='flex justify-center mb-8' onClick={() => document.getElementById(project.id).showModal()}>
                                <img src={project.featuredPhoto} className='w-[40vw] h-[24vh] md:h-[40vh]'/>
                                <ProjectDialog project={project}/>
                            </div>
                            <h2 className='text-right text-[#F5F5F7] font-extrabold text-[120px] md:text-[200px] leading-none absolute -bottom-5 md:-bottom-8 right-2'>{project.id}</h2>
                        </div>
                        <div>
                            <h2 className='text-[#1D1D1F] font-semibold text-[20px] leading-none'>{project.title}</h2>
                            <p className='text-[#626262] text-[16px] font-medium'>{project.year}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>

        <div className='flex justify-end my-20'>
            <button className='bg-[#395886] text-white text-[20px] p-2 px-8 rounded-tl-2xl rounded-bl-2xl' onClick={() => navigate('/projects')} >
                See More Projects
            </button>
        </div>

    </div>
  )
}

export default Home
