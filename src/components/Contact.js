import React, { useState, useEffect } from 'react'
import { Bounce } from "react-awesome-reveal";

const Contact = () => {
    const [name, setname] = useState('');
    const [email, setemail] = useState('');
    const [sub, setsub] = useState('');
    const [msg, setmsg] = useState('');
    const [mailto, setmailto] = useState('');



    const changeName = (e) => {
        setname(e.target.value)
    }
    const changeMail = (e) => {
        setemail(e.target.value)
    }
    const changeSub = (e) => {
        setsub(e.target.value)
    }
    const changeMsg = (e) => {
        setmsg(e.target.value)
    }
    const reset = () => {
        setname('')
        setemail('')
        setmsg('')
        setsub('')
    }
    useEffect(() => {
        setmailto(`mailto:officialtonmoy11@gmail.com?subject=${sub}&body=Name:%20${name}%0D%0AEmail:%20${email}%0D%0AMessage:%20${msg}`)
    }, [sub, name, email, msg]);


    return (
        <section className="text-gray-400 bg-transparent body-font relative" id='contact'>
            <div className="container py-24 mx-auto">
                <h1 className="title-font sm:text-4xl text-3xl mx-20 mb-4 font-medium text-white">CONTACT ME
                </h1>
                <div className="h-1 w-20 bg-cyan-500 mb-20 mx-20 rounded"></div>
                <div className="lg:w-1/2 md:w-2/3 lg:mx-auto md:mx-auto mx-20">
                    <div className="flex flex-wrap -m-2">
                        <div className="p-2 w-1/2 ">
                            <Bounce>
                                <div className="relative animate__animated animate__bounceInLeft">
                                    <label htmlFor="name" className="leading-7 text-sm text-gray-400">Name</label>
                                    <input type="text" id="name" name="name" className="w-full bg-gray-800 bg-opacity-40 rounded border border-gray-700 focus:border-cyan-500 focus:bg-gray-900 focus:ring-2 focus:ring-cyan-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" onChange={changeName} value={name} />
                                </div>
                            </Bounce>
                        </div>
                        <div className="p-2 w-1/2 ">
                            <Bounce>
                                <div className="relative animate__animated animate__bounceInRight">
                                    <label htmlFor="email" className="leading-7 text-sm text-gray-400">Email</label>
                                    <input type="email" id="email" name="email" className="w-full bg-gray-800 bg-opacity-40 rounded border border-gray-700 focus:border-cyan-500 focus:bg-gray-900 focus:ring-2 focus:ring-cyan-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" onChange={changeMail} value={email} />
                                </div>
                            </Bounce>
                        </div>
                        <div className="p-2 w-full ">
                            <Bounce>
                                <div className="relative animate__animated animate__bounceInUp">
                                    <label htmlFor="name" className="leading-7 text-sm text-gray-400">Subject</label>
                                    <input type="text" id="name" name="name" className="w-full bg-gray-800 bg-opacity-40 rounded border border-gray-700 focus:border-cyan-500 focus:bg-gray-900 focus:ring-2 focus:ring-cyan-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" onChange={changeSub} value={sub} />
                                </div>
                            </Bounce>
                        </div>
                        <div className="p-2 w-full ">
                            <Bounce>
                                <div className="relative animate__animated animate__bounceInUp">
                                    <label htmlFor="message" className="leading-7 text-sm text-gray-400">Message</label>
                                    <textarea id="message" name="message" className="w-full bg-gray-800 bg-opacity-40 rounded border border-gray-700 focus:border-cyan-500 focus:bg-gray-900 focus:ring-2 focus:ring-cyan-900 h-32 text-base outline-none text-gray-100 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out" onChange={changeMsg} value={msg}></textarea>
                                </div>
                            </Bounce>
                        </div>
                        <div className="p-2 w-full animate__animated animate__bounceIn animate__delay-1s">
                            <a href={mailto}>
                                <Bounce>
                                    <button className="flex mx-auto text-black bg-cyan-300 border-0 py-2 px-8 focus:outline-none hover:px-9 rounded-full text-lg disabled:opacity-40 animate__animated animate__bounceIn animate__delay-1s" onClick={reset} disabled={!(name.length > 3 && sub.length > 3 && msg.length > 9 && email.includes('@'))}>Send Message</button>
                                </Bounce>
                            </a>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact
