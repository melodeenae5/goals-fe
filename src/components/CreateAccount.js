import React, { useState } from 'react';
import axios from 'axios';
import { useHistory, Link } from 'react-router-dom';
import { apiUrl } from '../config';

const CreateAccount = () => {
	const [regInfo, setRegInfo] = useState({});
	let history = useHistory();
	function handleChange(event) {
		setRegInfo({ ...regInfo, [event.target.id]: event.target.value });
	}
	function register(event) {
		event.preventDefault();
		axios({
			method: 'POST',
			url: 'http://localhost:8000/auth/users/',
			data: regInfo,
		}).then((res) => {
			console.log(res);
			if (res.status == 201) {
				history.push('/');
			}
		});
	}
	return (
		<div>
			Create Account
			<form onSubmit={register}>
				<label htmlFor='email'>Email:</label>
				<input id='email' type='email' require onChange={handleChange} />
				<br></br>
				<label htmlFor='username'>Username:</label>
				<input id='username' type='text' require onChange={handleChange} />
				<br></br>
				<label htmlFor='password'>Password:</label>
				<input id='password' type='password' require onChange={handleChange} />
				<br></br>
				<button type='submit'>Create Account</button>
				<Link to='/'>Back</Link>
			</form>
		</div>
	);
};

export default CreateAccount;
