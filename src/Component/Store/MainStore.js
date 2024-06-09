import { configureStore } from "@reduxjs/toolkit";
import AllTodoSlice from "../ToDoSlices/AllTodoSlice";

const mystore = configureStore({
    reducer: {
        alltodos: AllTodoSlice
    }
})
export default mystore