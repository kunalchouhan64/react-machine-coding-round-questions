import React, { useEffect, useState } from 'react'

const CountDown = () => {



    const [countdownenddate, SetCountdownEndDate] = useState();
    const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
    const [countdownStarted, setCountdownStarted] = useState(false);
    // console.log(currentdate);

    useEffect(() => {
        if (!countdownStarted) return;

        const interval = setInterval(() => {
            const now = new Date();
            const endDate = new Date(countdownenddate);
            const difference = endDate - now;

            if (difference <= 0) {
                clearInterval(interval);
                setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
                alert('Countdown completed')
                return;
            }

            const days = Math.floor(difference / (1000 * 60 * 60 * 24));
            const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
            const minutes = Math.floor((difference / (1000 * 60)) % 60);
            const seconds = Math.floor((difference / 1000) % 60);

            
            setTimeLeft({ days, hours, minutes, seconds });
        }, 1000);

        return () => clearInterval(interval);
    }, [countdownStarted, countdownenddate]);

    const Handleclick = () => {
        setCountdownStarted(true);
    };

    const HandleReset = () => {
        window.location.reload()
    }
    const HandleStop = () => {
        setCountdownStarted(false)
    }
    const HandleStart = () => {
        setCountdownStarted(true)
    }
    return (
        <>
            <div className='flex justify-center items-center min-h-screen w-full bg-zinc-900 text-white font-Raleway flex-col'>
                <div className='flex justify-center items-center w-auto py-3 space-x-3'>
                    <div className='flex justify-start items-start'>
                        <span>CountDown End Date:</span>
                        <input value={countdownenddate} onChange={(e) => SetCountdownEndDate(e.target.value)} className='bg-transparent px-3 py-1 border border-white outline-none max-w-64' type="datetime-local" name="" id="" placeholder='Days' />
                        <button onClick={Handleclick} className='bg-zinc-200 text-black py-2 px-5'>Start CountDown</button>
                    </div>


                </div>
                <div className='p-5  w-1/3 bg-zinc-700 shadow-zl shadow-zinc-600 flex justify-around items-center my-10'>
                    <div className='text-center text-3xl'>
                        <p>{timeLeft.days}</p>
                        <p>Days</p>

                    </div>
                    <span className='text-4xl font-bold'>:</span>
                    <div className='text-center text-3xl'>
                        <p>{timeLeft.hours}</p>
                        <p>Hours</p>
                    </div>
                    <span className='text-4xl font-bold'>:</span>
                    <div className='text-center text-3xl'>
                        <p>{timeLeft.minutes}</p>
                        <p>Minutes</p>
                    </div>
                    <span className='text-4xl font-bold'>:</span>
                    <div className='text-center text-3xl'>
                        <p>{timeLeft.seconds}</p>
                        <p>Seconds</p>
                    </div>
                </div>

                <div className='space-x-6'>
                    <button className='bg-red-600 p-2' onClick={HandleReset}>Reset</button>
                    <button className='bg-red-600 p-2' onClick={HandleStop}>Stop</button>
                    <button className='bg-red-600 p-2' onClick={HandleStart}>Start</button>
                </div>

            </div>
        </>
    )
}

export default CountDown
