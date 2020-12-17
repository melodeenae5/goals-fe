import React, { useState } from 'react';
import axios from 'axios';
import { apiUrl } from '../config';
import EditTask from './EditTask';

const Task = ({ task, setRefreshAll }) => {
	const [show, setShow] = useState(false);

	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	function deleteTask() {
		const token = localStorage.getItem('token');
		axios({
			method: 'DELETE',
			url: `${apiUrl}/list_items/${task.id}/`,
			headers: {
				Authorization: `Token ${token}`,
			},
		}).then(() => {
			setRefreshAll(true);
		});
	}
	return (
		<div
			className='task'
			style={task.isComplete ? { textDecoration: 'line-through' } : {}}>
			<p>Category: {task.category}</p>
			<p className='task-body'>{task.body}</p>
			<button className='btn btn-outline-light' onClick={handleShow}>
				Edit
			</button>
			<button className='btn btn-outline-light' onClick={deleteTask}>
				Delete
			</button>
			<EditTask
				show={show}
				handleClose={handleClose}
				setRefreshAll={setRefreshAll}
				task={task}
			/>
		</div>
	);
};

export default Task;
