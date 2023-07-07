import React from 'react'
import fb from './media/fb.png'
import insta from './media/insta.png'
import gh from './media/gh.png'
import li from './media/li.png'

const Social = () => {
    return (
        <section className="text-gray-400 body-font bg-transparent" id='skills'>
            <div className="container">
                <div className="flex flex-wrap items-center justify-center -m-4uto">
                    <div className="mx-3 w-30 h-30 my-5 inline-flex items-center justify-center text-gray-600 animate__animated animate__flipInX animate__delay-1s">
                        <a className="w-7 h-7 flex my-5 title-font font-medium items-center text-white mb-4 md:mb-0" href='https://www.linkedin.com/in/tonmoy-sardar-4b1795257/'>
                            <img src={li} alt="" id='logo' />
                        </a>
                    </div>
                    <div className="mx-3 w-30 h-30 my-5 inline-flex items-center justify-center text-gray-600 animate__animated animate__flipInX animate__delay-1s">
                        <a className="w-7 h-7 flex my-5 title-font font-medium items-center text-white mb-4 md:mb-0" href='https://github.com/tonmoysardar11'>
                            <img src={gh} alt="" id='logo' />
                        </a>
                    </div>
                    <div className="mx-3 w-30 h-30 my-5 inline-flex items-center justify-center text-gray-600 animate__animated animate__flipInX animate__delay-1s">
                        <a className="w-7 h-7 flex my-5 title-font font-medium items-center text-white mb-4 md:mb-0" href='https://www.facebook.com/ImTonmay11'>
                            <img src={fb} alt="" id='logo' />
                        </a>
                    </div>
                    <div className="mx-3 w-30 h-30 my-5 inline-flex items-center justify-center text-gray-600 animate__animated animate__flipInX animate__delay-1s">
                        <a className="w-7 h-7 flex my-5 title-font font-medium items-center text-white mb-4 md:mb-0" href='https://www.instagram.com/imtonmoy11/'>
                            <img src={insta} alt="" id='logo' />
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Social
