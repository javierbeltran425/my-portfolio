import React from 'react'
import { Divider } from 'primereact/divider';

const about = () => {
  return (
    <div id="about" className='flex flex-row h-screen bg-black-alpha-90'>
        <div className='w-full' style={{ paddingLeft: "10rem" }}>
            <h1 className='text-white pt-8' >About Me</h1>
            <div className='w-1 bg-red-600 mb-4' style={{ height: "1px" }} />

            <p className='text-white pr-6'>
                I am a website designer from Lousiana, with a strong focus in UI/UX design. I love to get new experiences and always learn from my surroundings. I've done more than 285 projects. You can check it through portfolio section on this website. I looking forward to any opportunities and challenges.
            </p>
        </div>
    </div>
  )
}

export default about