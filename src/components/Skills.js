import React from 'react'
import { Flip } from 'react-awesome-reveal'
import bs from './media/bs.png'
import html from './media/html.png'
import css from './media/css.png'
import js from './media/js.png'
import react from './media/react.png'
import gh from './media/gh.png'



const Skills = () => {
    return (
            <section className="text-gray-400 body-font bg-transparent py-20" id='skills'>
                <div className="container py-24">
                    <h1 className="title-font sm:text-4xl text-3xl mx-20 mb-4 font-medium text-white" >SKILLS
                    </h1>
                    <div className="h-1 w-20 mx-20 bg-cyan-500 mb-20 rounded"></div>
                    <div className="flex flex-wrap items-center justify-center -m-4 mx-auto">
                        <Flip>
                        <div className="w-30 h-30 mx-5 my-5 rounded-full inline-flex items-center justify-center bg-gray-800 text-gray-600 animate__animated animate__flipInX animate__delay-1s">
                            <img src={html} alt=""  />
                        </div>
                        </Flip>
                        <Flip>
                        <div className="w-30 h-30 mx-5 my-5 rounded-full inline-flex items-center justify-center bg-gray-800 text-gray-600 animate__animated animate__flipInX animate__delay-1s">
                            <img src={css} alt=""  />
                        </div>
                        </Flip>
                        <Flip>
                        <div className="w-30 h-30 mx-5 my-5 rounded-full inline-flex items-center justify-center bg-gray-800 text-gray-600 animate__animated animate__flipInX animate__delay-1s">
                            <img src={js} alt=""  />
                        </div>
                        </Flip>
                        <Flip>
                        <div className="w-30 h-30 mx-5 my-5 rounded-full inline-flex items-center justify-center bg-gray-800 text-gray-600 animate__animated animate__flipInX animate__delay-1s">
                            <img src={bs} alt=""  />
                        </div>
                        </Flip>
                        <Flip>
                        <div className="w-30 h-30 mx-5 my-5 rounded-full inline-flex items-center justify-center bg-gray-800 text-gray-600 animate__animated animate__flipInX animate__delay-1s">
                            <img src={react} alt=""  />
                        </div>
                        </Flip>
                        <Flip>
                        <div className="w-30 h-30 mx-5 my-5 rounded-full inline-flex items-center justify-center bg-gray-800 text-gray-600 animate__animated animate__flipInX animate__delay-1s">
                            <img src={gh} alt=""  />
                        </div>
                        </Flip>
                    </div>
                </div>
            </section>
    )
}

export default Skills
