import React from 'react'
import { FiArrowUp } from "react-icons/fi";
import { LiaCopyright } from "react-icons/lia";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { TbBrandGithubFilled } from "react-icons/tb";

const Footer = () => {
  return (
    <div className='bg-[#395886] text-[#F5F5F7] p-8  md:p-12 px-8 md:px-16 flex flex-col gap-8 md:gap-4'>
      <div className='mb-4 md:mb-8'>
        <p className='text-[16px] md:text-[20px] text-gray-200'>I'm excited to hear from you!</p>
        <h4 className='font-semibold text-[20px] md:text-[28px] Red-Hat leading-none'>mrkjshcabute@gmail.com</h4>
      </div>

      <div className='flex flex-col gap-2'>
        <div className='flex gap-2'>
            <div className='border-1 p-2 rounded-full w-fit'>
                <a href='' target='_blank'>
                    <FaFacebookF className='text-[16px]'/>
                </a>
            </div>
            <div className='border-1 p-2 rounded-full w-fit'>
                <a href='' target='_blank'>
                    <FaInstagram className='text-[16px]'/>
                </a>
            </div>
            <div className='border-1 p-2 rounded-full w-fit'>
                <a href='' target='_blank'>
                    <FaLinkedinIn className='text-[16px]'/>
                </a>
            </div>
            <div className='border-1 p-2 rounded-full w-fit'>
                <a href='' target='_blank'>
                    <TbBrandGithubFilled className='text-[16px]'/>
                </a>
            </div>
        </div>
        <div className='flex items-center gap-1'>
            <LiaCopyright className='text-[20px] text-gray-200'/>
            <p className='text-[16px] font-semibold'>2025 <span className='font-normal text-gray-200'>| All rights reserved</span></p>
        </div>
      </div>

      <div className='flex justify-between items-end'>
        <FiArrowUp className='bg-[#F5F5F7] text-[#395886] p-2 rounded-full text-[40px] mb-2 md:mb-4' onClick={() => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }} />
        <h2 className='font-bold text-[4rem] sm:text-[6rem] md:text-[8rem] leading-none Red-Hat'>Josuah</h2>
      </div>
    </div>
  )
}

export default Footer
