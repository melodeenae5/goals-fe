import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import { apiUrl } from '../config';

const EditNote = ({ show, handleClose, setRefreshAll, note }) => {
	const [editNote, setEditNote] = useState(note);
	function handleChange(event) {
		setEditNote({ ...editNote, [event.target.id]: event.target.value });
	}
	function editYourNote() {
		const token = localStorage.getItem('token');
		axios({
			method: 'PUT',
			url: `${apiUrl}/notes/${note.id}/`,
			headers: {
				Authorization: `Token ${token}`,
			},
			data: editNote,
		}).then((res) => {
			setRefreshAll(true);
			handleClose();
		});
	}
	return (
		<Modal show={show} onHide={handleClose}>
			<Modal.Header closeButton>
				<Modal.Title>Edit Note</Modal.Title>
			</Modal.Header>
			<Modal.Body>
				<form id='editNote'>
					<textarea
						id='body'
						form='editNote'
						onChange={handleChange}
						value={editNote.body}></textarea>
				</form>
			</Modal.Body>
			<Modal.Footer>
				<Button variant='secondary' onClick={editYourNote}>
					Edit Note
				</Button>
				<Button variant='secondary' onClick={handleClose}>
					Close
				</Button>
			</Modal.Footer>
		</Modal>
	);
};

export default EditNote;
