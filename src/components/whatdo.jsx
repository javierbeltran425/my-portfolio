import React from 'react'
import { Divider } from 'primereact/divider';

const whatdo = () => {
    return (
        <div id="what-do" className='flex flex-row h-screen bg-black-alpha-90'>
            <div className='w-full' style={{ paddingLeft: "10rem" }}>
                <h1 className='text-white pt-8' >What I Do</h1>
                <div className='w-1 bg-red-600 mb-4' style={{ height: "1px" }} />
            </div>
        </div>
    )
}

export default whatdo