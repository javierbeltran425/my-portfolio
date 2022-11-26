import React from 'react'

import background from "../selfie.jpg";

const home = () => {
  return (
    <div id="home" className='flex flex-column justify-content-center h-screen bg-cover' style={{ backgroundImage: `url(${background})`, backgroundRepeat: 'no-repeat' }}>
        <div style={{ paddingLeft: "10%" }}>
            <h1 className='text-red-600' >Here is Javier Beltrán</h1>
            <h2 className='text-white'>Software developer & Web Developer</h2>
        </div>

        <a href='#about' className='animation-duration-500'>
            <i className="pi pi-arrow-circle-down text-white text-3xl cursor-pointer scalein animation-duration-2000 animation-iteration-infinite" style={{position: 'absolute', bottom: 20, right: '50%'}}></i>    
        </a>
    </div>
  )
}

export default home