import React, { useState } from 'react'

const OTP = ({ otplenghtprop = 6 }) => {
    const [otpfields, SetOTPFields] = useState(new Array(otplenghtprop).fill(""))


    const HandleKeyDown = (event, index) => {
        console.log(event);
        if (event.key === !NaN) {
            return;
        }
    }
    return (
        <>
            <div className='h-screen w-full flex justify-center items-center'>

                <div>
                    {
                        otpfields.map((value, index) => (
                            <input className=' border border-black w-14 h-14 focus:border-blue-600 focus:border-2 outline-none focus:ring-2' key={index} onKeyDown={(e) => HandleKeyDown(e, index)} value={value} type="text" />
                        ))
                    }
                </div>
            </div>
        </>
    )
}

export default OTP
