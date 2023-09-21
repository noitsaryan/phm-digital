import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function Footer() {
    return (
        <>
            <footer className='grid md:grid-cols-3 gap-8 md:px-44 px-8 grid-cols-1 py-4 border-t '>
                <div>
                    <Image src='/logo.png' width={300} height={10} alt='logo' className='w-44 h-auto' />
                    <p className='font-medium'>
                        Youthistaan is a data-driven influencer marketing agency that helps brands to match with the right influencers to achieve maximum ROI.</p>
                </div>
                <div>
                    <h1 className='font-medium'>Contact Info</h1>
                    <p> contact@youthistaan.com </p>
                </div>
                <div className='flex flex-col '>
                    <h1 className='font-medium'>Quick Links</h1>
                    <Link href='/about'>About</Link>
                    <Link href='/contact'>Contact</Link>
                    <Link href='/services'>Services</Link>
                </div>
            </footer>
            <p className='font-medium text-center '> All rights reserved. Youthistaan Media &copy; 2023 </p>
        </>
    )
}

export default Footer