import Axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { apiUrl } from '../config';
import AddTask from './AddTask';
import AddNote from './AddNote';
import Task from './Task';
import Note from './Note';

const GoalDetail = (props) => {
	const [goal, setGoal] = useState();
	const [tasks, setTasks] = useState([]);
	const [notes, setNotes] = useState([]);
	const [refreshAll, setRefreshAll] = useState(true);
	const [show, setShow] = useState(false);
	const [showNote, setShowNote] = useState(false);

	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	const handleCloseNote = () => setShowNote(false);
	const handleShowNote = () => setShowNote(true);

	useEffect(() => {
		const token = localStorage.getItem('token');
		//get goal
		axios({
			method: 'GET',
			url: `${apiUrl}/big_goals/${props.match.params.id}`,
			headers: {
				Authorization: `Token ${token}`,
			},
		}).then((res) => {
			setGoal(res.data);
			setRefreshAll(false);
		});
		//get tasks
		axios({
			method: 'GET',
			url: `${apiUrl}/list_items/`,
			headers: {
				Authorization: `Token ${token}`,
			},
		}).then((res) => {
			setTasks(res.data);
		});
		//get notes
		axios({
			method: 'GET',
			url: `${apiUrl}/notes/`,
			headers: {
				Authorization: `Token ${token}`,
			},
		}).then((res) => {
			setNotes(res.data);
		});
	}, [refreshAll]);
	if (!goal) {
		return <div>Loading...</div>;
	}
	return (
		<div>
			<h2>{goal.name.toUpperCase()}</h2>
			<h4>Time: {goal.timeframe}</h4>
			<p>{goal.description}</p>
			******
			<h4 class='italic'>Tasks</h4>{' '}
			<button onClick={handleShow}>Add Task</button>
			{tasks.map((task) => {
				if (task.big_goal_id == props.match.params.id) {
					return <Task task={task} setRefreshAll={setRefreshAll} />;
				} else return null;
			})}
			<br></br>
			******
			<h4 class='italic'>Notes</h4>
			<button onClick={handleShowNote}>Add Note</button>
			{notes.map((note) => {
				if (note.big_goal_id == props.match.params.id) {
					return <Note note={note} setRefreshAll={setRefreshAll} />;
				} else return null;
			})}
			<br></br>
			<Link to='/goals'>Back to Goals</Link>
			<AddTask
				show={show}
				handleClose={handleClose}
				setRefreshAll={setRefreshAll}
				goalId={props.match.params.id}
			/>
			<AddNote
				show={showNote}
				handleClose={handleCloseNote}
				setRefreshAll={setRefreshAll}
				goalId={props.match.params.id}
			/>
		</div>
	);
};

export default GoalDetail;
