import React, { useState, useRef } from 'react'
import { Image } from 'primereact/image';
import { SelectButton } from 'primereact/selectbutton';
import { Dropdown } from 'primereact/dropdown';
import { Menu } from 'primereact/menu';

import logo from '../my_logo.png';

const Navbar = () => {
    const [selectdIdiom, setSelectedIdiom] = useState({ name: 'English', code: 'EN' });
    const menu = useRef(null);

    const items = [
        {
            label: 'Home',
            command: (e) => {
                window.location.hash = '#home'
            }
        },
        {
            label: 'About me',
            command: (e) => {
                window.location.hash = '#about'
            }
            
        },
        {
            label: 'What I Do',
            command: (e) => {
                window.location.hash = '#what-do'
            }
            
        },
        {
            label: 'Portfolio',
            command: (e) => {
                window.location.hash = '#portfolio'
            }
            
        },
        {
            label: 'My resume',
            command: (e) => {
                window.location.hash = '#resume'
            }
            
        },
        {
            label: 'Contact',
            command: (e) => {
                window.location.hash = '#contact'
            }
            
        },
        {
            label: `${selectdIdiom.name === 'English' ? 'Español' : 'English'}`,
            command: (e) => {
                selectdIdiom.name === 'English' ? setSelectedIdiom({ name: 'Español', code: 'SP' }) : setSelectedIdiom({ name: 'English', code: 'EN' })
            }
        }
    ];

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
    <nav className='fixed flex w-full justify-content-between align-items-center bg-black-alpha-90 px-4 md:px-6 z-1'>
        <a href="#home">
            <img src={logo} className='w-3rem md:w-5rem h-3rem md:h-5rem my-2 cursor-pointer' alt="logo" />
        </a>
        <Menu model={items} popup ref={menu} id="popup_menu" />
        <i className="pi pi-bars" onClick={(event) => menu.current.toggle(event)} aria-controls="popup_menu" aria-haspopup></i>
        <ul className='list-none hidden md:flex flex-row align-items-center'>
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