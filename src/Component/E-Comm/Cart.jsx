import React from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { removefromcart, increasequantity, decreasequantity } from './Slices/AddToCart'

const Cart = () => {
    const dispatch = useDispatch()
    const CartItems = useSelector((store) => store.cart.items)
    console.log("Cart Component: ", CartItems)

    // Getting total quantity of the items inside the cart
    const TotalQuantity = CartItems.reduce((accu, curr) => { return accu + curr.quantity }, 0)
    // Getting totoal price of the items inside the cart
    const TotalPrice = CartItems.reduce((accu, curr) => { return accu + (curr.price * curr.quantity) }, 0)

    // console.log(TotalQuantity);
    // console.log(Math.floor(TotalPrice));


    // Handle Remover Cart function
    const HandleRemoveFromCart = (ITEM) => {
        dispatch((removefromcart(ITEM)))
    }
    // Handle Increase the quantity of the item
    const IncreaseQuantity = (ITEM) => {
        dispatch((increasequantity(ITEM)))
    }
    // Handle Decrease quantity of the item
    const DecreaseQuantity = (ITEM) => {
        dispatch((decreasequantity(ITEM)))
    }
    return (
        <>
            {
                CartItems.length <= 0 ? 'Cart is Emtpy...' : (
                    <div className='min-h-screen w-full p-10 bg-zinc-900 text-white font-Raleway'>
                        <h2 className='text-xl font-semibold'>Cart Items: </h2>
                        <div className='flex justify-between items-center w-full'>

                            <div className='p-5 w-2/3 grid grid-cols-3 gap-5'>
                                {
                                    CartItems.map((item) => (
                                        <div key={item.id} className='p-2 border border-white'>
                                            <img src={item.thumbnail} alt="" />
                                            <p>Price: {item.title}</p>
                                            <p>Price: {item.price}</p>
                                            <div className='flex justify-start space-x-4 items-center'>
                                                <button onClick={() => HandleRemoveFromCart(item)} className='py-2 bg-red-600 px-6 text-white my-2'>Remove From Cart</button>
                                                <div className='space-x-7 text-2xl'><span className='cursor-pointer' onClick={() => DecreaseQuantity(item)}>-</span><span>{item.quantity}</span><span className='cursor-pointer' onClick={() => IncreaseQuantity(item)}>+</span></div>

                                            </div>
                                        </div>
                                    ))
                                }
                            </div>
                            <div className='p-5 border-l border-white w-1/3  space-y-2'>
                                <p className='text-3xl'>Total Quantity: {TotalQuantity} QTY</p>
                                <p className='text-3xl'>Total Price: {Math.floor(TotalPrice)}$</p>
                            </div>
                        </div>
                    </div>
                )
            }


        </>
    )
}

export default Cart
