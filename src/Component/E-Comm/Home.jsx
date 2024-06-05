import React from 'react'
import useFetchProducts from './CustomHooks/useFetchProducts'
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addtocart } from './Slices/AddToCart';

const Home = () => {
    const dispatch = useDispatch()
    const products = useFetchProducts()

    // Getting Store Items Count
    const storecount = useSelector((store) => store?.cart?.items?.length)
    // console.log(storecount);

    // handle Add item to the cart
    const HandleAddToCart = (addedproduct) => {
        dispatch(addtocart(addedproduct))
        alert(`Product Added To Cart: ${addedproduct.title}`)
    }



    return (
        <div className='min-h-screen w-full p-10 font-Raleway'>
            <div className='pb-3 text-lg font-semibold border-b border-black w-full flex justify-between items-center'>
                <Link>Home</Link>
                <Link to='/ecome-cart'>Cart : {storecount}</Link>
            </div>
            <div className="grid grid-cols-5 place-items-center justify-items-center gap-8 px-10">
                {
                    products?.map((item) => {
                        return (
                            <div key={item.id} className=' border border-black p-2 w-full'>

                                <img className='object-center object-cover h-44 w-44' src={item.thumbnail} alt="" />
                                <span>Price: {item.price}$</span>
                                <p>Name: {item.title}</p>
                                <button onClick={() => HandleAddToCart(item)} className='my-2 bg-green-600 text-white py-2 px-6'>Add To Cart</button>
                            </div>
                        )
                    })
                }

            </div>

        </div>
    )
}

export default Home
