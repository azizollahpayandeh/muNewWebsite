import React from 'react'

export default function Menu() {
  return (
    <>
        <div>
            <div className='w-[220px] h-[250px] bg-opacity-50 rounded-2xl bg-gradient-to-r from-[rgb(165,9,251)] to-blue-500  '>
                <ul className='pt-[20px] pl-[20px] flex flex-col gap-1'>
                    <li className='text-[18px] hover:text-[20px] transition-all duration-300 cursor-pointer'>About</li>
                    <li className='text-[18px] hover:text-[20px] transition-all duration-300 cursor-pointer'>Services</li>
                    <li className='text-[18px] hover:text-[20px] transition-all duration-300 cursor-pointer'>Portfolio</li>
                    <li className='text-[18px] hover:text-[20px] transition-all duration-300 cursor-pointer'>Awards</li>
                    <li className='text-[18px] hover:text-[20px] transition-all duration-300 cursor-pointer'>Testimonial</li>
                    <li className='text-[18px] hover:text-[20px] transition-all duration-300 cursor-pointer'>Blog</li>
                    <li className='text-[18px] hover:text-[20px] transition-all duration-300 cursor-pointer'>Contact</li>
                </ul>
            </div>
        </div>
    </>
  )
}
