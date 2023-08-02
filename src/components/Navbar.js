import React,{useState} from 'react'
import logo from './media/logo.webp'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

const Navbar = () => {
    const [menu, setmenu] = useState(false);
    const toggle = () => {
        setmenu(!menu)
    }
    const [location, setlocation] = useState('about');
    const path = (name) => {
        setlocation(name);
    }

    

    
    return (
        <header className="z-50 text-gray-400 bg-black shadow-2xl w-full body-font fixed px-5 md:px-0">
            <div className="w-full mx-auto flex flex-wrap px-1 md:px-0 py-2 justify-between items-center">
                <a className="mx-3 flex lg:mx-20 title-font font-medium items-center text-white md:mb-0" href='/' onClick={()=>setmenu(false)}>
                    <img src={logo} alt="" id='logo' width={40} height={40}/>
                    <span className="ml-6 text-2xl text-cyan-500 font-bold">TONMOY</span><span className="ml-2 text-xl font-bold">SARDAR</span>
                </a>
                {menu ? <FontAwesomeIcon icon={faBars} onClick={toggle} className=' mx-2 lg:hidden block rotate-90 text-xl duration-200' /> : <FontAwesomeIcon icon={faBars} onClick={toggle} className=' mx-2 lg:hidden block text-xl duration-200' />}

                <div className={` ${menu ? `flex` : `hidden`} flex-col lg:flex-row justify-between items-center lg:flex py-4 lg:py-0 w-full lg:w-1/2`}>

                <nav className="mx-auto lg:mr-14 flex flex-wrap items-center text-base justify-center">
                    
                    <div>
                        <a className={location === 'about' ? "mx-5 text-white" : "mx-5 hover:text-white"} href='/#about' onClick={() => {path('about');setmenu(false)}}>About Me</a>
                        <div className={location === 'about' ? "h-1 w-100 mx-5 mt-1 bg-cyan-500 rounded" : ''}></div>
                    </div>
                    <div> <a className={location === 'skills' ? "mx-5 text-white" : "mx-5 hover:text-white"} href='/#skills' onClick={() => {path('skills');setmenu(false)}}>Skills</a>
                        <div className={location === 'skills' ? "h-1 w-100 mx-5 mt-1 bg-cyan-500 rounded" : ''}></div>
                    </div>

                    <div> <a className={location === 'projects' ? "mx-5 text-white" : "mx-5 hover:text-white"} href='/#projects' onClick={() => {path('projects');setmenu(false)}}>Projects</a>
                        <div className={location === 'projects' ? "h-1 w-100 mx-5 mt-1 bg-cyan-500 rounded" : ''}></div>
                    </div>

                    <div> <a className={location === 'contact' ? "ml-5 text-white" : "ml-5 hover:text-white"} href='/#contact' onClick={() => {path('contact');setmenu(false)}}>Contact</a>
                        <div className={location === 'contact' ? "h-1 w-100 ml-5 mt-1 bg-cyan-500 rounded" : ''}></div>
                    </div>
                    {/* <div>
                        <a className="mx-5 hover:text-white" href='/static/media/Tonmoy Sardar.13a463370c423a064589.pdf' >Resume</a>
                    </div> */}
                    <button className=" mx-5 md:ml-5 rounded-full inline-flex text-black bg-cyan-500 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg my-2"><a href='https://drive.google.com/file/d/1Io1vLBKmNs2G9Z7Tiukxxs6moKPmFmCp/view?usp=drive_link'>Resume</a></button>

                </nav>
                </div>



            </div>
        </header>
    )
}

export default Navbar
