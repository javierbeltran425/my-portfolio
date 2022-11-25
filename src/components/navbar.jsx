import React, { useState } from 'react'
import { Image } from 'primereact/image';
import { SelectButton } from 'primereact/selectbutton';
import { Dropdown } from 'primereact/dropdown';

import logo from '../my_logo.png';

const Navbar = () => {
    const [selectdIdiom, setSelectedIdiom] = useState({ name: 'English', code: 'EN' });

    const idioms = [
        { name: 'English', code: 'EN' },
        { name: 'Español', code: 'SP' },
    ];

    const onIdiomChange = (e) => {
        setSelectedIdiom(e.value);
    }

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
        <ul className='list-none flex flex-row align-items-center'>
            {englishItems.map(item => (
                <li key={item.label} className="px-1 mx-2" >
                    <a href={item.href} style={{ textDecoration: "none" }} className="text-red-600">{item.label}</a>
                </li>
            ))}
            <Dropdown value={selectdIdiom} options={idioms} onChange={onIdiomChange} optionLabel="name" placeholder="Select an idiom" />
        </ul>
    </nav>
  )
}

export default Navbar