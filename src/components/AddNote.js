import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import { apiUrl } from '../config';

const AddNote = ({ show, handleClose, setRefreshAll, goalId }) => {
	const [newNote, setNewNote] = useState({ big_goal_id: goalId });
	function handleChange(event) {
		setNewNote({ ...newNote, [event.target.id]: event.target.value });
	}
	function addNote() {
		const token = localStorage.getItem('token');
		axios({
			method: 'POST',
			url: `${apiUrl}/notes/`,
			headers: {
				Authorization: `Token ${token}`,
			},
			data: newNote,
		}).then((res) => {
			setRefreshAll(true);
			handleClose();
		});
	}
	return (
		<Modal show={show} onHide={handleClose}>
			<Modal.Header closeButton>
				<Modal.Title>Add Note</Modal.Title>
			</Modal.Header>
			<Modal.Body>
				<form id='addNote'>
					<textarea
						id='body'
						form='addNote'
						onChange={handleChange}
						placeholder='write note here...'></textarea>
				</form>
			</Modal.Body>
			<Modal.Footer>
				<Button variant='secondary' onClick={addNote}>
					Add Note
				</Button>
				<Button variant='secondary' onClick={handleClose}>
					Close
				</Button>
			</Modal.Footer>
		</Modal>
	);
};

export default AddNote;
