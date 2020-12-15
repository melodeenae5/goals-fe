import React, { useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

const Login = ({ setIsAuth }) => {
	const [loginInfo, setLoginInfo] = useState({});
	let history = useHistory();
	function handleChange(event) {
		setLoginInfo({ ...loginInfo, [event.target.id]: event.target.value });
	}
	function login(event) {
		event.preventDefault();
		axios({
			method: 'POST',
			url: 'http://localhost:8000/api-token-auth/',
			data: loginInfo,
		}).then((res) => {
			console.log(res);
			if (res.data.token) {
				localStorage.setItem('token', res.data.token);
				setIsAuth(true);
				history.push('/dashboard');
			}
		});
	}
	return (
		<div>
			Login
			<form onSubmit={login}>
				<label htmlFor='username'>Username:</label>
				<input id='username' type='text' onChange={handleChange} /> <br></br>
				<label htmlFor='password'>Password:</label>
				<input id='password' type='password' onChange={handleChange} />{' '}
				<br></br>
				<button type='submit'>Login</button>
			</form>
		</div>
	);
};

export default Login;
