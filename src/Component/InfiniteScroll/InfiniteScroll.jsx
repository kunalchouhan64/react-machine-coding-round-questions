import React, { useEffect, useState } from 'react';

const InfiniteScroll = () => {
    const [userdata, SetUserData] = useState([]);

    const FetchProducts = async () => {
        try {
            const res = await fetch('https://dummyjson.com/users?limit=50');
            const data = await res.json();
            SetUserData((prevdata) => [...prevdata, ...data.users]);
        } catch (error) {
            console.error("Failed to fetch users", error);
        }
    };

    useEffect(() => {
        const onScroll = () => {
            if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 2) {
                FetchProducts();
            }
        };

        window.addEventListener("scroll", onScroll);

        // Fetch initial products for the first time
        FetchProducts();

        return () => {
            window.removeEventListener("scroll", onScroll);
        };
    }, []);

    return (
        <div className='py-5 px-20 bg-zinc-900 text-white min-h-screen'>
            {userdata.map((item) => (
                <div key={item.id}>
                    <p>{item.firstName} {item.lastName}</p>
                    <p>{item.email}</p>
                </div>
            ))}
        </div>
    );
}

export default InfiniteScroll;
