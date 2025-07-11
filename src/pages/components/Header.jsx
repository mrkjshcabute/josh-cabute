import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { IoIosMenu } from "react-icons/io";

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const navigate = useNavigate();

    const handleNavigate = (path) => {
        navigate(path);
        setIsMenuOpen(false); 
    };
  return (
    <div className='relative'>
      {/* Top bar */}
      <div className='flex justify-between items-center px-8 md:px-12 pt-4'>
        <div className='w-16 h-16 rounded-full bg-gray-200'></div>

        <div>
          <IoIosMenu 
            className='text-[40px] cursor-pointer' 
            onClick={() => setIsMenuOpen(!isMenuOpen)} 
          />
        </div>
      </div>

      {/* Dropdown Menu */}
      {isMenuOpen && (
        <div className='absolute right-12 mt-4 bg-white shadow-lg rounded-lg p-4 space-y-2 z-50'>
          <button 
            onClick={() => handleNavigate('/')} 
            className='block text-left w-full hover:text-blue-600'
          >
            Home
          </button>
          <button 
            onClick={() => handleNavigate('/projects')} 
            className='block text-left w-full hover:text-blue-600'
          >
            Projects
          </button>
          <button 
            onClick={() => handleNavigate('/about')} 
            className='block text-left w-full hover:text-blue-600'
          >
            About
          </button>
        </div>
      )}
    </div>
  )
}

export default Header
