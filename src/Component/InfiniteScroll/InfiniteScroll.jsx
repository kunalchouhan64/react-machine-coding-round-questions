import React, { useEffect, useState } from 'react'

// Steps 
// Calling API and fetching first 50 result from api
// Storing the data to the state with previous data and new data
// and definging the useEffect: first time use effect called with empty array so it will call the FetchProducts async function and fetch the data from the api and show it the first 50 data to the page and checking contiuesly with event listner that attached with window that onscrill 

const InfiniteScroll = () => {
    const [userdata, SetUserData] = useState([])
    const FetchProducts = async () => {
        const res = await fetch('https://dummyjson.com/users?limit=50')
        const data = await res?.json()
        // console.log(data.users);
        SetUserData((prevdata) => [...prevdata, ...data?.users])
    }

    useEffect(() => {
        const onScroll = () => {
            if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
                FetchProducts();
            }
        };

        window.addEventListener("scroll", onScroll);

        // Fetch initial products for the first time
        FetchProducts();

        return () => {
            window.removeEventListener("scroll", onScroll);
        };
    }, []); // Only run once on mount






    console.log(userdata);


    return (
        <>
            <div className='py-5 px-20 bg-zinc-900 text-white min-h-screen'>
                {
                    userdata.map((item) => (
                        <div key={item.id}>
                            <p>{item.length}</p>
                            <p>{item.id}{item.firstName}</p>
                        </div>
                    ))
                }
            </div>
        </>
    )
}

export default InfiniteScroll
