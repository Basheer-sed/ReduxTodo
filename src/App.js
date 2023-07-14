import {  AppBar, Box, CssBaseline, Toolbar, Typography} from '@mui/material';
import './App.css';
import AddTodo from './components/AddTodo';



function App() {
  return (
    <>
    <Box marginBottom={2} >
       <CssBaseline>
         <AppBar position='relative' sx={{ '@media (max-width: 600px)': { height: '60px' } }}>
           <Toolbar sx={{justifyContent:"center"}}>
             <Typography version="h4" align="center" fontSize={30}>
               Todos App
             </Typography>
           </Toolbar>
         </AppBar>
       </CssBaseline>
    </Box>
    <Box display="flex" flexDirection="column" alignItems="center">
      <AddTodo/>
    </Box>
    </>
  );
}

export default App;
