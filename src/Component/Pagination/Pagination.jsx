import axios from 'axios';
import React, { useEffect, useState } from 'react'

const Pagination = () => {
    // Dummy Product API
    const Products_API = "https://dummyjson.com/products?limit=100";
    const [products, SetProducts] = useState([])
    const [currentpage, SetCurrentPage] = useState(1)
    const [cardsperpage, SetCardsPerPage] = useState(6)

    const FetchProducts = async () => {
        try {
            await axios.get(Products_API).then((res) => {
                console.log(res.data.products)
                SetProducts(res?.data?.products)
            }).catch((err) => {
                console.error("API Error - ", err)
            })
        } catch (error) {
            console.log("TryCatch - Catch Error - ", error)
        }

    }

    useEffect(() => {
        FetchProducts()
    }, [])

    const lastindex = currentpage * cardsperpage
    const firstindex = lastindex - cardsperpage


    const HandlePageClick = (pageclicked) => {
        // alert(pageclicked)
        SetCurrentPage(pageclicked)
    }

    console.log((products?.length / 10) - 1)

    const HandlePrevPage = () => {

        // ⭐First Logic
        // if (page === 1) {
        //     SetPage(products?.length / 10)
        // } else {
        //     SetPage(page - 1)
        // }

        //⭐Second Logic
        currentpage === 1 ? SetCurrentPage(products?.length / 10) : SetCurrentPage(currentpage - 1)
    }

    const HandleNextPage = () => {
        if (currentpage >= products.length / 10) {
            SetCurrentPage(1)
        } else {
            SetCurrentPage(currentpage + 1)
        }
    }
    return (
        <>
            <div className='min-h-screen flex-col w-full flex justify-center items-center bg-zinc-950 text-white p-8'>
                <h2 className='pb-7 font-Raleway text-3xl'>Pagination - React JS</h2>
                <div className='grid grid-cols-3 place-items-center justify-items-center w-2/3 h-auto gap-5'>
                    {
                        products.slice(firstindex, lastindex).map((item) => {
                            return (
                                <>
                                    <div key={item.id}>
                                        <img className='object-center object-cover h-60 w-60 rounded-lg border-white border' src={item.thumbnail} alt="" />
                                        <p className='font-Raleway pt-2'>{item.title}</p>
                                    </div>

                                </>
                            )
                        })
                    }
                </div>
                <div className='py-3 pt-6 font-Raleway'>
                    Current Page: {currentpage} / {products.length / 10}
                </div>
                <div className='flex justify-center items-center space-x-5 text-white pb-6 pt-3'>
                    <div>
                        <span onClick={() => HandlePrevPage()} className='py-2 px-7 bg-red-600 text-white cursor-pointer font-Raleway font-semibold'>Prev Page</span>
                    </div>
                    <div>
                        {
                            new Array(products.length / 10).fill().map((_, i) => (
                                <span onClick={() => HandlePageClick(i + 1)} className={`py-2 cursor-pointer px-4  border border-white ${i + 1 === currentpage ? "bg-white text-black" : "bg-black text-white"}`} key={i}>{i + 1}</span>
                            ))
                        }
                    </div>
                    <div>
                        <span onClick={() => HandleNextPage()} className='py-2 px-7 font-Raleway font-semibold bg-green-600 text-white cursor-pointer'>Next Page</span>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Pagination
