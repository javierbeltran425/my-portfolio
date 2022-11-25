import React from 'react'

const sidebar = () => {
  return (
    <div className='fixed flex flex-column justify-content-center align-items-center h-screen w-1 bg-black-alpha-90 text-white'>
        <i className="cursor-pointer pi pi-facebook my-1 text-red-600"></i>
        <i className="cursor-pointer pi pi-instagram my-1 text-red-600"></i>
        <i className="cursor-pointer pi pi-linkedin my-1 text-red-600"></i>
        <p className='text-gray-500 -rotate-90 py-4'>Follow Me</p>
    </div>
  )
}

export default sidebar