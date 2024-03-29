import { FaLinkedin, FaPhoneAlt } from 'react-icons/fa'
import { FiMail} from 'react-icons/fi'
import Fade from 'react-reveal/Fade'
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {

    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_rsmocwd', 'template_hn2hxih', form.current, 'RghJNPgyEamxF-_y9')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
        e.target.reset()
    };

    return (
        <Fade up>
            <div name="contact" className="w-full h-screen sm:h-auto bg-slate-900 text-white">

                {/* Content */}
                <div className="w-[80%] h-[100%] m-auto grid grid-cols-2 sm:grid-cols-1 justify-center items-center">
                    
                    {/* My Contacts */}
                    <div className=" flex justify-center items-center flex-col sm:mt-5">
                        <div className="flex flex-col gap-4">
                            <p className="text-6xl lg:text-4xl font-semibold">Let's Build Together!</p>
                            <p className="text-4xl lg:text-2xl">Get in touch with me.</p>
                            <div className="flex items-center gap-3">
                                <FaPhoneAlt /><span className="text-1xl sm:text-1xl">09305707994</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <FiMail /><span className="text-1xl sm:text-1xl">jomarperante@gmail.com</span>
                            </div>
                            <div className="flex items-center gap-3">
                            <FaLinkedin /><a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/jomar-perante-239575243/" className="text-1xl sm:text-1xl">Linkedin</a>
                            </div>
                        </div>
                    </div>

                    {/* Message Me */}
                    <form ref={form} onSubmit={sendEmail}>
                        <div className="flex justify-center items-center flex-col mb-[20px] mt-[20px]">
                            <div className="w-[100%]" >
                                <p className="mb-5 lg:text-3xl text-4xl font-semibold">Contact me</p>
                                <div className="flex justify-center flex-col">
                                    <input required className="m-2 p-2 bg-transparent outline-none  border-b-2 hover:border-b-4 focus:border-rose-900" type="text" name="userName" placeholder="Name*" />
                                    <input required className="m-2 p-2 bg-transparent outline-none border-b-2 hover:border-b-4 focus:border-rose-900" type="Email" name="email" placeholder="Email*" />
                                    <input required className="m-2 p-2 bg-transparent outline-none border-b-2 hover:border-b-4 focus:border-rose-900" type="text" name="subject" placeholder="Subject*" />
                                    <textarea required id="" cols="20" rows="5" className="rounded-[5px] p-3 text-black outline-none" name="message" placeholder="Message*"></textarea>
                                </div>
                                <div className="flex justify-end">
                                    <input type="submit" className="mt-5 px-6 py-2 bg-orange-500 rounded cursor-pointer" placeholder="Submit"/>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>

            </div>
        </Fade>
    )
}

export default Contact