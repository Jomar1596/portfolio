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
        <div name="experience" className="flex sm:flex-wrap justify-center items-center w-full min-h-screen bg-blue-50">
            {/* Title */}
            <Fade up>
                <div className="ml-40 xl:ml-20 lg:ml-10 md:ml-5 py-20">
                    <h1 className="text-4xl drop-shadow-md font-semibold">Experience:</h1>
                    <h1 className="text-2xl xl:text-[1rem] sm:w-[80%] sm:text-[1rem] text-gray-500">These are the technologies I usually work </h1>
                </div>
            </Fade>
            {/* Content */}
            <Fade up>
                <div className="w-[40%] xl:w-[50%] sm:w-[80%] m-auto grid grid-cols-3 md:grid-cols-2 sm:grid-cols-2 justify-center items-center">
                    <Fade>
                        <div className="group rounded  flex flex-col justify-center items-center shadow-lg shadow-blue-200/50 hover:shadow-orange-600 ">
                            <img className="h-full"  src={HTML} alt="html"/>
                            <p className="group-hover:opacity-100 opacity-0 text-3xl sm:text-[1rem] md:text-2xl text-orange-600 font-semibold drop-shadow-md">HTML 5</p>
                        </div>
                    </Fade>
                    <Fade delay={200}>
                        <div className="group rounded  flex flex-col justify-center items-center shadow-lg shadow-blue-200/50 hover:shadow-blue-700">
                            <img src={CSS} alt="html"/>
                            <p className="group-hover:opacity-100 opacity-0 text-3xl sm:text-[1rem] md:text-2xl text-blue-600 font-semibold drop-shadow-md">CSS 3</p>
                        </div>
                    </Fade>
                    <Fade delay={400}>
                        <div className="group rounded  flex flex-col justify-center items-center shadow-lg shadow-blue-200/50 hover:shadow-yellow-500">
                            <img className="" src={JS} alt="html"/>
                            <p className="group-hover:opacity-100 opacity-0 text-3xl sm:text-[1rem] md:text-2xl text-yellow-500 font-semibold drop-shadow-md">JS</p>
                        </div>
                    </Fade>
                    <Fade delay={600}>
                        <div className="group rounded  flex flex-col justify-center items-center shadow-lg shadow-blue-200/50 hover:shadow-indigo-700">
                            <img src={PHP} alt="html"/>
                            <p className="group-hover:opacity-100 opacity-0 text-3xl sm:text-[1rem] md:text-2xl text-indigo-700 font-semibold drop-shadow-md">PHP</p>
                        </div>
                    </Fade>
                    <Fade delay={800}>
                        <div className="group rounded  flex flex-col justify-center items-center shadow-lg shadow-blue-200/50 hover:shadow-sky-700">
                            <img src={MySQL} alt="html"/>
                            <p className="group-hover:opacity-100 opacity-0 text-3xl sm:text-[1rem] md:text-2xl text-sky-800 font-semibold drop-shadow-md">MySQL</p>
                        </div>
                    </Fade>
                    <Fade delay={1000}>
                        <div className="group rounded  flex flex-col justify-center items-center shadow-lg shadow-blue-200/50 hover:shadow-cyan-400">
                            <img src={REACT} alt="html"/>
                            <p className="group-hover:opacity-100 opacity-0 text-3xl sm:text-[1rem] md:text-2xl text-cyan-400 font-semibold drop-shadow-md ">REACT</p>
                        </div>
                    </Fade>
                </div>
            </Fade>
        </div>
    )
}

export default Experience