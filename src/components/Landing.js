import React from 'react';
import Login from './Login';
import About from './About';

const Landing = ({ isAuth, setIsAuth }) => {
	return (
		<div>
			Welcome!
			<Login setIsAuth={setIsAuth} />
			<br></br>
			<About />
		</div>
	);
};

export default Landing;
