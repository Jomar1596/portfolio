import React from 'react'
import Ornamental from '../component/images/Ornamental.PNG'
import Fade from 'react-reveal/Fade'

const Work = () => {
    return (
        <div name="work" className="w-full min-h-screen flex flex-col justify-center items-center bg-blue-50">

            <Fade right>
                <div className="text-4xl flex justify-end font-semibold">
                    <h1 className="">My Projects</h1>
                </div>

                {/* Content */}
                <div className="flex flex-wrap flex-col xl:flex-row lg:flex-row sm:grid xl:h-[100%] h-[70%] w-[80%] m-auto">

                    {/* Image Work */}
                    <div className=" w-[50%] sm:w-full flex-1 sm:flex-none flex justify-center items-center">
                            <img className="w-[100%] xl:w-[100%] sm:w-[100%] h-[70%] xl:h-[100%]" src={Ornamental} alt="work" />
                    </div>

                    {/* Title */}
                    <div className="w-[50%] flex-2 sm:flex-none sm:w-full flex justify-start items-center xl:p-0 p-[4rem]">
                        <div className="border-b-4 border-green-600">
                            <p className="text-[1.5rem] font-bold 2xl:text-2xl lg:text-2xl text-green-900 ">
                                A Cloudbase Ordering System with Chatbot Solution for Ornamental Plants 
                            </p> 
                        </div>
                    </div>

                    {/* Description */}
                    <div className="w-[50%] flex-2 sm:w-full sm:flex-none flex flex-col justify-start xl:justify-center sm:justify-start xl:items-center sm:items-start px-[4rem] lg:p-0 text-gray-700">
                        <p>This Project is an Ordering System with Online Transaction and Chatbot Solution. Open for Small Businesses who sells Ornamental plants and 
                            Customers that is fond on Buying Ornamental Plants
                        </p>
                        <div className="w-full flex justify-end items-center mt-10">
                            <a href="https://ornamentalplants-jdk.com/">
                                <button className="bg-green-500 rounded p-2 cursor-pointer">Check Project</button>
                            </a>
                        </div>
                    </div>
                </div>

                <div className="flex flex-wrap flex-col xl:flex-row lg:flex-row sm:grid xl:h-[100%] h-[70%] w-[80%] m-auto">

                    {/* Image Work */}
                    <div className=" w-[50%] sm:w-full flex-1 sm:flex-none flex justify-center items-center">
                            <img className="w-[100%] xl:w-[100%] sm:w-[100%] h-[70%] xl:h-[100%]" src={Ornamental} alt="work" />
                    </div>

                    {/* Title */}
                    <div className="w-[50%] flex-2 sm:flex-none sm:w-full flex justify-start items-center xl:p-0 p-[4rem]">
                        <div className="border-b-4 border-indigo-600">
                            <p className="text-[1.5rem] font-bold 2xl:text-2xl lg:text-2xl text-green-900 ">
                                A Cloudbase Ordering System with Chatbot Solution for Ornamental Plants 
                            </p> 
                        </div>
                    </div>

                    {/* Description */}
                    <div className="w-[50%] flex-2 sm:w-full sm:flex-none flex flex-col justify-start xl:justify-center sm:justify-start xl:items-center sm:items-start px-[4rem] lg:p-0 text-gray-700">
                        <p>This Project is an Ordering System with Online Transaction and Chatbot Solution. Open for Small Businesses who sells Ornamental plants and 
                            Customers that is fond on Buying Ornamental Plants
                        </p>
                        <div className="w-full flex justify-end items-center mt-10">
                            <a href="https://ornamentalplants-jdk.com/">
                                <button className="bg-green-500 rounded p-2 cursor-pointer">Check Project</button>
                            </a>
                        </div>
                    </div>
                </div>
            </Fade> 

        </div>
    )
}

export default Work