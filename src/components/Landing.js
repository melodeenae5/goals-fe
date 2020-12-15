import React from 'react';
import Login from './Login';
import About from './About';

const Landing = ({ isAuth, setIsAuth }) => {
	return (
		<div>
			Welcome
			<About />
			<Login setIsAuth={setIsAuth} />
		</div>
	);
};

export default Landing;
