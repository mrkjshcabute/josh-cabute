import React, { useState, useEffect } from 'react';
import Header from './components/Header'
import BlueCrop from "../assets/bg/Botton1.png"
import { Search } from 'lucide-react';
import { Ellipsis, Heart, MessageCircle, Send, Bookmark } from 'lucide-react';
import JoshPf from "../assets/img/josh-pf.png"
import { projectData } from "../data/ProjectData.jsx"
import ProjectDialog from './components/ProjectDialog.jsx';

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

    useEffect(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, []);

  return (
    <div>
      <div className='bg-hero pb-12'>
        <Header />
        <h2
          className="text-center font-bold text-[72px] md:text-[120px] text-transparent leading-none py-8"
          style={{
              WebkitTextStroke: '2px #395886',
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

      <div className='bg-[#D5DEEF] p-8 md:px-16'>
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
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4'>
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

                  <ProjectDialog project={project}/>
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
