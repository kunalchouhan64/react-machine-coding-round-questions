import React, { useState } from 'react'

const OverlayModel = () => {
    // State to show and hide the model
    const [ismodelshow, SetIsModelShow] = useState(false)
    return (
        <>

            <div className='min-h-screen w-full bg-zinc-900 text-white flex justify-center items-center relative flex-col'>
            <h2 className='text-start py-5 font-Montserrat text-3xl'>Model Overlay</h2>
                <div className='h-1/2 p-5 w-2/3 bg-zinc-800 border border-white '>
                    <h2 className='text-3xl py-4'>This is the dummy Text</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, repellat cumque dolor quasi quo tenetur illo sapiente aliquid consequuntur inventore accusamus, at id! Magni perspiciatis quaerat exercitationem animi numquam vitae veniam aliquam doloremque aut, illo tempora alias. Laudantium, hic neque iusto quam veritatis facere! Iure quasi doloremque tempore reprehenderit aut?</p>
                    <br /> <br />

                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, repellat cumque dolor quasi quo tenetur illo sapiente aliquid consequuntur inventore accusamus, at id! Magni perspiciatis quaerat exercitationem animi numquam vitae veniam aliquam doloremque aut, illo tempora alias. Laudantium, hic neque iusto quam veritatis facere! Iure quasi doloremque tempore reprehenderit aut?</p>
                    <br /> <br />
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, repellat cumque dolor quasi quo tenetur illo sapiente aliquid consequuntur inventore accusamus, at id! Magni perspiciatis quaerat exercitationem animi numquam vitae veniam aliquam doloremque aut, illo tempora alias. Laudantium, hic neque iusto quam veritatis facere! Iure quasi doloremque tempore reprehenderit aut?</p>
                    <br /> <br />
                    <button onClick={() => { SetIsModelShow(true) }} className='bg-blue-600 text-white py-2 px-7'>Show Auther Profile</button>
                </div>
                {
                    ismodelshow ? 
                    (<div className='absolute transform -translate-x-[50%] -translate-y-[50%] left-1/2 top-1/2 bg-black/85 w-3/4 h-3/4 flex justify-start p-10 items-start rounded-3xl flex-col shadow-xl shadow-zinc-600'>
                        <div className='w-full flex justify-end items-center'>
                            <button className='text-xl' onClick={() => { SetIsModelShow(false) }}>Close X</button>
                        </div>
                        <div className='py-5'>
                            <img className='object-center object-cover h-28 w-28 rounded-full' src="https://img.freepik.com/premium-photo/business-overwork-people-deadline-technology-concept-businessman-glasses-with-laptop-computer-thinking-night-office_380164-175524.jpg" alt="" />
                          <p className='py-2 font-Poppins'>Auther Name: <span className='font-Raleway text-xl font-semibold'>Kunal Chouhan</span></p>  

                        </div>
                        <div>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti nobis, saepe blanditiis assumenda neque architecto quos doloribus modi fugit veritatis et ea quas obcaecati, suscipit, voluptate expedita quo quidem rerum ipsa vel officia rem aperiam. Aut, ex fuga minus, eveniet quas quo maiores eaque atque fugiat doloremque perspiciatis qui ab.
                        </div>
                        <div>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti nobis, saepe blanditiis assumenda neque architecto quos doloribus modi fugit veritatis et ea quas obcaecati, suscipit, voluptate expedita quo quidem rerum ipsa vel officia rem aperiam. Aut, ex fuga minus, eveniet quas quo maiores eaque atque fugiat doloremque perspiciatis qui ab.
                        </div>
                        <br /><br />
                        <div>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti nobis, saepe blanditiis assumenda neque architecto quos doloribus modi fugit veritatis et ea quas obcaecati, suscipit, voluptate expedita quo quidem rerum ipsa vel officia rem aperiam. Aut, ex fuga minus, eveniet quas quo maiores eaque atque fugiat doloremque perspiciatis qui ab.
                        </div>
                        <br /><br />
                        <div>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti nobis, saepe blanditiis assumenda neque architecto quos doloribus modi fugit veritatis et ea quas obcaecati, suscipit, voluptate expedita quo quidem rerum ipsa vel officia rem aperiam. Aut, ex fuga minus, eveniet quas quo maiores eaque atque fugiat doloremque perspiciatis qui ab.
                        </div>
                    </div>) : null
                }

            </div>
        </>
    )
}

export default OverlayModel
