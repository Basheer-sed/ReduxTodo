import React from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { deleteTodo, editTodo, markTodo } from './todoSlice'
import TodoList from './TodoList';
import { Accordion, AccordionDetails, AccordionSummary, Box, Typography } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';


const Todo = ({ todoState, setTodoState }) => {
  const dispatch = useDispatch()
  const { todos } = useSelector((state) => state.todos);

  const removeTodo = (index) => {
    dispatch(deleteTodo(index))
  }

  const editedTodo = (selectValue, index) => {
    dispatch(editTodo({ selectValue, index }))
    setTodoState({ ...todoState, text: selectValue, editStatus: true })
  }

  const markLine = (index) => {
    dispatch(markTodo(index))
  }

  return (
    <Box display="flex" flexDirection="column" alignItems="center" marginTop={3}>
      <Accordion defaultExpanded>
        <AccordionSummary
           sx={{
            width: '350px',
            '@media (max-width: 600px)': {
              width: '100%',
            },
          }}
          aria-controls="panel1a-content"
          id="panel1a-header"
          expandIcon={<ExpandMoreIcon />}
        >
          <Typography>ToDos List</Typography>
        </AccordionSummary>
        <AccordionDetails sx={{ flexDirection: 'column' }}>
          <Typography >
            <Box>
              {todos && todos.map((todo, index) => {
                return <TodoList key={index} todo={todo} index={index} removeTodo={removeTodo} editTodo={editedTodo} markLine={markLine} />
              })}
            </Box>
          </Typography>
        </AccordionDetails>
      </Accordion>
    </Box>
  )
}

export default Todo
