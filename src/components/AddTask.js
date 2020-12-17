import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import { apiUrl } from '../config';

const AddTask = ({ show, handleClose, setRefreshAll, goalId }) => {
	const [newTask, setNewTask] = useState({ big_goal_id: goalId });
	function handleChange(event) {
		setNewTask({ ...newTask, [event.target.id]: event.target.value });
	}
	function addTask() {
		const token = localStorage.getItem('token');
		axios({
			method: 'POST',
			url: `${apiUrl}/list_items/`,
			headers: {
				Authorization: `Token ${token}`,
			},
			data: newTask,
		}).then((res) => {
			setRefreshAll(true);
			handleClose();
		});
	}
	return (
		<Modal show={show} onHide={handleClose}>
			<Modal.Header closeButton>
				<Modal.Title>Add Task</Modal.Title>
			</Modal.Header>
			<Modal.Body>
				<form id='addTask'>
					<input
						id='category'
						type='text'
						onChange={handleChange}
						placeholder='task category'
					/>
					<br></br>
					<textarea
						id='body'
						form='addTask'
						onChange={handleChange}
						placeholder='task description...'></textarea>
					<br></br>
					<label htmlFor='isComplete'>Complete?</label>
					<input id='isComplete' type='checkbox' onChange={handleChange} />
				</form>
			</Modal.Body>
			<Modal.Footer>
				<Button variant='secondary' onClick={addTask}>
					Add Task
				</Button>
				<Button variant='secondary' onClick={handleClose}>
					Close
				</Button>
			</Modal.Footer>
		</Modal>
	);
};

export default AddTask;
