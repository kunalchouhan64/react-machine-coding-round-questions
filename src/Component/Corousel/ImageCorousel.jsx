import React, { useState } from 'react'

const ImageCorousel = () => {
    const Images = [
        {
            id: 1,
            url: "https://images.unsplash.com/photo-1690268473978-d2e465e094a4?q=80&w=2128&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
        {
            id: 2,
            url: "https://images.unsplash.com/photo-1716881757832-b71ca98e3ca5?q=80&w=2086&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
        {
            id: 3,
            url: "https://plus.unsplash.com/premium_photo-1700752853984-d3d1574aabd2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
        {
            id: 4,
            url: "https://images.unsplash.com/photo-1717260740236-dc8afdfb6bf2?q=80&w=2128&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
        {
            id: 5,
            url: "https://images.unsplash.com/photo-1715945469434-e1259ca8c4df?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0NHx8fGVufDB8fHx8fA%3D%3D",
        },
        {
            id: 6,
            url: "https://images.unsplash.com/photo-1715464881783-cd065e91cbef?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
        {
            id: 7,
            url: "https://images.unsplash.com/photo-1714779573220-39c843a7daa3?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
        {
            id: 8,
            url: "https://images.unsplash.com/photo-1508667733074-733fa821f4bf?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
        {
            id: 9,
            url: "https://plus.unsplash.com/premium_photo-1672870611338-88a25c318721?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },

    ]

    const [firstimgindex, SetFirstIMGIndex] = useState(0)
    const [secondimgindex, SetSecondIMGIndex] = useState(1)
    const [thirdimgindex, SetThirdIMGIndex] = useState(2);


    const HandleNext = () => {
        if (thirdimgindex >= Images.length - 1) {
            SetFirstIMGIndex(0)
            SetSecondIMGIndex(1)
            SetThirdIMGIndex(2)
        }
        else {

            SetFirstIMGIndex((prev) => prev + 1)
            SetSecondIMGIndex((prev) => prev + 1)
            SetThirdIMGIndex((prev) => prev + 1)

        }
    }

    const HandlePrev = () => {
        if (firstimgindex == 0) {
            SetFirstIMGIndex(0)
            SetSecondIMGIndex(1)
            SetThirdIMGIndex(2)
        }
        else {
            SetFirstIMGIndex((prev) => prev - 1)
            SetSecondIMGIndex((prev) => prev - 1)
            SetThirdIMGIndex((prev) => prev - 1)
        }

    }
    return (
        <>
            <div className='min-h-screen w-full p-10 flex justify-center items-center bg-zinc-900 text-white'>
                <button onClick={() => HandlePrev()} className='py-2 px-8 bg-red-700 text-white font-Raleway mx-5'>Prev</button>
                <div className='h-1/2 w-1/2 flex justify-between items-center'>
                    <img className='object-center object-cover h-80 w-80' src={Images[firstimgindex].url} alt="" />
                    <img className='object-center object-cover h-80 w-80' src={Images[secondimgindex].url} alt="" />
                    <img className='object-center object-cover h-80 w-80' src={Images[thirdimgindex].url} alt="" />
                </div>
                <button className='py-2 px-8 bg-green-700 text-white font-Raleway mx-5' onClick={() => HandleNext()}>Next</button>
            </div>
        </>
    )
}

export default ImageCorousel
