import React from 'react'

const Footer = () => {
    return (
        <footer id="footer" className='flex flex-column md:flex-row bg-black-alpha-90'>
            <div className='flex flex-column md:flex-row w-full text-red-600 align-items-center' style={{ paddingLeft: "10%" }}>
                <div className='flex flex-row'>
                    <i className="pi pi-facebook mx-1 cursor-pointer"></i>
                    <i className="pi pi-instagram mx-1 cursor-pointer"></i>
                    <i className="pi pi-linkedin mx-1 cursor-pointer"></i>
                </div>
                
                <p className='text-gray-500 px-1'>
                    Follow me on my networks
                </p>
            </div>
        </footer>
    )
}

export default Footer