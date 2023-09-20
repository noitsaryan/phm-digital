'use client'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import {CgMenuRight, CgClose} from 'react-icons/cg'
import {gsap} from 'gsap'

function Header() {
    function openMenu() {
        gsap.to('.menu', {
            left: 0,
            duration:0.5,
        })
    }
    function closeMenu() {
        gsap.to('.menu', {
            left: '-100%',
            duration:0.5,
        })
    }
    const menu = [
        {
            name:'Home',
            link:'/'
        },
        {
            name:'Services',
            link:'/services'
        },
        {
            name:'About',
            link:'/about'
        },
        {
            name:'Contact',
            link:'/contact'
        },
        {
            name:'Login',
            link:'/login'
        },
    ]
  return (
    <nav className='flex items-center justify-around py-4 '>
        <Image src='/logo.png' width={300} height={0} alt='Logo' className='w-64  h-auto'/>
        <div className='space-x-5 font-semibold hidden md:block'>
            {
                menu.map((e, i) => {
                    return <Link key={i} href={e.link} className={`${e.name === 'Login' ? 'text-primary': 'text-dark'}  hover:text-primary transition-all`}>
                        {e.name}
                    </Link>
                })
            }
        </div>
        <CgMenuRight className='md:hidden text-dark' size={30} onClick={openMenu} />
        <div className='bg-bg h-screen w-screen fixed top-0 -left-full menu'>
            <CgClose className='absolute top-12 right-12 text-dark' onClick={closeMenu} size={30}  /> 
            <div className='flex items-center flex-col justify-center h-screen space-y-5'>
            {
                menu.map((e, i) => {
                    return <Link key={i} href={e.link} className={`font-semibold text-3xl ${e.name === 'Login' ? 'bg-primary text-bg px-4 py-2 rounded-lg ' : ''}  transition-all`}>
                        {e.name}
                    </Link>
                })
            }
            </div>
        </div>
    </nav>
  )
}

export default Header