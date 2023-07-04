import React from 'react'
import { TypeAnimation } from 'react-type-animation';
import pic from './media/pic.png'
import fb from './media/fb.png'
import insta from './media/insta.png'
import gh from './media/gh.png'
import li from './media/li.png'


const About = () => {
    return (
        <section className="text-gray-400 bg-transparent body-font z-5" id='about'>
            <div className="container py-24 mx-auto flex flex-col">
                <div className="lg:w-4/6 mx-auto">
                    <div className="flex flex-col sm:flex-row mt-10">
                        <div className="sm:w-1/3 text-center sm:pr-8 sm:py-8 md:border-r md:border-b-0 border-b border-gray-800 z-5">
                            <div className="w-40 h-40 rounded-full inline-flex items-center justify-center bg-gray-800 text-gray-600">
                                <img src={pic} alt="" id='dp' />
                            </div>
                            <div className="flex flex-col items-center text-center justify-center ">
                                <h2 className="font-medium title-font mt-4 text-white text-2xl">Tonmoy Sardar</h2>
                                <div className="w-12 h-1 bg-indigo-500 rounded mt-2 mb-4"></div>
                                <p className="text-base text-gray-400">Hey there. Welcome to my Portfolio.</p>
                                <div className='flex flex-wrap items-center text-base justify-center'>
                                    <a className="w-7 h-7 flex mx-2 my-5 title-font font-medium items-center mx-3 text-white mb-4 md:mb-0" href='https://www.linkedin.com/in/tonmoy-sardar-4b1795257/'>
                                        <img src={li} alt="" id='logo' />
                                    </a>
                                    <a className="w-7 h-7 flex mx-2 my-5 title-font font-medium items-center mx-3 text-white mb-4 md:mb-0" href='https://github.com/tonmoysardar11'>
                                        <img src={gh} alt="" id='logo' />
                                    </a>
                                    <a className="w-7 h-7 flex mx-2 my-5 title-font font-medium items-center mx-3 text-white mb-4 md:mb-0" href='https://www.facebook.com/ImTonmay11'>
                                        <img src={fb} alt="" id='logo' />
                                    </a>
                                    <a className="w-7 h-7 flex mx-2 my-5 title-font font-medium items-center mx-3 text-white mb-4 md:mb-0" href='https://www.instagram.com/imtonmoy11/'>
                                        <img src={insta} alt="" id='logo' />
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className=" mx-20 lg:flex-grow md:w-1/2 lg:pr-4 md:pr-0 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                            <p className="leading-relaxed text-lg my-3 mx-3 w-full h-full"> <TypeAnimation sequence={[" Welcome to my portfolio! I'm Tonmoy Sardar,a self-taught & passionate Frontend developer with expertise in HTML, CSS, JavaScript, Bootstrap, React, and GitHub. I have a good foundation in front-end web development and a keen eye for creating visually appealing and user-friendly interfaces.Seeking full-time position thatoffers professional challenges utilizing interpersonal skills, excellent time management and problem-solving skills.",500]} speed={80}/></p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About
