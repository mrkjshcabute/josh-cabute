import React from 'react'
import { IoClose } from "react-icons/io5";

const ProjectDialog = ({ project }) => {
  return (
    <dialog id={project.id} className="modal backdrop-blur-sm">
      <div className="modal-box p-0 h-[60vh] max-w-2xl">
        <form method="dialog">
          <button className="btn btn-circle btn-ghost absolute right-2 top-2">
            <IoClose className='text-[24px]'/>
          </button>
        </form>
        <div className='flex flex-col sm:flex-row h-[60vh] gap-4 bg-[#F5F5F7]'>
          <div className="h-[30vh] sm:h-full w-full sm:w-1/2 flex-shrink-0">
            <img src={project.display} className='h-full w-full object-cover' />
          </div>
          <div className='flex flex-col h-full gap-4 py-4 pr-4 overflow-y-auto hide-scrollbar mx-4 sm:mx-0 scroll-smooth'>
            <p className='text-[16px] font-medium'>Project {project.id}</p>
            <h3 className="font-bold text-[24px] text-[#395886] leading-none">{project.title}</h3>

            {project.tools && (
              <div className='flex gap-2'>
                {project.tools.map((tool, index) => (
                  <img src={tool.icon} key={index} className='w-8 h-8 bg-[#D5DEEF] rounded-full p-1' />
                ))}
              </div>
            )}

            <div>
              <h4 className='font-semibold text-[20px]'>About</h4>
              <p className='text-[16px] text-[#626262]'>{project.details}</p>
            </div>

            <div>
              <h4 className='font-semibold text-[20px]'>Features</h4>
              {project.features && (
                <ul className='list-disc list-outside space-y-1 text-[16px] text-[#626262] ml-6'>
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
  )
}

export default ProjectDialog
