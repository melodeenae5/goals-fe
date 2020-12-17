import React from 'react';
import { Link } from 'react-router-dom';

const Dashboard = () => {
	return (
		<div>
			{/* <Link to='/daily'>Daily Checklist</Link> <br></br> */}
			<Link to='/goals'>Goals</Link>
		</div>
	);
};

export default Dashboard;
