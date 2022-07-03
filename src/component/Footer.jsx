import React from 'react'
import { useState } from 'react'
import { FaThumbsUp, FaEye } from 'react-icons/fa'
import { BiMessage } from 'react-icons/bi'

const Footer = () => {

    const [like, setLike] = useState(0)

    const [liked, setLiked] =useState(false)

    const pressHandle = () => {
        setLiked(prevState => !prevState)
    }

    const handleClickLike = () => {
        if ( liked === true ) {
            setLike(prevState => prevState - 1)
        } else {
            setLike(prevState => prevState + 1)
        }
    }

    const classN = liked ? "group flex justify-center items-center bg-blue-600 w-[100px] h-[100px] rounded-full" 
                        : "group flex justify-center items-center bg-gray-600 hover:bg-zinc-800 w-[100px] h-[100px] rounded-full"
    

    return (
        <div className="w-full bg-black text-white">

            {/* Content */}
            <div className="flex flex-col justify-center items-center p-4">
                <div className="flex flex-col justify-center items-center">
                    <div onClick={pressHandle} className={classN}>
                        <button  onClick={handleClickLike} className="w-full h-full flex  flex-col items-center justify-center ">
                            <FaThumbsUp size={40}/>
                            {liked === false && <p className="text-[0.8rem] mt-2">{like}</p>}
                        </button>
                    </div>
                    <div className="flex flex-col justify-center items-center">
                        <p className="flex justify-center items-center text-3xl sm:text-2xl p-3"><strong><em>Jomar Perante</em></strong>&nbsp;Portfolio</p>
                        <div className="flex justify-center items-center gap-3 text-[1.2rem] sm:text-[0.9rem]">
                            <FaThumbsUp/> <p className="text-[1rem]">{like}</p>
                            <BiMessage />  <p className="text-[1rem]">0</p>
                            <FaEye />  <p className="text-[1rem]">0</p>
                        </div>
                    </div>
                </div>
                <div>
                    <p className="mt-8">&copy; 2022 Portfolio</p>
                </div>
            </div>

        </div>
    )
}

export default Footer