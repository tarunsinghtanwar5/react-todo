import React, { useState } from 'react';
import Typography from '@material-ui/core/Typography'
import Paper from '@material-ui/core/Paper'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Grid from '@material-ui/core/Grid'
import TodoList from './TodoList';
import TodoForm from './TodoForm';
import { v4 as uuid } from 'uuid';

function Todo() {
    const defaultTodos = [{ id: 1, task: "Clean Desk", completed: false }, { id: 21, task: "Code a lot", completed: true }, { id: 3, task: "Read Google-Dev article", completed: false }
    ]
    const [todos, setTodos] = useState(defaultTodos);
    const addTodo = newTodoText => {
        setTodos([...todos, { id: uuid(), task: newTodoText, completed: false }])
    }
    const removeTodo=todoId => {
        const updatedTodos =todos.filter(todo => todo.id !==todoId);
        setTodos(updatedTodos);
    } 
    const toggleTodo=todoId => {
        const updatedTodos =todos.map(todo =>todo.id===todoId ? {...todo,completed: !todo.completed} : todo)
        setTodos(updatedTodos);

    }
    const editTodo = ((todoId,newTask) => {
        const updatedTodos = todos.map(todo => todo.id === todoId ? { ...todo, task:newTask } : todo)
        setTodos(updatedTodos);

    })

    return (
        <Paper style={{ padding: 0, magin: 0, height: '100vh', backgroundColor: '#fafafa' }} elevation={0}>
            <AppBar color='primary' position='static' style={{ height: '64px' }}>
                <Toolbar>
                    <Typography color='inherit'>
                        TODOS REACT
                    </Typography>
                </Toolbar>

            </AppBar>
            <Grid container justifyContent='center' style={{ margin: "1rem" }}>
                <Grid item xs={11} md={8} lg={4}>
                    <TodoForm addTodo={addTodo} />
                    <TodoList todos={todos} removeTodo={removeTodo} toggleTodo={toggleTodo} editTodo={editTodo} />
                </Grid>
            </Grid>
        </Paper>
    )
}

export default Todo;