import React,{useState} from 'react';
import Typography from '@material-ui/core/Typography'
import Paper from '@material-ui/core/Paper'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Grid from '@material-ui/core/Grid'
import TodoList from './TodoList';

function Todo(){
    const defaultTodos = [{ id: 1, task: "Clean Desk", completed: false }, { id:21, task: "Code a lot", completed: true }, { id: 3, task: "Read Google-Dev article", completed: false }
    ]
    const [todos, setTodos] = useState(defaultTodos);
    return(
        <Paper style={{padding:0,magin:0,height:'100vh',backgroundColor:'#fafafa'}} elevation={0}>
        <AppBar color='primary' position='static' style={{height:'64px'}}>
            <Toolbar>
                <Typography color='inherit'>
             TODOS REACT
                </Typography>
            </Toolbar>

        </AppBar>
    <TodoList todos={todos}/>
        </Paper>
    )
}

export default Todo;