import React, { useEffect, useState } from 'react'

const Stopwatch = () => {
    const [hour, SetHour] = useState(0)
    const [minutes, SetMinutes] = useState(0)
    const [seconds, SetSeconds] = useState(0);
    const [milisecond, SetMiliSecond] = useState(0);
    const [isrunning, SetIsRunning] = useState(false)






    useEffect(() => {

        if (isrunning) {
            const storeinterval = setInterval(() => {
                SetMiliSecond((premilisec) => {
                    if (premilisec < 99) {
                        return premilisec + 1
                    } else {
                        SetSeconds((prevsecond) => {
                            if (prevsecond < 59) {
                                return prevsecond + 1;
                            } else {
                                SetMinutes((prevminutes) => {
                                    if (prevminutes < 59) {
                                        return prevminutes + 1
                                    } else {
                                        SetHour((prev) => {
                                            return prev + 1
                                        })
                                        return 0
                                    }
                                })
                                return 0;
                            }
                        })
                        return 0
                    }
                })
            }, 10);
            return () => clearInterval(storeinterval)
        }



        // if (isrunning) {
        //     const interval = setInterval(() => {
        //         SetMiliSecond((prevmilisec) => {
        //             if (prevmilisec < 99) {
        //                 return prevmilisec + 1
        //             } else {
        //                 SetSeconds((prevsec) => {
        //                     if (prevsec < 59) {
        //                         return prevsec + 1
        //                     }
        //                     else {
        //                         SetMinutes((prevmin) => {
        //                             if (prevmin < 59) {
        //                                 return prevmin + 1
        //                             } else {
        //                                 SetHour((prevhour) => prevhour + 1);
        //                                 return 0;
        //                             }
        //                         });
        //                         return 0
        //                     }
        //                 });
        //                 return 0
        //             }
        //         })

        //     }, 10);

        //     return () => clearInterval(interval)
        // }

        // if (isrunning) {
        //     const interval = setInterval(() => {
        //         SetMiliSecond((prevmilisec) => {
        //             if (prevmilisec < 59) {
        //                 return prevmilisec + 1
        //             } else {
        //                 SetSeconds((prevSec) => {
        //                     if (prevSec < 59) {
        //                         return prevSec + 1;
        //                     } else {
        //                         SetMinutes((prevMin) => {
        //                             if (prevMin < 59) {
        //                                 return prevMin + 1
        //                             } else {
        //                                 SetHour((prevhour) => prevhour + 1)
        //                                 return 0
        //                             }
        //                         });
        //                         return 0;
        //                     }
        //                 })
        //                 return 0
        //             }
        //         })


        //     }, 10);

        //     // Cleanup function to clear the interval
        //     return () => clearInterval(interval);
        // }
    }, [isrunning]);

    const HandleReset = () => {
        SetIsRunning(false);
        SetMiliSecond(0)
        SetSeconds(0)
        SetMinutes(0)
        SetHour(0)

    }

    return (
        <>
            <div className='min-h-screen w-full bg-zinc-900 text-white flex justify-center items-center flex-col space-y-5'>

                <h2 className='font-Raleway text-2xl font-semibold'>Stop Watch</h2>
                <div className='py-5 px-8 border border-white w-1/2 font-Raleway'>
                    <div className='flex justify-evenly text-2xl'> <span>{hour < 10 ? `0${hour}` : hour} Hour</span> <span>:</span> <span>{minutes < 10 ? `0${minutes}` : minutes} Minutes</span> <span>:</span> <span>{seconds < 10 ? `0${seconds}` : seconds} Sec</span>
                        <span>:</span> <span>{milisecond} Mili-Sec</span>
                    </div>
                    <div className='flex justify-center items-center py-6 space-x-7'>
                        <button onClick={() => { SetIsRunning(true) }} className='bg-green-600 text-white py-2 px-8 font-semibold'>Start</button>
                        <button onClick={() => { SetIsRunning(false) }} className='bg-orange-600 text-white py-2 px-8 font-semibold'>Stop</button>
                        <button onClick={() => { HandleReset() }} className='bg-red-600 text-white py-2 px-8 font-semibold' >Reset</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Stopwatch
