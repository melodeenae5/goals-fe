import Axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { apiUrl } from '../config';

const GoalDetail = (props) => {
	const [goal, setGoal] = useState();
	const [tasks, setTasks] = useState([]);
	const [notes, setNotes] = useState([]);
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
	}, []);
	if (!goal) {
		return <div>Loading...</div>;
	}
	return (
		<div>
			<h2>{goal.name.toUpperCase()}</h2>
			<h4>Time: {goal.timeframe}</h4>
			<p>{goal.description}</p>
			******
			<h4 class='italic'>Tasks</h4> <button>Add Task</button>
			{tasks.map((task) => {
				if (task.big_goal_id == props.match.params.id) {
					return (
						<div class='task'>
							<p>Category: {task.category}</p>
							<p>{task.body}</p>
						</div>
					);
				} else return null;
			})}
			<br></br>
			<Link to='/goals'>Back to Goals</Link>
		</div>
	);
};

export default GoalDetail;
