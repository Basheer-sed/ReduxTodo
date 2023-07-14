import React from 'react';
import EditRoundedIcon from '@mui/icons-material/EditRounded';
import DeleteRoundedIcon from '@mui/icons-material/DeleteRounded';
import CheckSharpIcon from '@mui/icons-material/CheckSharp';
import { Box, Typography } from '@mui/material';

const TodosList = ({ todo, index, removeTodo, editTodo, markLine }) => {
  const handleEdit = () => {
    editTodo(todo.text, index);
  };

  const handleDelete = () => {
    removeTodo(index);
  };

  const handleMark = () => {
    markLine(index);
  };

  return (
    <Box display="flex" maxWidth="400px">
      <Typography className={todo.markTodo ? 'marked' : 'unMarked'} sx={{ width: '100%' }}>
        {todo.text}
      </Typography>
      <Box display="flex" justifyContent="flex-end">
        <EditRoundedIcon
          onClick={handleEdit}
          sx={{
            cursor: 'pointer',
            '&:hover': {
              color: 'green',
            },
          }}
        />
        <DeleteRoundedIcon
          onClick={handleDelete}
          sx={{
            cursor: 'pointer',
            '&:hover': {
              color: 'red',
            },
          }}
        />
        <CheckSharpIcon
          onClick={handleMark}
          sx={{
            cursor: 'pointer',
            '&:hover': {
              color: 'lightgreen',
            },
          }}
        />
      </Box>
    </Box>
  );
};

export default TodosList;
