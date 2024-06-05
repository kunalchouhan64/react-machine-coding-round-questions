import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { Products } from '../Slices/ProductSlice';
import { addtocart } from '../Slices/AddToCart';

const useFetchProducts = () => {

    const [products, SetProducts] = useState([])
    const API = "https://dummyjson.com/products?limit=100";
    const dispatch = useDispatch()



    const FetchProducts = () => {

        try {
            axios.get(API).then((res) => {
                // console.log(res.data.products)
                SetProducts(res?.data?.products)
                dispatch(Products(res?.data?.products))
                // dispatch(addtocart(res?.data?.products))
            }).catch((err) => {
                console.log(err);
            })
        } catch (error) {
            console.warn(error)
        }

    }

    useEffect(() => {
        FetchProducts()
    }, [])

    return products;
}

export default useFetchProducts
