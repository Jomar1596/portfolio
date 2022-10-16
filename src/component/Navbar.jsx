import {useState} from 'react'
import logo from '../component/images/JP.png'
import Resume from './assets/Perante_Resume.pdf'
import {FaBars, FaTimes, FaFacebook, FaGithub, FaLinkedin} from 'react-icons/fa'
import {AiFillProfile} from 'react-icons/ai'
import { Link } from 'react-scroll'


const Navbar = () => {

    const [toggle, setToggle] = useState(false)

    const handleClick = () => {
        setToggle(prevState => !prevState)
    }

    return (
        <div className="fixed w-full bg-blue-50 h-[10vh]  z-[10]">
            <div className="flex justify-between w-[80%] m-auto h-[100%] bg-blue-50 md:w-[100%]">
                    {/* logo img */}
                    <img className="w-50px" src={logo} alt="logo" />

                    {/* nav links */}
                    <ul className="flex sm:hidden items-center gap-[2rem] text-[1.2rem] cursor-pointer">
                        <li className="hover:text-gray-500">
                            <Link to="home" smooth={true} duration={500}>
                                Home
                            </Link>
                        </li>
                        <li className="hover:text-gray-500">
                            <Link to="about" smooth={true} duration={500}>
                                About
                            </Link>
                        </li>
                        <li className="hover:text-gray-500">
                            <Link to="experience" smooth={true} duration={500}>
                                Experience
                            </Link>
                        </li>
                        <li className="hover:text-gray-500">
                            <Link to="work" smooth={true} duration={500}>
                                Work
                            </Link>
                        </li>
                        <li className="hover:text-gray-500">
                            <Link to="contact" smooth={true} duration={500}>
                                Contact
                            </Link>
                        </li>
                    </ul>

                    {/* toggle button */}
                    <div className="hidden sm:flex justify-center items-center mr-[2rem] z-10 text-[1.75rem]">
                        {toggle ? <FaTimes onClick={handleClick}/> : <FaBars onClick={handleClick}/>}
                    </div>

                    {/* middle Nav links */}
                    <ul className={toggle ? "absolute top-0 left-0 bg-blue-50 w-full h-screen flex flex-col justify-center items-center" : "hidden"}>
                        <li className="p-[1rem] font-bold text-[1.75rem]">
                            <Link onClick={handleClick} to="home" smooth={true} duration={500}>
                                Home
                            </Link>
                        </li>
                        <li className="p-[1rem] font-bold text-[1.75rem]">
                            <Link onClick={handleClick} to="about" smooth={true} duration={500}>
                                About
                            </Link>
                        </li>
                        <li className="p-[1rem] font-bold text-[1.75rem]">
                            <Link onClick={handleClick} to="experience" smooth={true} duration={500}>
                                Experience
                            </Link>
                        </li>
                        <li className="p-[1rem] font-bold text-[1.75rem]">
                            <Link onClick={handleClick} to="work" smooth={true} duration={500}>
                                Work
                            </Link>
                        </li>
                        <li className="p-[1rem] font-bold text-[1.75rem]">
                            <Link onClick={handleClick} to="contact" smooth={true} duration={500}>
                                Contact
                            </Link>
                        </li>
                    </ul>

                    {/* Social Icons */}
                    <div className="lg:hidden flex fixed flex-col top-[35%] left-0">
                        <ul>
                            <li className="w-[160px] h-[60px] flex justify-center items-center bg-blue-500 ml-[-100px] hover:ml-[-5px] duration-300">
                                <a className="flex justify-between items-center w-[130px] text-gray-300" target="_blank" rel="noreferrer" href="https://www.facebook.com/kenneth.perante">
                                    Facebook <FaFacebook size={30}/>
                                </a>
                            </li>

                            <li className="w-[160px] h-[60px] flex justify-center items-center bg-gray-600 ml-[-100px] hover:ml-[-5px] duration-300">
                                <a className="flex justify-between items-center w-[130px] text-gray-300" target="_blank" rel="noreferrer" href="https://github.com/Jomar1596">
                                    Github <FaGithub size={30}/>
                                </a>
                            </li>

                            <li className="w-[160px] h-[60px] flex justify-center items-center bg-blue-600 ml-[-100px] hover:ml-[-5px] duration-300">
                                <a className="flex justify-between items-center w-[130px] text-gray-300" target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/jomar-perante-239575243/">
                                    Linkedin <FaLinkedin size={30}/>
                                </a>
                            </li>
                            <li className="w-[160px] h-[60px] flex justify-center items-center bg-gray-500 ml-[-100px] hover:ml-[-5px] duration-300">
                                <a className="flex justify-between items-center w-[130px] text-gray-300" href={Resume} target="_blank" rel="noreferrer">
                                    Resume <AiFillProfile size={30}/>
                                </a>
                            </li>
                        </ul>
                    </div>
            </div>
        </div>
    )
}

export default Navbar