import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addtodosreducer } from '../ToDoSlices/AllTodoSlice';

const ToDoRedux = () => {
    const dispatch = useDispatch()
    const [todotext, SetToDoText] = useState();
    const todos = useSelector(mystore => mystore?.alltodos?.items);

    // console.log(todos?.length);
    // console.log("from the store - ", todos);


    const HandleAddTodo = () => {
        // alert()
            dispatch(addtodosreducer(todotext))
       
    }
    
    return (
        <>

            <div className='min-h-screen w-full bg-zinc-950 text-white p-8 flex justify-center items-center flex-col font-Raleway'>
                <div className='w-1/2 h-auto p-4 flex justify-evenly items-center'>
                    <input value={todotext} onChange={(e) => SetToDoText(e.target.value)} type="text" className='py-2 outline-none px-4 bg-transparent border border-white  w-3/4' placeholder='Enter Task' />
                    <button onClick={() => HandleAddTodo()} className='py-2 px-8 bg-green-600 text-white'>Add Task</button>
                </div>
                {
                    todos && alltodos?.length <= 0 ? 'No Todos here' : (
                        <div className='w-1/2 h-auto border border-white'>

                            {
                                todos && todos?.map((item, i) => (
                                    <div>
                                        <div className='py-2 px-4 flex justify-between items-center text-white'>
                                            <div className='space-x-3'>
                                                <p className='text-white'>{i + 1}</p>
                                                <button className='py-2 px-4 bg-orange-700 text-white'>Edit ToDo</button>
                                                <button className='py-2 px-4 bg-orange-700 text-white'>Delete ToDo</button>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            }

                        </div>
                    )
                }


            </div>
        </>
    )
}

export default ToDoRedux
