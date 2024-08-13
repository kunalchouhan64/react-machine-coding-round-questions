import React, { useState } from 'react'

const StarRating = () => {
    const [rating, SetRating] = useState(0)
    const [hover, SetHover] = useState(0)
    return (
        <>
            <div className='h-screen w-full flex justify-center items-center flex-col'>
                <div className='h-auto py-10 w-1/2 flex justify-center'>
                    {
                        [1, 2, 3, 4, 5].map((num) => (
                            <button className='cursor-pointer  transition-all ease-linear duration-300' key={num} onClick={() => SetRating(num)} onMouseOver={() => SetHover(num)} onMouseLeave={() => SetHover(rating)}>
                                <span className={`text-5xl px-1  transition-all ease-linear duration-300 ${num <= ((rating && hover) || hover) ? 'text-yellow-500' : 'text-gray-300'}`}>&#9733;</span>
                            </button>
                        ))
                    }

                </div>
                <button onClick={() => { SetRating(0), SetHover(0) }}>Reset Rating</button>
            </div>
        </>
    )
}

export default StarRating
