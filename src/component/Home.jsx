import React from 'react'
import Resume from './assets/Perante_Resume.pdf'
import Fade from 'react-reveal/Fade';

const Home = () => {
    return (
        <div name="home" className="w-full h-screen bg-blue-50 gap-3">
            
            {/* container */}
            <Fade down>
                <div className="max-w-[850px] mx-auto px-8  flex flex-col justify-center h-full gap-4">
                    <p className="">Hi, my name is</p>
                    <h1 className="text-8xl md:text-6xl sm:text-5xl text-blue-600">Jomar Perante</h1>
                    <h1 className="text-6xl md:text-5xl sm:text-4xl">A Front-End Web Developer</h1>
                    <p className="max-w-[600px] md:max-w-[450px] sm:max-w-[350px] mt-[0.5rem]">
                        As a Front-End Web Developer my goal is to give my Clients an Exceptional
                        experience thru Responsive Web Applications. Always welcome for new opportunities and learnings.
                    </p>
                    <div>
                        <a href={Resume} target="_blank" rel="noreferrer">
                            <button className="bg-blue-600 p-3">Download Resume</button>
                        </a>
                    </div>
                </div>
            </Fade>
            

        </div>
    )
}

export default Home