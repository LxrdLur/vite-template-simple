import React from 'react';
import Field from "@/components/Filed.jsx";
import Button from "@/components/Button.jsx";

const AddTaskForm = (props) => {
	const {
		addTask,
	} = props

	const onSubmit = (event) => {
		event.preventDefault()
		addTask()
	}
	return (
		<form className="todo__form" onSubmit={onSubmit}>
			<Field
				className='todo__form'
				label='New task title'
				id='new-task'
			/>
			<Button type='submit'>Add</Button>
		</form>
	);
};

export default AddTaskForm;