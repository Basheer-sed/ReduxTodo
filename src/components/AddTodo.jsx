import React from 'react';
import { useState } from 'react';
import Todo from './Todo';
import { useDispatch } from 'react-redux';
import { addTodo, updateTodo } from './todoSlice';
import { Box, Button, Stack, TextField } from '@mui/material';



const AddTodo = () => {
  const [todoState, setTodoState] = useState({ text: '', editStatus: false, markTodo: false });
  const dispatch = useDispatch();

  const handleChange = (e) => setTodoState({ ...todoState, text: e.target.value });

  const handleClick = () => {
    if (todoState.text !== '') {
      dispatch(addTodo(todoState));
    }
    setTodoState({ ...todoState, text: '' });
  };

  const checkEnter = (event) => {
    if ((event.keyCode === 13 || event.which === 13) && todoState.editStatus) {
      handleUpdate();
    } else if (event.keyCode === 13 || event.which === 13) {
      handleClick();
    }
  };

  const handleUpdate = () => {
    if (todoState.text !== '') {
      dispatch(updateTodo(todoState));
    }
    setTodoState({ ...todoState, text: '', editStatus: false });
  };

  return (
    <>
      <Stack direction="row" spacing={2} marginTop={3}>  
        <TextField id="outlined-basic" variant="outlined" value={todoState.text} onChange={handleChange} onKeyDown={checkEnter} />
        {todoState.editStatus ? (
          <Button variant="contained" onClick={handleUpdate}>Update Todo</Button>
        ) : (
          <Button variant="contained" onClick={handleClick}>Add Todo</Button>
        )}
      </Stack>
      <Box display="flex" flexDirection="column" alignItems="center">
      <Todo todoState={todoState} setTodoState={setTodoState} />
      </Box>
    </>
  );
};

export default AddTodo;
