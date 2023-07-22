import React from 'react'
import { Zoom } from "react-awesome-reveal";
import mf from './media/mf.webp'
import pj from './media/pj.webp'
import cwh from './media/cwh.webp'
import at from './media/at.webp'



const Projects = () => {

    return (
        <div className='bg-transparent pt-20'
            id='projects'
        >
            <div className='pt-2'>
                <h1 className="title-font sm:text-4xl text-3xl mx-10 md:mx-20 mb-4 font-medium text-white">PROJECTS
                </h1>
                <div className="h-1 w-20 bg-cyan-500 mb-20 mx-10 md:mx-20 rounded"></div>
                <Zoom>
                    <section className="text-gray-400 body-font animate__animated animate__backInUp animate__slow">
                        <div className="container mx-auto flex py-20 md:flex-row flex-col items-center">
                            <div className=" mx-20 lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                                <h1 className="title-font sm:text-4xl text-3xl mb-2 font-medium text-white">Medhavardhan Foundation NGO Website
                                </h1>
                                <div className="h-1 w-20 mb-4 bg-cyan-500 rounded"></div>
                                <p className="mb-8 leading-relaxed">Made a website for a non-profit NGO named Medhavardhan Foundation with the functionalities of Contact Form,Membership Form,Payment Form where all form data stored in Google Sheet.Created using Html5, Css3, JavaScript & Bootstarp 5.</p>
                                <div className="flex justify-center flex-col md:flex-row">
                                    <button className=" rounded-full inline-flex text-black bg-cyan-300 border-0 py-2 px-6 focus:outline-none hover:bg-cyan-200 rounded text-lg my-2"><a href='http://medhavardhan.org/'>Live Website</a></button>
                                    <button className="md:ml-4 rounded-full inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg my-2"><a href='https://github.com/tonmoysardar11/Medhavardhan'>View Code</a></button>
                                </div>
                            </div>
                            <div className="mx-20 lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                                <img className="object-cover object-center rounded" alt="hero" src={mf} width={600} height={300}/>
                            </div>
                        </div>
                    </section>
                </Zoom>
                <Zoom>
                    <section className="text-gray-400 body-font animate__animated animate__backInUp animate__slow">
                        <div className="container mx-auto flex py-20 md:flex-row flex-col items-center">
                            <div className=" mx-20 lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                                <h1 className="title-font sm:text-4xl text-3xl mb-2 font-medium text-white">Panda Jump Javascript Game
                                </h1>
                                <div className="h-1 w-20 mb-4 bg-cyan-500 rounded"></div>
                                <p className="mb-8 leading-relaxed">Made a Javascript game where the main character have to dodge the incoming elements and will score point after each element crossed.Touching any element will cause game over.Created using Html5, Css3, JavaScript.</p>
                                <div className="flex justify-center flex-col md:flex-row">
                                    <button className=" rounded-full inline-flex text-black bg-cyan-300 border-0 py-2 px-6 focus:outline-none hover:bg-cyan-200 rounded text-lg my-2"><a href='https://tonmoysardar11.github.io/Panda-Jump-game/'>Live Website</a></button>
                                    <button className="md:ml-4 rounded-full inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg my-2"><a href='https://github.com/tonmoysardar11/Panda-Jump-game'>View Code</a></button>
                                </div>
                            </div>
                            <div className="mx-20 lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                                <img className="object-cover object-center rounded" alt="hero" src={pj} width={600} height={300}/>
                            </div>
                        </div>
                    </section>
                </Zoom>
                <Zoom>
                    <section className="text-gray-400 body-font animate__animated animate__backInUp animate__slow">
                        <div className="container mx-auto flex py-20 md:flex-row flex-col items-center">
                            <div className=" mx-20 lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                                <h1 className="title-font sm:text-4xl text-3xl mb-2 font-medium text-white">Coding Tutorial Home Page
                                </h1>
                                <div className="h-1 w-20 mb-4 bg-cyan-500 rounded"></div>
                                <p className="mb-8 leading-relaxed">Made a home page of coding tutorial website with full responsiveness.Created using Html5, Css3, JavaScript,Bootstrap, Typer Js.</p>
                                <div className="flex justify-center flex-col md:flex-row">
                                    <button className=" rounded-full inline-flex text-black bg-cyan-300 border-0 py-2 px-6 focus:outline-none hover:bg-cyan-200 rounded text-lg"><a href='https://tonmoysardar11.github.io/clone_codewithharry/'>Live Website</a></button>
                                    <button className="md:ml-4 rounded-full inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg my-2"><a href='https://github.com/tonmoysardar11/clone_codewithharry'>View Code</a></button>
                                </div>
                            </div>
                            <div className="mx-20 lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                                <img className="object-cover object-center rounded" alt="hero" src={cwh} width={600} height={300}/>
                            </div>
                        </div>
                    </section>
                </Zoom>
                <Zoom>
                    <section className="text-gray-400 body-font animate__animated animate__backInUp animate__slow">
                        <div className="container mx-auto flex py-20 md:flex-row flex-col items-center">
                            <div className=" mx-20 lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                                <h1 className="title-font sm:text-4xl text-3xl mb-2 font-medium text-white">Advanced Todo React App
                                </h1>
                                <div className="h-1 w-20 mb-4 bg-cyan-500 rounded"></div>
                                <p className="mb-8 leading-relaxed">Made an advanced Todo app where 3 separate sections available to display all todos,completed todos & pending todos with the functionality of create,read & delete component states.Created using React JS, Css3,Bootstarp.</p>
                                <div className="flex justify-center flex-col md:flex-row">
                                    <button className=" rounded-full inline-flex text-black bg-cyan-300 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded text-lg"><a href='https://tonmoysardar11.github.io/Advanced-Todo/'>Live Website</a></button>
                                    <button className="md:ml-4 rounded-full inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg my-2"><a href='https://github.com/tonmoysardar11/Advanced-Todo'>View Code</a></button>
                                </div>
                            </div>
                            <div className="mx-20 lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                                <img className="object-cover object-center rounded" alt="hero" src={at} width={600} height={300}/>
                            </div>
                        </div>
                    </section>
                </Zoom>
            </div>
        </div>
    )
}

export default Projects
