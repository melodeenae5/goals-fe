import React, { useState } from 'react';
import axios from 'axios';
import { apiUrl } from '../config';
import EditNote from './EditNote';

const Note = ({ note, setRefreshAll }) => {
	const [show, setShow] = useState(false);

	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	function deleteNote() {
		const token = localStorage.getItem('token');
		axios({
			method: 'DELETE',
			url: `${apiUrl}/notes/${note.id}`,
			headers: {
				Authorization: `Token ${token}`,
			},
		}).then(() => {
			setRefreshAll(true);
		});
	}
	return (
		<div className='task'>
			<p>{note.body}</p>
			<button className='btn btn-outline-light' onClick={handleShow}>
				Edit
			</button>
			<button className='btn btn-outline-light' onClick={deleteNote}>
				Delete
			</button>
			<EditNote
				show={show}
				handleClose={handleClose}
				setRefreshAll={setRefreshAll}
				note={note}
			/>
		</div>
	);
};

export default Note;
