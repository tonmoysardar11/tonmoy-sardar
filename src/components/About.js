import React from 'react'
import { TypeAnimation } from 'react-type-animation';
import pic from './media/pic.png'
import { useGlitch } from 'react-powerglitch'


const About = () => {
    const glitch = useGlitch();
    return (
        <>
        <section className="text-gray-400 bg-transparent body-font py-20" id='about'>
            <div className="container mx-auto flex flex-col z-10">
                <div className="lg:w-4/6 mx-auto">
                    <div className="flex flex-col sm:flex-row mt-10">
                        <div className="sm:w-1/3 text-center sm:pr-8 sm:py-8 md:border-r md:border-b-0 border-b border-gray-800 z-5">
                            <div className="w-40 h-40 rounded-full inline-flex items-center justify-center bg-gray-800 text-gray-600">
                                <img src={pic} alt="" id='dp' />
                            </div>
                            <div className="flex flex-col items-center text-center justify-center ">
                                <h2 className="text-4xl title-font mt-4 text-white"><span ref={glitch.ref}>Tonmoy Sardar</span></h2>
                                <div className="w-12 h-1 bg-cyan-500 rounded my-4"></div>
                            </div>
                        </div>
                        <div className=" mx-20 lg:flex-grow md:w-1/2 lg:pr-4 md:pr-0 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                            <p className="leading-relaxed text-lg my-3 mx-3 w-full h-full"> <TypeAnimation sequence={[" Welcome to my portfolio! I'm Tonmoy Sardar,a self-taught & passionate Frontend developer with expertise in HTML, CSS, JavaScript, Bootstrap, React, and GitHub. I have a good foundation in front-end web development and a keen eye for creating visually appealing and user-friendly interfaces.Seeking full-time position thatoffers professional challenges utilizing interpersonal skills, excellent time management and problem-solving skills.", 500]} speed={80} /></p>
                        </div>
                    </div>
                    
                </div>
            </div>
        </section>
    </>
    )
}

export default About
