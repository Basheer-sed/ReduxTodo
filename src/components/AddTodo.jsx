import React from 'react'
import { useState } from 'react'
import Todo from './Todo'
import { useDispatch, useSelector } from 'react-redux'
import { addTodo, updateTodo} from './todoSlice'

const AddTodo = () => {
  const [todoState, setTodoState] = useState({text:'',editStatus: false, markTodo: false})
  const dispatch = useDispatch()

  const handleChange = (e) => setTodoState({...todoState,text:e.target.value})

  const handleClick = () => {
    if(todoState.text !==''){
    dispatch(addTodo(todoState))
    }
    setTodoState({...todoState,text:''})
  }

  const checkEnter = (event) => {
    if ((event.keyCode === 13 || event.which === 13) && todoState.editStatus) {
      handleUpdate();
    } else if (event.keyCode === 13 || event.which === 13) {
      handleClick();
    }
  };
  

  const handleUpdate = () => {
    if(todoState.text!==''){
      dispatch((updateTodo(todoState)))
    }
    setTodoState({...todoState,text:'', editStatus: false})
  }

  return (
    <>
      <div>
        <input type='text' value={todoState.text} onChange={handleChange} onKeyDown={checkEnter}/>
        {todoState.editStatus ? 
          <button onClick={handleUpdate}>Update Todo</button>
         : 
          <button onClick={handleClick}>Add Todo</button>
         } 
      </div>
      <Todo todoState={todoState} setTodoState={setTodoState}/>
    </>
  )
}

export default AddTodo
