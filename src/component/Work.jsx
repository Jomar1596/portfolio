import React from 'react'
// import { useState } from 'react'
import Ornamental from '../component/images/ornamentalP.PNG'
import portfolio from '../component/images/portfolio.PNG'
import DailyDiscountAdmin from '../component/images/DailyDiscountAdmin.PNG'
import Fade from 'react-reveal/Fade'

const Work = ({slides}) => {

    // const [currentIndex, setCurrentIndex] = useState(0);

    // const leftArrowStyle = {
    //     position: "absolute",
    //     top: "50%",
    //     transform: "translate(0, -50%)",
    //     left: "5%",
    //     fontSize: "30px",
    //     color: "#434343",
    //     zIndex: 1,
    //     cursor: "pointer"
    // };
    // const rightArrowStyle = {
    //     position: "absolute",
    //     top: "50%",
    //     transform: "translate(0, -50%)",
    //     right: "10%",
    //     fontSize: "30px",
    //     color: "#434343",
    //     zIndex: 1,
    //     cursor: "pointer"
    // };

    // const goToPrevious = () => {
    //     const isFirstIndex = currentIndex === 0;
    //     const newIndex = isFirstIndex ? slides.length - 1 : currentIndex - 1;
    //     setCurrentIndex(newIndex);
    // };

    // const goToNext = () => {
    //     const isLastIndex = currentIndex === slides.length - 1;
    //     const newIndex = isLastIndex ? 0 : currentIndex + 1;
    //     setCurrentIndex(newIndex);
    // };

    return (
        <div name="work" className="w-full min-h-screen flex flex-col justify-center items-center bg-blue-50">

            <div className="flex flex-col w-[80%] m-auto py-[8rem] gap-10">
                <Fade right>
                    {/* Title */}
                    <div>
                        <h1 className="text-4xl font-semibold">My Projects</h1>
                        <p className="text-2xl text-gray-700">Here are the projects I've develop while learning as Web Developer.</p>
                    </div>
                </Fade>
                

                {/* Projects */}
                <div className="flex  flex-col gap-10">
                    
                    <Fade left>
                        {/* Ornamental Plants */}
                        <div className="flex gap-10 xl:flex-wrap">
                            {/* Image */}
                            <div className="flex w-[30%] 2xl:w-[50%] xl:w-[100%] items-center justify-center relative">
                                {/* <div style={leftArrowStyle} onClick={goToPrevious}>⟨</div>
                                <div style={rightArrowStyle} onClick={goToNext}>⟩</div> */}
                                <img className="rounded-[20px] w-full xl:w-[70%] h-[90%] lg:w-[80%] md:w-full" src={Ornamental} alt="oranamental" />
                            </div>

                            <div className="flex flex-col w-[70%] xl:w-full justify-center gap-5">
                                {/* title project */}
                                <div  className="w-[60%] 2xl:w-[80%] md:w-full border-b-4 border-green-600 p-2">
                                    <p className="text-[1.5rem] font-bold 2xl:text-2xl lg:text-2xl text-green-600 ">A Cloudbase Ordering System with Chatbot Solution for Ornamental Plants </p>
                                </div>

                                {/* Texhnologies */}
                                    <div className="flex sm:flex-wrap gap-5 text-yellow-400">
                                        <span>HTML</span>
                                        <span>CSS</span>
                                        <span>JS</span>
                                        <span>Bootstrap</span>
                                        <span>PHP</span>
                                        <span>MySQL</span>
                                    </div>

                                {/* Description */}
                                <div className="">
                                    <p className="w-[60%] 2xl:w-[80%] md:w-full text-[1rem] font-semibold text-gray-500 ">This Project is an Ordering System with Online Transaction and Chatbot Solution. Open for Small Businesses who sells Ornamental plants and 
                                        Customers that is fond on Buying Ornamental Plants
                                    </p>
                                </div>
                                <div className="">
                                    <a target="_blank" rel="noreferrer" href="https://ornamentalplants-jdk.com/">
                                        <button className="text-white font-semibold px-5 py-2 bg-green-600">View Project</button>
                                    </a>
                                    <span className="ml-2 sm:text-[0.7rem] text-red-300">Alert: Expired Hosting</span>
                                </div>
                            </div>
                        </div>
                    </Fade>
                    
                    <Fade right>
                        {/* Portfolio */}
                        <div className="flex gap-10 xl:flex-wrap">
                            {/* Image */}
                            <div className="flex w-[30%] 2xl:w-[50%] xl:w-[100%] items-center justify-center">
                                <img className="rounded-[20px] w-full xl:w-[70%] lg:w-[80%] md:w-full border-blue-500 border-solid border-[20px]" src={portfolio} alt="oranamental" />
                            </div>

                            <div className="flex flex-col w-[70%] xl:w-full justify-center gap-5">
                                {/* title project */}
                                <div  className="w-[60%] 2xl:w-[80%] md:w-full border-b-4 border-blue-600 p-2">
                                    <p className="text-[1.5rem] font-bold 2xl:text-2xl lg:text-2xl text-blue-600 ">JPERANTE Portfolio </p>
                                </div>

                                {/* Texhnologies */}
                                    <div className="flex gap-5 sm:flex-wrap text-yellow-400">
                                        <span>HTML</span>
                                        <span>CSS</span>
                                        <span>Tailwind</span>
                                        <span>JS</span>
                                        <span>ReactJs</span>
                                    </div>

                                {/* Description */}
                                <div className="">
                                    <p className="w-[60%] 2xl:w-[80%] md:w-full text-[1rem] font-semibold text-gray-500">
                                        This project is a Web Portfolio that contains Personal Infromation and Personal Projects.
                                    </p>
                                </div>
                                <div className="">
                                    <a target="_blank" rel="noreferrer" href="https://jperanteportfolio.vercel.app/">
                                        <button className="text-white font-semibold px-5 py-2 bg-blue-600">View Project</button>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </Fade>

                    <Fade left>
                        {/* Daily Discount */}
                        <div className="flex gap-10 xl:flex-wrap">
                            {/* Image */}
                            <div className="flex w-[30%] 2xl:w-[50%] xl:w-[100%] items-center justify-center">
                                <img className="rounded-[20px] w-full xl:w-[70%] lg:w-[80%] md:w-full border-gray-500 border-solid border-[20px]" src={DailyDiscountAdmin} alt="oranamental" />
                            </div>

                            <div className="flex flex-col w-[70%] xl:w-full justify-center gap-5">
                                {/* title project */}
                                <div  className="w-[60%] 2xl:w-[80%] md:w-full border-b-4 border-gray-600 p-2">
                                    <p className="text-[1.5rem] font-bold 2xl:text-2xl lg:text-2xl text-gray-600 ">Daily Discount</p>
                                </div>

                                {/* Texhnologies */}
                                    <div className="flex gap-5 sm:flex-wrap text-yellow-400">
                                        <span>HTML</span>
                                        <span>CSS</span>
                                        <span>Tailwind</span>
                                        <span>JS</span>
                                        <span>ReactJs</span>
                                    </div>

                                {/* Description */}
                                <div className="flex flex-col gap-3">
                                    <p className="w-[60%] 2xl:w-[80%] md:w-full text-[1rem] font-semibold text-gray-500">
                                        This project is a Web Application that provides Online Transactions for customers who are into buying Online Games assets.
                                    </p>
                                    <p className="w-[60%] 2xl:w-[80%] md:w-full text-[1rem] font-semibold text-gray-400">(Team Project - Ongoing)</p>
                                </div>
                                <div className="flex flex-wrap gap-5">
                                    <a target="_blank" rel="noreferrer" href="https://daily-discount-admin.vercel.app/" >
                                        <button className="w-[17rem] text-white font-semibold px-5 py-2 bg-gray-600">View Project as Admin</button>
                                    </a>
                                    <a target="_blank" rel="noreferrer" href="https://daily-discount.vercel.app/" >
                                        <button className="w-[17rem] text-white font-semibold px-5 py-2 bg-gray-600">View Project as Customer</button>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </Fade>

                </div>
            </div>

        </div>
    )
}

export default Work