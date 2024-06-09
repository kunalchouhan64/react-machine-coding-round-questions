import React, { useState } from 'react'

const ToDo = () => {
    const [alltodos, SetAllTodos] = useState([]);
    const [todotext, SetToDoText] = useState()
    const [isediting, SetIsEditing] = useState(false)
    const [currentindex, SetCurrentIndex] = useState(null)

    const HandleAddTodo = () => {
        if (todotext.trim() !== "") {
            if (isediting) {
                const updatedtodos = alltodos.map((item, index) => index === currentindex ? todotext : item)
                SetAllTodos(updatedtodos);
                SetIsEditing(false);
                SetCurrentIndex(null);
            } else {
                SetAllTodos([...alltodos, todotext])
            }

            SetToDoText('')
        } else {
            alert('Please Enter Task...')
        }
    }

    // console.log(alltodos);

    const HandleDelete = (index) => {
        const updatedtodos = alltodos.filter((_, i) => i !== index)
        SetAllTodos(updatedtodos)
    }


    const HandleEditToDo = (index) => {
        SetToDoText(alltodos[index])
        SetIsEditing(true)
        SetCurrentIndex(index)

    }


    return (
        <>
            <div className='min-h-screen w-full bg-zinc-950 text-white p-8 flex justify-center items-center flex-col font-Raleway'>
                <div className='w-1/2 h-auto p-4 flex justify-evenly items-center'>
                    <input onKeyDown={(e) => { e.key === "Enter" ? HandleAddTodo() : null }} value={todotext} onChange={(e) => SetToDoText(e.target.value)} type="text" className='py-2 outline-none px-4 bg-transparent border border-white  w-3/4' placeholder='Enter Task' />
                    <button onClick={() => HandleAddTodo()} className='py-2 px-8 bg-green-600 text-white'>Add Task</button>
                </div>

                <div className='w-1/2 h-auto border border-white'>

                    {
                        alltodos.length <= 0 ? <p className='p-4'>No Todos Here...</p> : (
                            <div>
                                {
                                    alltodos.map((item, i) => {
                                        return (

                                            <div className='py-2 px-4 flex justify-between items-center' key={i + 1}>
                                                <p className='text-xl'>{i + 1}. {item}</p>
                                                <div className='space-x-3'>
                                                    <button onClick={() => HandleEditToDo(i)} className='py-2 px-4 bg-orange-700 text-white'>Edit ToDo</button>
                                                    <button onClick={() => HandleDelete(i)} className='py-2 px-4 bg-orange-700 text-white'>Delete ToDo</button>
                                                </div>
                                            </div>

                                        )
                                    })
                                }
                            </div>
                        )
                    }


                </div>

            </div>
        </>
    )
}

export default ToDo
