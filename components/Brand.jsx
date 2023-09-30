import axios from 'axios';
import React, { useState } from 'react'
import { AiOutlineClose } from 'react-icons/ai'

function Brand() {
    const [name, setName] = useState('')
    const [message, setMessage] = useState('')
    const [designation, setDesignation] = useState('')
    const [number, setNumber] = useState('')
    const [email, setEmail] = useState('')
    async function onSubmit() {
        await axios.post('/api/sendMail', {
            name,email,message,designation,number
        })
    }
    return (
        <main className='fixed w-screen h-screen top-0 left-0 bg-white z-50 flex items-center justify-center'>
            <AiOutlineClose className='absolute top-8 right-8 text-2xl text-gray-400' />
            <div>
                <h1 className='text-2xl font-bold my-2 text-center' >Brand Registeration</h1>
                <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col">
                    <div className="-mx-3 md:flex mb-6 flex-wrap max-w-2xl">
                        <div className="md:w-1/2 px-3 mb-6 md:mb-0">
                            <label className="uppercase tracking-wide text-black text-xs font-bold mb-2" htmlFor="company">
                                Your Name<span className='text-primary'>*</span>
                            </label>
                            <input className="w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 mb-3" id="company" type="text" placeholder="Name" onChange={(e) => setName(e.target.value)} />

                        </div>
                        <div className="md:w-1/2 px-3">
                            <label className="uppercase tracking-wide text-black text-xs font-bold mb-2" htmlFor="title">
                                Your Designation<span className='text-primary'>*</span>
                            </label>
                            <input className="w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 mb-3" id="title" type="text" placeholder="Software Engineer" onChange={(e) => setDesignation(e.target.value)} />
                        </div>
                        <div className="md:w-1/2 px-3 mb-6 md:mb-0">
                            <label className="uppercase tracking-wide text-black text-xs font-bold mb-2" htmlFor="company">
                                Email<span className='text-primary'>*</span>
                            </label>
                            <input className="w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 mb-3" id="company" type="text" placeholder="xyz@abc.com" onChange={(e) => setEmail(e.target.value)} />

                        </div>
                        <div className="md:w-1/2 px-3 mb-6 md:mb-0">
                            <label className="uppercase tracking-wide text-black text-xs font-bold mb-2" htmlFor="company">
                                Phone<span className='text-primary'>*</span>
                            </label>
                            <input className="w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 mb-3" id="company" type="text" placeholder="+91 " onChange={(e) => setNumber(e.target.value)} />

                        </div>
                        <div className="md:w-full px-3 mb-6 md:mb-0">
                            <label className="uppercase tracking-wide text-black text-xs font-bold mb-2" htmlFor="company">
                                Message<span className='text-primary'><span className='text-primary'>*</span></span>
                            </label>
                            <input className="w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 mb-3" id="company" type="text" placeholder="Message" onChange={(e) => setMessage(e.target.value)} />

                        </div>
                    </div>
                    <div className="-mx-3 md:flex mt-2">
                        <div className="md:w-full px-3">
                            <button onClick={onSubmit} className="md:w-full bg-primary text-white font-bold py-2 px-4  hover:border-gray-100 rounded-full">
                                Submit
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Brand