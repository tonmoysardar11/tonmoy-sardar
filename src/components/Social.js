import React from 'react'
import fb from './media/fb.webp'
import insta from './media/insta.webp'
import gh from './media/gh.webp'
import li from './media/li.webp'

const Social = () => {
    return (
        <section className="text-gray-400 body-font bg-transparent" id='skills'>
            <div className="container">
                <div className="flex flex-wrap items-center justify-center -m-4uto">
                    <div className="mx-3 w-30 h-30 my-5 inline-flex items-center justify-center text-gray-600 animate__animated animate__flipInX animate__delay-1s">
                        <a className="w-7 h-7 flex my-5 title-font font-medium items-center text-white mb-4 md:mb-0" href='https://www.linkedin.com/in/tonmoy-sardar-4b1795257/' id='linkedin'>
                            <img src={li} alt="" width={40} height={40} />
                        </a>
                    </div>
                    <div className="mx-3 w-30 h-30 my-5 inline-flex items-center justify-center text-gray-600 animate__animated animate__flipInX animate__delay-1s">
                        <a className="w-7 h-7 flex my-5 title-font font-medium items-center text-white mb-4 md:mb-0" href='https://github.com/tonmoysardar11' id='github'>
                            <img src={gh} alt=""  width={40} height={40}/>
                        </a>
                    </div>
                    <div className="mx-3 w-30 h-30 my-5 inline-flex items-center justify-center text-gray-600 animate__animated animate__flipInX animate__delay-1s">
                        <a className="w-7 h-7 flex my-5 title-font font-medium items-center text-white mb-4 md:mb-0" href='https://www.facebook.com/ImTonmay11' id='fb'>
                            <img src={fb} alt=""  width={40} height={40}/>
                        </a>
                    </div>
                    <div className="mx-3 w-30 h-30 my-5 inline-flex items-center justify-center text-gray-600 animate__animated animate__flipInX animate__delay-1s">
                        <a className="w-7 h-7 flex my-5 title-font font-medium items-center text-white mb-4 md:mb-0" href='https://www.instagram.com/imtonmoy11/' id='insta'>
                            <img src={insta} alt="" width={40} height={40} />
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Social
