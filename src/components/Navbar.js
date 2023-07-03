import React, { useState } from 'react'
import logo from './media/logo.png'


const Navbar = () => {
    const [location, setlocation] = useState('about');
    const path = (name) => {
        setlocation(name);
    }
    return (
        <header className="fixed z-10 text-gray-400 bg-black w-full body-font">
            <div className="container flex flex-wrap py-5 flex-col md:flex-row items-center">
                <a className="flex mx-20 title-font font-medium items-center text-white mb-4 md:mb-0" href='/'>
                    <img src={logo} alt="" id='logo' />
                    <span className="ml-6 text-2xl text-cyan-300 font-bold">TONMOY</span><span className="ml-2 text-xl font-bold">SARDAR</span>
                </a>
                <nav className="md:ml-auto mx-20 flex flex-wrap items-center text-base justify-center">
                    <a className={location==='about'? "mx-5 text-white":"mx-5 hover:text-white"} href='/' onClick={() => path('about')}>About Me</a>
                    <a className={location==='skills'? "mx-5 text-white":"mx-5 hover:text-white"} href='/#skills' onClick={() => path('skills')}>Skills</a>
                    <a className={location==='projects'? "mx-5 text-white":"mx-5 hover:text-white"} href='/#projects' onClick={() => path('projects')}>Projects</a>
                    <a className={location==='contact'? "ml-5 text-white":"ml-5 hover:text-white"} href='/#contact' onClick={() => path('contact')}>Contact</a>
                </nav>
            </div>
        </header>
    )
}

export default Navbar
