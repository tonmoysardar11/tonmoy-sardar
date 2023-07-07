import React from 'react'
import { Flip } from 'react-awesome-reveal'
import bs from './media/bs.webp'
import html from './media/html.webp'
import css from './media/css.webp'
import js from './media/js.webp'
import react from './media/react.webp'
import gh from './media/gh.webp'



const Skills = () => {
    return (
            <section className="text-gray-400 body-font bg-transparent py-20" id='skills'>
                <div className="container py-24">
                    <h1 className="title-font sm:text-4xl text-3xl mx-10 md:mx-20 mb-4 font-medium text-white" >SKILLS
                    </h1>
                    <div className="h-1 w-20 mx-10 md:mx-20 bg-cyan-500 mb-20 rounded"></div>
                    <div className="flex flex-wrap items-center justify-center -m-4 mx-auto">
                        <Flip>
                        <div className="w-25 h-25 mx-5 my-5 rounded-full inline-flex items-center justify-center bg-gray-100 text-gray-600 animate__animated animate__flipInX animate__delay-1s overflow-hidden">
                            <img src={html} alt="" width={100} height={100}/>
                        </div>
                        </Flip>
                        <Flip>
                        <div className="w-25 h-25 mx-5 my-5 rounded-full inline-flex items-center justify-center bg-gray-100 text-gray-600 animate__animated animate__flipInX animate__delay-1s overflow-hidden">
                            <img src={css} alt=""  width={100} height={100}/>
                        </div>
                        </Flip>
                        <Flip>
                        <div className="w-25 h-25 mx-5 my-5 rounded-full inline-flex items-center justify-center bg-gray-100 text-gray-600 animate__animated animate__flipInX animate__delay-1s overflow-hidden">
                            <img src={js} alt=""  width={100} height={100}/>
                        </div>
                        </Flip>
                        <Flip>
                        <div className="w-25 h-25 mx-5 my-5 rounded-full inline-flex items-center justify-center bg-gray-100 text-gray-600 animate__animated animate__flipInX animate__delay-1s overflow-hidden">
                            <img src={bs} alt=""  width={100} height={100}/>
                        </div>
                        </Flip>
                        <Flip>
                        <div className="w-25 h-25 mx-5 my-5 rounded-full inline-flex items-center justify-center bg-gray-100 text-gray-600 animate__animated animate__flipInX animate__delay-1s overflow-hidden">
                            <img src={react} alt=""  width={100} height={100}/>
                        </div>
                        </Flip>
                        <Flip>
                        <div className="w-25 h-25 mx-5 my-5 rounded-full inline-flex items-center justify-center bg-gray-100 text-gray-600 animate__animated animate__flipInX animate__delay-1s overflow-hidden">
                            <img src={gh} alt=""  width={100} height={100}/>
                        </div>
                        </Flip>
                    </div>
                </div>
            </section>
    )
}

export default Skills
