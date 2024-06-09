import { createSlice } from "@reduxjs/toolkit";

const AllToDos = createSlice({
    name: 'alltodos',
    initialState: {
        todos: [],
        length: 0
    },
    reducers: {
        addtodosreducer: (state, action) => {
            // state.todos.push(action.payload);
            state.todos.push
            console.log(typeof state.todos);
            // state.items = state.items([...state.items, action.payload])
        },
        deletetodoreducer: (state, action) => {
            const filteredtodo = state.todos.filter((item) => item.id !== action.payload)
            state.todos.push(filteredtodo)
        }
    }
})
export const { addtodosreducer, deletetodoreducer } = AllToDos.actions
export default AllToDos.reducer