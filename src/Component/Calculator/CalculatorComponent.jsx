import React from 'react'

const CalculatorComponent = () => {
    return (
        <>

            <div className='min-h-screen w-full flex justify-center items-center bg-neutral-100'>
                <div className='h-[28rem] shadow-lg shadow-neutral-500 min-w-60 bg-black rounded-[2rem]'>
                    <div className='h-1/3 w-full flex justify-center items-center text-white font-Raleway text-xl'>
                        24+24
                    </div>
                    <div className='p-2 flex justify-evenly items-center'>
                        <button className='text-black font-bold font-Raleway text-xl h-9 w-9 rounded-full bg-neutral-300'>AC</button>
                        <button className='text-black font-bold font-Raleway text-xl h-9 w-9 rounded-full bg-neutral-300'>X</button>
                        <button className='text-black font-bold font-Raleway text-xl h-9 w-9 rounded-full bg-neutral-300'>%</button>
                        <button className='text-black font-bold font-Raleway text-xl h-9 w-9 rounded-full bg-neutral-300'>/</button>
                    </div>
                    <div className='p-2 flex justify-evenly items-center'>
                        <button className='text-black font-bold font-Raleway text-xl h-9 w-9 rounded-full bg-neutral-300'>7</button>
                        <button className='text-black font-bold font-Raleway text-xl h-9 w-9 rounded-full bg-neutral-300'>8</button>
                        <button className='text-black font-bold font-Raleway text-xl h-9 w-9 rounded-full bg-neutral-300'>9</button>
                        <button className='text-black font-bold font-Raleway text-xl h-9 w-9 rounded-full bg-neutral-300'>X</button>
                    </div>
                    <div className='p-2 flex justify-evenly items-center'>
                        <button className='text-black font-bold font-Raleway text-xl h-9 w-9 rounded-full bg-neutral-300'>4</button>
                        <button className='text-black font-bold font-Raleway text-xl h-9 w-9 rounded-full bg-neutral-300'>5</button>
                        <button className='text-black font-bold font-Raleway text-xl h-9 w-9 rounded-full bg-neutral-300'>6</button>
                        <button className='text-black font-bold font-Raleway text-xl h-9 w-9 rounded-full bg-neutral-300'>-</button>
                    </div>
                    <div className='p-2 flex justify-evenly items-center'>
                        <button className='text-black font-bold font-Raleway text-xl h-9 w-9 rounded-full bg-neutral-300'>1</button>
                        <button className='text-black font-bold font-Raleway text-xl h-9 w-9 rounded-full bg-neutral-300'>2</button>
                        <button className='text-black font-bold font-Raleway text-xl h-9 w-9 rounded-full bg-neutral-300'>3</button>
                        <button className='text-black font-bold font-Raleway text-xl h-9 w-9 rounded-full bg-neutral-300'>+</button>
                    </div>
                    <div className='p-2 flex justify-evenly items-center'>
                        <button className='text-black font-bold font-Raleway text-xl h-9 w-9 rounded-full bg-neutral-300'>0</button>
                        <button className='text-black font-bold font-Raleway text-xl h-9 w-9 rounded-full bg-neutral-300'>C</button>
                        <button className='text-black font-bold font-Raleway text-xl h-9 w-9 rounded-full bg-neutral-300'>C</button>
                        <button className='text-black font-bold font-Raleway text-xl h-9 w-9 rounded-full bg-neutral-300'>=</button>
                    </div>
                </div>
            </div>

        </>
    )
}

export default CalculatorComponent
