import React, { useEffect, useState } from 'react'

const ProgressBar = () => {
    const [progress, SetProgress] = useState(0);


    useEffect(() => {
        const interval = setInterval(() => {
            if (progress < 100) {
                SetProgress(prevprogress => prevprogress + 1)
            }
        }, 100);

        return () => {
            clearInterval(interval)
        }
    }, [progress])

    return (
        <>
            <div className='min-h-screen w-full bg-zinc-900 text-white flex justify-center items-center flex-col'>
                <span className='text-3xl text-white font-Raleway py-3'>{progress}%</span>
                <div className='w-2/3 border border-white h-10 bg-gray-500'>
                    <div className='h-full flex justify-end items-center font-semibold text-lg px-4' style={{ width: `${progress}%`, backgroundColor: 'green' }}>
                        {progress}%
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProgressBar
