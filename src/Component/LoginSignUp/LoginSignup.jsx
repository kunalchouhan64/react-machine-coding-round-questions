import React, { useState } from 'react'
import { json, useNavigate } from 'react-router-dom'

const LoginSignup = () => {
    const [isloggedin, SetIsLoggedIn] = useState(false)
    const [name, SetName] = useState()
    const [email, SetEmail] = useState()
    const [password, SetPassword] = useState();
    const navigate = useNavigate()



    // ⭐ Handle Submit Function
    const HandleSubmit = (e) => {
        e.preventDefault();
        // Email & Password Regix to validate the email and the password
        const emailregix = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)
        const passwordregix = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(password)

        // Checking if we are not in the login page, doing signup
        if (!isloggedin) {

            // if email is valid and the password is valid then we have to signup the user
            if (emailregix && passwordregix) {
                // Checking if user already exist.
                const prevuser = JSON.parse(localStorage.getItem('user-details'));
                if (prevuser) {
                    alert('user is already exist.')
                }
                else {
                    localStorage.setItem('user-details', JSON.stringify({
                        name: name,
                        email: email,
                        password: password
                    }))
                    alert('SignUp Success.')
                    SetIsLoggedIn(!isloggedin)
                }

            }
            else {
                console.log('Email Or Password is not valid...!!');
            }

            SetName('')
            SetEmail('')
            SetPassword('')


        }

        // if logged in is true... means we have to login the user
        else {
            const user_details = JSON.parse(localStorage.getItem('user-details'))
            if (user_details.email === email && user_details.password === password) {
                alert('User Found... Login Success.')
                navigate('/')
            }
            else {
                alert('user not found....please signup !!')
            }
        }

    }
    return (
        <>
            <section class="text-gray-400 bg-gray-900 body-font relative min-h-screen">
                <div class="container px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap">

                    <form onSubmit={HandleSubmit} class="lg:w-1/3 md:w-1/2 flex flex-col mx-auto w-full md:py-8 mt-8 md:mt-0">
                        <h2 class="text-white text-lg mb-1 font-medium title-font text-center">{isloggedin ? 'Login' : 'SignUp'}</h2>
                        {
                            isloggedin ? null : <div class="relative mb-4">
                                <label for="name" class="leading-7 text-sm text-gray-400">Name</label>
                                <input required value={name} onChange={(e) => SetName(e.target.value)} type="text" id="name" name="name" class="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                            </div>
                        }

                        <div class="relative mb-4">
                            <label for="email" class="leading-7 text-sm text-gray-400">Email</label>
                            <input required value={email} onChange={(e) => SetEmail(e.target.value)} type="email" id="email" name="email" class="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                        </div>
                        <div class="relative mb-4">
                            <label for="password" class="leading-7 text-sm text-gray-400">Password</label>
                            <input required value={password} onChange={(e) => SetPassword(e.target.value)} type="password" id="password" name="password" class="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                        </div>
                        <button type='submit' class="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">{isloggedin ? 'Login' : 'SignUp'}</button>
                        <p onClick={() => { SetIsLoggedIn(!isloggedin) }} class="text-lg text-gray-400 text-opacity-90 mt-3 cursor-pointer">{isloggedin ? "New User...!! SignUp Here" : "Aleardy Signed Up...!! Login Here"} </p>
                    </form>
                </div>
            </section>

        </>
    )
}

export default LoginSignup
