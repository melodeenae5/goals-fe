import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import { apiUrl } from '../config';

const EditTask = ({ show, handleClose, setRefreshAll, task }) => {
	const [editTask, setEditTask] = useState(task);
	function handleChange(event) {
		setEditTask({ ...editTask, [event.target.id]: event.target.value });
	}
	function editYourTask() {
		const token = localStorage.getItem('token');
		axios({
			method: 'PUT',
			url: `${apiUrl}/list_items/${task.id}/`,
			headers: {
				Authorization: `Token ${token}`,
			},
			data: editTask,
		}).then((res) => {
			setRefreshAll(true);
			handleClose();
		});
	}
	return (
		<Modal show={show} onHide={handleClose}>
			<Modal.Header closeButton>
				<Modal.Title>Edit Task</Modal.Title>
			</Modal.Header>
			<Modal.Body>
				<form id='editYourTask'>
					<textarea
						form='editYourTask'
						id='category'
						type='text'
						onChange={handleChange}
						value={editTask.category}></textarea>
					<br></br>
					<textarea
						id='body'
						form='editYourTask'
						onChange={handleChange}
						value={editTask.body}
					/>
					<br></br>
					<label htmlFor='isComplete'>Complete?</label>
					<input
						id='isComplete'
						type='checkbox'
						onChange={handleChange}
						checked={editTask.isComplete ? 'true' : ''}
					/>
				</form>
			</Modal.Body>
			<Modal.Footer>
				<Button variant='secondary' onClick={editYourTask}>
					Edit Task
				</Button>
				<Button variant='secondary' onClick={handleClose}>
					Close
				</Button>
			</Modal.Footer>
		</Modal>
	);
};

export default EditTask;
