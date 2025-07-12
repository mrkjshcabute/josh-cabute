import { useState } from 'react';
import { IoPersonSharp } from 'react-icons/io5';
import { Ellipsis, Heart, MessageCircle, Send, Bookmark } from 'lucide-react';
import JoshPf from '../../assets/img/josh-pf.png';
import ProjectDialog from './ProjectDialog';

export default function ProjectCard({ project }) {
  const [showLinks, setShowLinks] = useState(false);

  const toggleLinks = (e) => {
    e.stopPropagation();
    setShowLinks((prev) => !prev);
  };

  const hasLinks = project.live || project.github;

  return (
    <div
      key={project.id}
      onClick={() => document.getElementById(project.id).showModal()}
      className='bg-white rounded-lg p-4 space-y-4 shadow-lg scroll-smooth'
    >
      <div className='flex justify-between items-center'>
        <div className='flex items-center space-x-2'>
          <img src={JoshPf} className='w-8 h-8 rounded-full object-cover' />
          <p className='text-[16px] font-semibold'>Project {project.id}</p>
        </div>
        <Ellipsis />
      </div>

      <div className='relative'>
        <img src={project.display} className='w-full h-68 object-cover object-center' />

        {hasLinks && (
          <button
            className='absolute left-2 bottom-2 rounded-full bg-gray-600 cursor-pointer'
            onClick={toggleLinks}
          >
            <IoPersonSharp className='text-white h-8 w-8 p-2' />
          </button>
        )}

        {showLinks && (
          <div>
            {project.live && (
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="absolute top-20 left-12 bg-black/80 text-white text-[14px] p-1 px-2 rounded-md after:content-[''] after:absolute after:top-full after:left-1/2 after:-translate-x-1/2 after:border-6 after:border-x-transparent after:border-b-transparent after:border-t-black/80"
              >
                Website
              </a>
            )}

            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="absolute bottom-16 right-16 bg-black/80 text-white text-[14px] p-1 px-2 rounded-md after:content-[''] after:absolute after:top-full after:left-1/2 after:-translate-x-1/2 after:border-6 after:border-x-transparent after:border-b-transparent after:border-t-black/80"
              >
                Github
              </a>
            )}
          </div>
        )}
      </div>

      <div>
        <h4 className='text-[20px] font-semibold leading-none'>{project.title}</h4>
        <p className='text-[16px] text-[#626262] font-medium'>{project.year}</p>
      </div>

      <div className='flex justify-between'>
        <div className='flex space-x-2'>
          <Heart fill='red' color='red' />
          <MessageCircle />
          <Send />
        </div>
        <Bookmark />
      </div>

      <ProjectDialog project={project} />
    </div>
  );
}
