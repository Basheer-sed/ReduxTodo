import {createSlice } from "@reduxjs/toolkit";

const initialState = {
    todos:[],
    selectedTodo:{}
}


const todoSlice = createSlice({
    name:'todoSlice',
    initialState,
    reducers:{
        addTodo: (state, action) =>{
            state.todos.push(action.payload)
        },
        deleteTodo: (state, action) => {
            const todoIndex = action.payload;
            state.todos = state.todos.filter((todo, index) => index !== todoIndex);
          },  
        editTodo: (state, action) => {
            const {index}=action.payload
            state.selectedTodo=action.payload
            state.todos[index].editStatus=true
        },
        updateTodo:(state,action)=>{
            state.todos[state.selectedTodo.index].text=action.payload.text
        },     
        markTodo:(state, action) => {
            const index = action.payload
            state.todos[index].markTodo = !state.todos[index].markTodo
        }     

    }
})
export const {addTodo, deleteTodo, updateTodo, editTodo, markTodo} = todoSlice.actions
export default todoSlice.reducer