import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import { apiUrl } from '../config';

const AddGoal = ({ show, handleClose, setRefreshGoals }) => {
	const [newGoal, setNewGoal] = useState({});
	function handleChange(event) {
		setNewGoal({ ...newGoal, [event.target.id]: event.target.value });
	}
	function addGoal() {
		const token = localStorage.getItem('token');
		axios({
			method: 'POST',
			url: `${apiUrl}/big_goals/`,
			headers: {
				Authorization: `Token ${token}`,
			},
			data: newGoal,
		}).then((res) => {
			setRefreshGoals(true);
			handleClose();
		});
	}
	return (
		<Modal show={show} onHide={handleClose}>
			<Modal.Header closeButton>
				<Modal.Title>Add Goal</Modal.Title>
			</Modal.Header>
			<Modal.Body>
				<form id='addGoal'>
					<input
						id='name'
						type='text'
						onChange={handleChange}
						placeholder='goal title'
					/>{' '}
					<br></br>
					<textarea
						id='description'
						form='addGoal'
						onChange={handleChange}
						placeholder='goal description...'></textarea>{' '}
					<br></br>
					<input
						id='timeframe'
						type='text'
						onChange={handleChange}
						placeholder='timeframe(e.g. a week)'
					/>
				</form>
			</Modal.Body>
			<Modal.Footer>
				<Button variant='secondary' onClick={addGoal}>
					Add Goal
				</Button>
				<Button variant='secondary' onClick={handleClose}>
					Close
				</Button>
			</Modal.Footer>
		</Modal>
	);
};

export default AddGoal;
