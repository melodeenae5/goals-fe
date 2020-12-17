import React from 'react';
import axios from 'axios';
import { apiUrl } from '../config';

const Note = ({ note, setRefreshAll }) => {
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
		<div class='task'>
			<p>{note.body}</p>
			<button class='task-btn' onClick={deleteNote}>
				Delete
			</button>
		</div>
	);
};

export default Note;
