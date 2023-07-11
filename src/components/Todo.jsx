import React from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { deleteTodo, editTodo, markTodo} from './todoSlice'
import TodoList from './TodoList';


const Todo = ({todoState, setTodoState}) => {
  const dispatch = useDispatch()
  const {todos}= useSelector((state) => state.todos);

  const removeTodo = (index) => {
    dispatch(deleteTodo(index))
  }
    
  const editedTodo = (selectValue, index) => {
    dispatch(editTodo({selectValue,index}))
    setTodoState({...todoState,text:selectValue,editStatus: true})
  }

  const markLine = (index) => {
    dispatch(markTodo(index))
  }

  return (
    <div>
      {todos&&todos.map((todo, index) => {
         return <TodoList key={index} todo={todo} index={index} removeTodo={removeTodo} editTodo={editedTodo} markLine={markLine}/>  
      })}
    </div>
  )
}

export default Todo
