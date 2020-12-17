import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { apiUrl } from '../config';
import AddGoal from './AddGoal';

const Goals = () => {
	const [goals, setGoals] = useState([]);
	const [refreshGoals, setRefreshGoals] = useState(true);
	const [show, setShow] = useState(false);

	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);
	useEffect(() => {
		const token = localStorage.getItem('token');
		axios({
			method: 'GET',
			url: `${apiUrl}/big_goals/`,
			headers: {
				Authorization: `Token ${token}`,
			},
		}).then((res) => {
			setGoals(res.data);
			setRefreshGoals(false);
		});
	}, [refreshGoals]);

	if (!goals) {
		return <div>Loading...</div>;
	}
	return (
		<div>
			<h3>Your Goals</h3>
			<button onClick={handleShow}>Add a Goal</button>
			{goals.map((goal) => {
				return (
					<div>
						<Link to={`/goals/${goal.id}`}>
							<h2>
								{goal.name} - {goal.timeframe}
							</h2>
						</Link>
						<p>{goal.description}</p>
					</div>
				);
			})}

			<AddGoal
				show={show}
				handleClose={handleClose}
				setRefreshGoals={setRefreshGoals}
			/>
		</div>
	);
};

export default Goals;
