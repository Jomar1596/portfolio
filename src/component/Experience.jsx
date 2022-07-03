import React from 'react'
import Fade from 'react-reveal/Fade'
import HTML from '../component/images/HTML.png'
import CSS from '../component/images/CSS.png'
import JS from '../component/images/JS.png'
import REACT from '../component/images/REACT.png'
import PHP from '../component/images/PHP.png'
import MySQL from '../component/images/MySQL.png'

const Experience = () => {
    return (
        <div name="experience" className="flex sm:flex-wrap justify-center items-center w-full h-screen bg-blue-50 ">
            {/* Title */}
            <Fade up>
                <div className="ml-40 xl:ml-20 lg:ml-10 md:ml-5">
                    <h1 className="text-4xl xl:text-3xl sm:text-2xl">Experience:</h1>
                    <h1 className="text-2xl xl:text-[1rem] sm:w-[80%] sm:text-[1rem] text-gray-500">These are the technologies I usually work </h1>
                </div>
            </Fade>
            {/* Content */}
            <Fade up>
                <div className="w-[40%] xl:w-[50%]  m-auto grid grid-cols-3 md:grid-cols-2 sm:grid-cols-2 justify-center items-center">
                    <Fade delay={600}>
                        <div className="group rounded  flex flex-col justify-center items-center shadow-lg shadow-blue-200/50 hover:shadow-orange-700">
                            <img className="h-full"  src={HTML} alt="html"/>
                            <p className="group-hover:opacity-100 opacity-0 text-3xl sm:text-[1rem] md:text-2xl">HTML 5</p>
                        </div>
                    </Fade>
                    <Fade delay={800}>
                        <div className="group rounded  flex flex-col justify-center items-center shadow-lg shadow-blue-200/50 hover:shadow-blue-700">
                            <img src={CSS} alt="html"/>
                            <p className="group-hover:opacity-100 opacity-0 text-3xl sm:text-[1rem] md:text-2xl">CSS 3</p>
                        </div>
                    </Fade>
                    <Fade delay={1000}>
                        <div className="group rounded  flex flex-col justify-center items-center shadow-lg shadow-blue-200/50 hover:shadow-yellow-700">
                            <img className="" src={JS} alt="html"/>
                            <p className="group-hover:opacity-100 opacity-0 text-3xl sm:text-[1rem] md:text-2xl">JS</p>
                        </div>
                    </Fade>
                    <Fade delay={1200}>
                        <div className="group rounded  flex flex-col justify-center items-center shadow-lg shadow-blue-200/50 hover:shadow-cyan-700">
                            <img src={REACT} alt="html"/>
                            <p className="group-hover:opacity-100 opacity-0 text-3xl sm:text-[1rem] md:text-2xl">REACT</p>
                        </div>
                    </Fade>
                    <Fade delay={1400}>
                        <div className="group rounded  flex flex-col justify-center items-center shadow-lg shadow-blue-200/50 hover:shadow-indigo-700">
                            <img src={PHP} alt="html"/>
                            <p className="group-hover:opacity-100 opacity-0 text-3xl sm:text-[1rem] md:text-2xl">PHP</p>
                        </div>
                    </Fade>
                    <Fade delay={1600}>
                        <div className="group rounded  flex flex-col justify-center items-center shadow-lg shadow-blue-200/50 hover:shadow-sky-700">
                            <img src={MySQL} alt="html"/>
                            <p className="group-hover:opacity-100 opacity-0 text-3xl sm:text-[1rem] md:text-2xl">MySQL</p>
                        </div>
                    </Fade>
                </div>
            </Fade>
        </div>
    )
}

export default Experience