import React, { useState } from 'react'

const MultiStepperForm = () => {
    const data = [
        {
            id: 1,
            name: 'name',
            inputtype: 'text',
            placeholder: 'Enter Your Name',
            issubmit: false

        },
        {
            id: 2,
            name: 'email',
            inputtype: 'email',
            placeholder: 'Enter Your Email',
            issubmit: false

        },
        {
            id: 3,
            name: 'password',
            inputtype: 'password',
            placeholder: 'Enter Your Password',
            issubmit: true

        },

    ]
    const [forms, SetForms] = useState(data)
    const [currentindex, SetCurentIndex] = useState(0);
    const [formdata, SetFormData] = useState({
        name: '',
        email: '',
        password: ''
    })



    const HandleInputChange = (e) => {
        const { name, value } = e.target
        console.log('name -', name, 'value -', value);
        SetFormData((prevdata) => ({
            ...prevdata,
            [name]: value
        }))

    }


    const HandleSubmit = (e) => {
        e.preventDefault()
        if (forms[currentindex].issubmit) {
            alert('success...!!')
            // SetFormData()
        }
        else {
            SetCurentIndex((idx) => idx + 1)
        }
    }
    console.log(formdata);

    return (
        <>
            <div className='min-h-screen w-full bg-zinc-800 text-white flex flex-col justify-start p-10 items-center'>
                <h2>Multi Stepper Form</h2>
                <form onSubmit={HandleSubmit}>
                    <input value={formdata[forms[currentindex].name]} onChange={HandleInputChange} type={forms[currentindex].inputtype} name={forms[currentindex].name} placeholder={forms[currentindex].placeholder} required className='py-2 border border-white px-5 bg-transparent text-white' />
                    <button type='submit' className='bg-gray-200 text-black py-2 px-9'>{forms[currentindex].issubmit ? 'Submit' : 'Next'}</button>
                </form>
            </div>
        </>
    )
}

export default MultiStepperForm
