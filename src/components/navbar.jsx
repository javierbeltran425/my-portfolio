import React from 'react'
import { Image } from 'primereact/image';

import logo from '../my_logo.png';

const navbar = () => {
    const englishItems = [
        {
            label: 'Home',
            href: '#home',
            active: true,
        },
        {
            label: 'About me',
            href: '#about',
        },
        {
            label: 'What I Do',
            href: '#what-do',
        },
        {
            label: 'Portfolio',
            href: '#portfolio',
        },
        {
            label: 'My resume',
            href: '#resume',
        },
        {
            label: 'Contact',
            href: '#contact',
        }
    ]
  return (
    <nav className='fixed flex w-full justify-content-between align-items-center bg-black-alpha-90 px-6 z-1'>
        <a href="#home">
            <img src={logo} className='w-5rem h-5rem my-2 cursor-pointer' alt="logo" />
        </a>
        <ul className='list-none flex flex-row '>
            {englishItems.map(item => (
                <li key={item.label} className="px-1 mx-2" >
                    <a href={item.href} style={{ textDecoration: "none" }} className="text-red-600">{item.label}</a>
                </li>
            ))}
        </ul>
    </nav>
  )
}

export default navbar