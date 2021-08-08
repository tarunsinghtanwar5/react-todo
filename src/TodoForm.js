import React, { useState } from 'react';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import useInputStates from './hooks/useInputStates';

function TodoForm({ addTodo }) {
	const [ value, handleChange, reset ] = useInputStates('');
	return (
        <Paper style={{ margin: "1rem 0", padding: "0 1rem" }}>
			<form
				onSubmit={e => {
					e.preventDefault();
					addTodo(value);
					reset();
					console.log('added');
				}}
			>
                <TextField value={value} onChange={handleChange} margin='normal'
                    label='Add New Todo'
                    fullWidth />
			</form>
		</Paper>
	);
}

export default TodoForm;
