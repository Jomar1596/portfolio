import React from 'react'
import Fade from 'react-reveal'

const About = () => {
    return (
        <div name="about" className="w-full h-screen bg-blue-50">
            
            {/* Container About */}
            <div className="w-[80%] sm:w-[100%] m-auto h-full flex justify-center items-center">
                {/* first div Solo */}
                <div className=" w-[100%] grid grid-cols-2 sm:flex sm:flex-col">
                    <Fade duration={3000} left>
                        <div className="flex justify-end md:justify-start p-[1rem]">
                            <h1 className="text-[2.5rem] md:text-4xl sm:text-[2.5rem] border-b-4 border-indigo-600 font-semibold">
                                About Me
                            </h1>
                        </div>
                    </Fade>
                        <div>
                        </div>
                    {/* Second Div Two */}
                        <Fade duration={3000} left>
                            <div className="flex justify-end sm:justify-start p-[1rem]">
                                <p className="w-[90%] sm:justify-start justify-end md:w-[100%] flex text-3xl md:text-2xl text-orange-500">Thank you for visiting my Portfolio</p>
                            </div>
                        </Fade>
                        <Fade duration={3000} right>
                            <div className="p-[1rem]">
                                <p className="w-[70%] md:w-[100%] flex text-1xl md:text-[1rem]">
                                    I am passionate in designing and building web applications. Striving to gain more experience and to learn something new about Web Developement. 
                                </p>
                            </div>
                        </Fade>
                </div>
            </div>
        </div>
    )
}

export default About