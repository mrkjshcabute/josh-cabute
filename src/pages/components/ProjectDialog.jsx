import React from 'react'

const ProjectDialog = ({ project }) => {
  return (
    <dialog id={project.id} className="modal backdrop-blur-sm bg-white">
      <div className="modal-box p-0 h-[60vh] max-w-2xl">
        <form method="dialog">
          <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
        </form>
        <div className='grid grid-cols-2 h-[60vh] gap-4'>
          <div className="h-full flex-shrink-0">
            <img src={project.display} className='h-full w-full object-cover' />
          </div>
          <div className='flex flex-col gap-4 py-4 pr-4 overflow-y-auto hide-scrollbar'>
            <p className='text-[12px] font-medium'>Project {project.id}</p>
            <h3 className="font-bold text-[20px] text-[#395886] leading-none">{project.title}</h3>

            {project.tools && (
              <div className='flex gap-2'>
                {project.tools.map((tool, index) => (
                  <img src={tool.icon} key={index} className='w-8 h-8 bg-[#D5DEEF] rounded-full p-1' />
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
  )
}

export default ProjectDialog
