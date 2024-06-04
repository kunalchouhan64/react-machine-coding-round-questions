import React, { useState } from 'react'

const Accordian = () => {
    const Data = [
        {
            id: 1,
            title: "this is the title of the first data?",
            content: "this is the content of the first data we are using here and this was really fun to do that."
        },
        {
            id: 2,
            title: "this is the title of the second data?",
            content: "this is the content of the second data we are using here and this was really fun to do that."
        },
        {
            id: 3,
            title: "this is the title of the third data?",
            content: "this is the content of the third data we are using here and this was really fun to do that."
        },
        {
            id: 4,
            title: "this is the title of the fourth data?",
            content: "this is the content of the fourth data we are using here and this was really fun to do that."
        },
        {
            id: 5,
            title: "this is the title of the fifth data?",
            content: "this is the content of the fifth data we are using here and this was really fun to do that."
        },
    ]

    const [isshowing, SetIsShowing] = useState(1)
    const Handleclick = (id) => {
        SetIsShowing(isshowing === id ? isshowing : id)
    }
    return (
        <>
            <div className='min-h-screen w-full flex justify-center items-center bg-zinc-900 flex-col  px-7'>
                <h2 className='text-white font-Raleway text-4xl py-10'>Accordian</h2>
                <div className='bg-zinc-800 w-full  md:w-2/3 h-2/3 text-white p-4 shadow-xl shadow-zinc-700'>
                    {
                        Data.map((item) => {
                            return (
                                <>
                                    <div key={item.id} className='py-4 space-y-2'>
                                        <div onClick={() => Handleclick(item.id)} className='bg-zinc-700 p-5 cursor-pointer flex justify-between items-center'>
                                            <p>{item.title}</p>
                                            <p>{isshowing === item.id ? '🔼' : '🔽'}</p>
                                        </div>
                                        <div className={`bg-black text-white p-5  ${isshowing === item.id ? 'block' : 'hidden'}`}>
                                            <p>{item.content}</p>
                                        </div>
                                    </div>
                                </>
                            )
                        })
                    }
                </div>
            </div>

        </>
    )
}

export default Accordian
