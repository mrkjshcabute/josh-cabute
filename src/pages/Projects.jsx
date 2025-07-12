import React, { useState, useEffect } from 'react';
import Header from './components/Header'
import BlueCrop from "../assets/bg/Botton1.png"
import { Search } from 'lucide-react';
import { Ellipsis, Heart, MessageCircle, Send, Bookmark } from 'lucide-react';
import JoshPf from "../assets/img/josh-pf.png"
import { projectData } from "../data/ProjectData.jsx"
import ProjectDialog from './components/ProjectDialog.jsx';
import Footer from './components/Footer.jsx';
import { IoPersonSharp } from "react-icons/io5";
import ProjectCard from './components/ProjectCard.jsx';

const Projects = () => { 
    const toolOptions = ['All', 'HTML', 'React', 'Vue', 'Vite', 'Python'];
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedTool, setSelectedTool] = useState('All');
    const [showLinks, setShowLinks] = useState(false);

    const toggleLinks = (e) => {
      e.stopPropagation();
      setShowLinks((prev) => !prev);
    };

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
    <div className='scroll-smooth overflow-x-hidden'>
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
            className="w-full py-4 px-4 outline-[#b6ccd7] hover:outline-[#395886] bg-white rounded-xl focus:outline-1 focus:outline-[#395886]"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <Search size={40} className="absolute right-3 top-1/2 -translate-y-1/2 text-[#626262] rounded-full p-2 pointer-events-none" />
        </div>

        <div className='flex flex-nowrap overflow-x-auto hide-scrollbar gap-2 mt-4'>
          {toolOptions.map((tool) => (
            <button
              key={tool}
              onClick={() => setSelectedTool(tool)}
              className={`px-4 py-1 rounded-full text-sm font-medium cursor-pointer transition-all duration-300 ${
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
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 pb-20'>
            {filtered.length > 0 ? (
              filtered.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))
            ) : (
              <p className='text-gray-500'>No projects found.</p>
            )}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default Projects
