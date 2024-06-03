import React, { useState } from 'react'

const Tabs = () => {

    // dynamic tabs ( customizable )
    const buttons = [
        {
            id: 1,
            name: "Indore",
        },
        {
            id: 2,
            name: "Bhopal",
        },
        {
            id: 3,
            name: "Khandwa",
        },
        {
            id: 4,
            name: "Burhanpur",
        }

    ];

    // Content for the Tab's
    const tabcontent = [
        {
            id: 1,
            content: "Indore )) is the largest and most populous city in the Indian state of Madhya Pradesh. It is consistently ranked as the cleanest city in India."
        },
        {
            id: 2,
            content: "Bhopal is the capital city of the Indian state of Madhya Pradesh and the administrative headquarters of both Bhopal district and Bhopal division."
        },
        {
            id: 3,
            content: "Khandwa is a city and a nagar nigam in the Nimar region of Madhya Pradesh, India. It is the administrative headquarters of the Khandwa district"
        },
        {
            id: 4,
            content: "Burhanpur is a historical city in the Indian state of Madhya Pradesh. It is the administrative seat of Burhanpur District. It is situated on the north bank"
        },
    ]

    // Setting the State to show the active tab
    const [isactivetab, SetIsActiveTab] = useState(1);

    // Handling tab click with their ID
    const HandleButtonClicl = (btnid) => {
        SetIsActiveTab(btnid)
    }

    return (
        <>
            <div className='p-10 min-h-screen w-full flex justify-start items-center flex-col'>
                <h2 className='py-8 text-2xl'>Cutom Tabs</h2>
                <div className='flex justify-between space-x-5 w-1/3'>
                    {
                        buttons.map((btn) => (
                            <button onClick={() => HandleButtonClicl(btn.id)} key={btn.id} className={`border border-black py-2 px-8 hover:bg-black hover:text-white transition-all ease-linear duration-200 ${isactivetab === btn.id ? 'bg-black text-white' : 'bg-white text-black'}`}>{btn.name}</button>
                        ))
                    }
                </div>
                <div className='w-1/3 mt-6 border border-black p-5'>
                    {
                        tabcontent.map((item) => (
                            <div className={`${item.id === isactivetab ? 'block' : 'hidden'}`} key={item.id}>
                                {item.content}
                            </div>
                        ))
                    }
                </div>
            </div>
        </>
    )
}

export default Tabs
