import React, { useState } from 'react'
import logo from './media/logo.png'


const Navbar = () => {
    const [location, setlocation] = useState('about');
    const path = (name) => {
        setlocation(name);
    }
    return (
        <header className="fixed z-10 text-gray-400 bg-black shadow-2xl w-full body-font">
            <div className="container flex flex-wrap py-5 flex-col md:flex-row items-center">
                <a className="flex mx-20 title-font font-medium items-center text-white mb-4 md:mb-0" href='/tonmoy-sardar/'>
                    <img src={logo} alt="" id='logo' />
                    <span className="ml-6 text-2xl text-cyan-500 font-bold">TONMOY</span><span className="ml-2 text-xl font-bold">SARDAR</span>
                </a>
                <nav className="md:ml-auto mx-20 flex flex-wrap items-center text-base justify-center">
                    <div>
                    <a className={location==='about'? "mx-5 text-white":"mx-5 hover:text-white"} href='/tonmoy-sardar/' onClick={() => path('about')}>About Me</a>
                    <div className={location==='about'?"h-1 w-100 mx-5 mt-1 bg-cyan-500 rounded":''}></div>
                    </div>
                    <div> <a className={location==='skills'? "mx-5 text-white":"mx-5 hover:text-white"} href='/tonmoy-sardar/#skills' onClick={() => path('skills')}>Skills</a>
                    <div className={location==='skills'?"h-1 w-100 mx-5 mt-1 bg-cyan-500 rounded":''}></div>
                    </div>

                    <div> <a className={location==='projects'? "mx-5 text-white":"mx-5 hover:text-white"} href='/tonmoy-sardar/#projects' onClick={() => path('projects')}>Projects</a>
                    <div className={location==='projects'?"h-1 w-100 mx-5 mt-1 bg-cyan-500 rounded":''}></div>
                    </div>

                    <div> <a className={location==='contact'? "ml-5 text-white":"ml-5 hover:text-white"} href='/tonmoy-sardar/#contact' onClick={() => path('contact')}>Contact</a>
                    <div className={location==='contact'?"h-1 w-100 ml-5 mt-1 bg-cyan-500 rounded":''}></div>
                    </div>

                </nav>
            </div>
        </header>
    )
}

export default Navbar
