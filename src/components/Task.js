import Axios from 'axios';
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
			url: `${apiUrl}/list_items/${task.id}`,
			headers: {
				Authorization: `Token ${token}`,
			},
		}).then(() => {
			setRefreshAll(true);
		});
	}
	return (
		<div class='task'>
			<p>Category: {task.category}</p>
			<p>{task.body}</p>
			<button class='task-btn' onClick={handleShow}>
				Edit
			</button>
			<button class='task-btn' onClick={deleteTask}>
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
