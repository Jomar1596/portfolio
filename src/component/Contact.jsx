import React from 'react'
import { FaLinkedin, FaPhoneAlt } from 'react-icons/fa'
import { FiMail} from 'react-icons/fi'
import Fade from 'react-reveal'

const Contact = () => {
    return (
        <Fade up>
            <div name="contact" className="w-full h-screen bg-slate-900 text-white">

                {/* Content */}
                <div className="w-[80%] h-[100%] m-auto grid grid-cols-2 sm:grid-cols-1 justify-center items-center">
                    
                    {/* My Contacts */}
                    <div className=" flex justify-center items-center flex-col">
                        <div className="flex flex-col gap-4">
                            <p className="text-6xl lg:text-4xl">Let's Build Together!</p>
                            <p className="text-4xl lg:text-2xl">Get in touch with me.</p>
                            <div className="flex items-center gap-3">
                                <FaPhoneAlt /><a href="/" className="text-1xl sm:text-1xl">09305707994</a>
                            </div>
                            <div className="flex items-center gap-3">
                                <FiMail /><a href="/" className="text-1xl sm:text-1xl">jomarperante@gmail.com</a>
                            </div>
                            <div className="flex items-center gap-3">
                            <FaLinkedin /><a href="/" className="text-1xl sm:text-1xl">Linkedin</a>
                            </div>
                        </div>
                    </div>

                    {/* Message Me */}
                    <div className="flex justify-center items-center flex-col">
                        <div className="w-[100%]" >
                            <p className="mb-5 lg:text-3xl text-4xl">Contact me</p>
                            <div className="flex justify-center flex-col">
                                <input className="m-2 p-2 bg-transparent outline-none  border-b-2 hover:border-b-4 focus:border-rose-900" type="text" placeholder="Name" />
                                <input className="m-2 p-2 bg-transparent outline-none border-b-2 hover:border-b-4 focus:border-rose-900" type="Email" placeholder="Email" />
                                <input className="my-3 p-4 bg-transparent outline-none border-b-2 hover:border-b-4 focus:border-rose-900" type="text" placeholder="Type Message" />
                            </div>
                            <div className="flex justify-center">
                                <button className="mt-5 p-3 bg-orange-500 rounded">Send Message</button>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </Fade>
    )
}

export default Contact