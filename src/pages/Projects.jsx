import React, { useState } from 'react';
import Header from './components/Header'
import BlueCrop from "../assets/bg/Botton1.png"
import { Search } from 'lucide-react';
import { Ellipsis, Heart, MessageCircle, Send, Bookmark } from 'lucide-react';
import JoshPf from "../assets/img/josh-pf.png"
import { projectData } from "../data/ProjectData.jsx"

const Projects = () => { 
    const toolOptions = ['All', 'HTML', 'React', 'Vue'];
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedTool, setSelectedTool] = useState('All');

    const filtered = projectData.filter((proj) => {
      const matchSearch = proj.title.toLowerCase().includes(searchQuery.toLowerCase());
      const matchTool =
        selectedTool === 'All' ||
        proj.toolNames.some((tool) => tool.toLowerCase() === selectedTool.toLowerCase());

      return matchSearch && matchTool;
    });

  return (
    <div>
      <div className='bg-hero pb-12'>
        <Header />
        <h2
          className="text-center font-bold text-[72px] md:text-[120px] text-transparent leading-none py-8"
          style={{
              WebkitTextStroke: '4px #395886',
          }}
          >
          PROJECTS
        </h2>

        <div className='text-center text-[#626262] text-[20px] md:text-[24px] mb-12 text-wrap mx-4'>
          <p>A clean space for the things I’ve built. Thoughtful interfaces. Code that works. </p>
          <p>Welcome to the Joshboard!</p>
        </div>
      </div>

      <img src={BlueCrop} className='w-full h-20 rotate-180 -mt-10'/>

      <div className='bg-[#D5DEEF] p-8 px-16'>
        <div className="relative w-full">
          <input
            placeholder="Search"
            className="w-full py-4 px-4 outline-[#b6ccd7] hover:outline-[#b6ccd7] bg-white rounded-xl focus:outline-2 focus:outline-[#b6ccd7]"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <Search size={40} className="absolute right-3 top-1/2 -translate-y-1/2 text-[#626262] rounded-full p-2 pointer-events-none" />
        </div>

        <div className='flex flex-wrap gap-2 mt-4'>
          {toolOptions.map((tool) => (
            <button
              key={tool}
              onClick={() => setSelectedTool(tool)}
              className={`px-3 py-1 rounded-full text-sm font-medium ${
                selectedTool === tool
                  ? 'bg-[#395886] text-white'
                  : 'bg-[#F5F5F7] text-[#395886]'
              }`}
            >
              {tool}
            </button>
          ))}
        </div>
        
        <div className='mt-12'>
          <div className='grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4'>
            {filtered.length > 0 ? (
              filtered.map((project) => (
                <div key={project.id} onClick={()=>document.getElementById(project.id).showModal()} className=' bg-white rounded-lg p-4 space-y-4 shadow-lg'>
                  <div className='flex justify-between items-center'>
                    <div className='flex items-center space-x-2'>
                      <img src={JoshPf} className='w-8 h-8 rounded-full object-cover' />
                      <p className='text-[12px] font-semibold'>Project {project.id}</p>
                    </div>
                    <Ellipsis />
                  </div>
                  <img src={JoshPf} className='w-full h-68 object-cover' />

                  <div>
                    <h4 className='text-[20px] font-semibold leading-none'>{project.title}</h4>
                    <p className='text-[16px] text-[#626262] font-medium'>{project.year}</p>
                  </div>
                  
                  <div className='flex justify-between'>
                    <div className='flex space-x-2'>
                      <Heart fill='red' color='red'/>
                      <MessageCircle />
                      <Send />
                    </div>
                    <Bookmark />
                  </div>

                  <dialog id={project.id} className="modal backdrop-blur-sm">
                    <div className="modal-box p-0 h-[60vh] max-w-2xl">
                      <form method="dialog">
                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                      </form>
                      <div className='flex h-[60vh] gap-4'>
                        <div className="h-full flex-shrink-0">
                          <img src={project.display} className='h-full object-cover'/>
                        </div>
                        <div className='flex flex-col gap-4 py-4 pr-4 overflow-y-auto hide-scrollbar'>
                          <p className='text-[12px] font-medium'>Project {project.id}</p>
                          <h3 className="font-bold text-[20px] text-[#395886] leading-none">{project.title}</h3>
                          {project.tools && (
                            <div className='flex gap-2'>
                              {project.tools.map((tool, index) => (
                                <img src={tool.icon} key={index} className='w-8 h-8 bg-[#D5DEEF] rounded-full p-1'/>
                              ))}
                            </div>
                          )}
                          <div>
                            <h4 className='font-semibold text-[16px]'>About</h4>
                            <p className='text-[12px] text-[#626262]'>{project.details}</p>
                          </div>
                          <div>
                            <h4 className='font-semibold text-[16px]'>Features</h4>
                            {project.features && (
                              <ul className='list-disc list-outside space-y-1 text-[12px] text-[#626262] ml-3'>
                                {project.features.map((feature, index) => (
                                  <li key={index}>{feature}</li>
                                ))}
                              </ul>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  </dialog>
                </div>
              ))
            ) : (
              <p className='text-gray-500'>No projects found.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Projects
