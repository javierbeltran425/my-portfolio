import React, { useState } from 'react'
import { Divider } from 'primereact/divider';
import { InputText } from 'primereact/inputtext';
import { InputTextarea } from 'primereact/inputtextarea';
import { Button } from 'primereact/button';

const Contact = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [message, setMessage] = useState('');

    return (
        <div id="contact" className='flex flex-row min-h-screen bg-black-alpha-90'>
            <div className='w-full' style={{ paddingLeft: "10%" }}>
                <h1 className='text-white pt-8' >Contact Me</h1>
                <div className='w-1 bg-red-600 mb-4' style={{ height: "1px" }} />

                <div className='flex flex-column md:flex-row w-11 justify-content-between'>
                    <div className='flex flex-column md:flex-row gap-4'>
                        <InputText value={name} onChange={(e) => setName(e.target.value)} placeholder="Your name" />
                        <InputText value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Your email" />
                        <InputText value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="Your phone" />
                    </div>

                </div>
                <div className='w-full mt-4'>
                    <InputTextarea value={message} onChange={(e) => setMessage(e.target.value)} className="w-11" rows={15} placeholder="Your message" autoResize />
                    <Button label="Send message" className="p-button-outlined p-button-danger" />
                </div>
                <div className='flex flex-column md:flex-row justify-content-center md:gap-8'>
                    <div className='text-center'>
                        <h4>Email Me</h4>
                        <h5 className='text-gray-500'>htjvavier621@gmail.com</h5>
                    </div>
                    <div className='text-center'>
                        <h4>Call Me</h4>
                        <h5 className='text-gray-500'>+(503) 6162-1834</h5>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact