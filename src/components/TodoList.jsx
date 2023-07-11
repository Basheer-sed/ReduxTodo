import React from 'react'
import { FaTrashAlt, FaRegEdit, FaRegCheckCircle } from 'react-icons/fa';

const TodosList = ({todo,index,removeTodo, editTodo,markLine}) => {
  return (
    <div>
        <h1 className={todo.markTodo?'marked':'unMarked'}>{todo.text}<FaTrashAlt onClick={() => removeTodo(index)}/><FaRegCheckCircle onClick={() => markLine(index)}/>
        <FaRegEdit onClick={() => {editTodo(todo.text,index)}}/></h1>
    </div>
  ) 
}

export default TodosList;
