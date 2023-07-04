import React from 'react'
import logo from './media/logo.png'

const Footer = () => {
    return (
        <footer className="text-gray-400 bg-transparent body-font">
            <div className="container px-20 py-8 flex items-center sm:flex-row flex-col">
                <a href='/' className="flex title-font font-medium items-center md:justify-start justify-center text-white">
                    <img src={logo} alt="" id='logo' />
                    <span className="ml-6 text-2xl text-cyan-500 font-bold">TONMOY</span><span className="ml-2 text-xl font-bold">SARDAR</span>
                </a>
                <p className="text-sm text-gray-400 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-800 sm:py-2 sm:mt-0 mt-4">© 2023 Tonmoy Sardar
                </p>
                <p className="text-sm text-gray-400 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-800 sm:py-2 sm:mt-0 mt-4">officialtonmoy11@gmail.com</p>
                <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
                    <a className="text-gray-400" href='https://www.facebook.com/ImTonmay11'>
                        <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                            <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                        </svg>
                    </a>
                    <a className="ml-3 text-gray-400" href='https://www.instagram.com/imtonmoy11/'>
                        <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                            <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                            <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                        </svg>
                    </a>
                </span>
            </div>
        </footer>
    )
}

export default Footer
