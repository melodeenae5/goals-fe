import './App.css';
import React, { useState } from 'react';
import { Route, useHistory } from 'react-router-dom';
import Landing from './components/Landing';
import Dashboard from './components/Dashboard';
import Goals from './components/Goals';
import DailyChecklist from './components/DailyChecklist';
import ProtectedRoute from './components/ProtectedRoute';
import CreateAccount from './components/CreateAccount';
import GoalDetail from './components/GoalDetail';

function App() {
	let history = useHistory();
	const [isAuth, setIsAuth] = useState(false);
	function logout() {
		localStorage.clear();
		setIsAuth(false);
		history.push('/');
	}
	return (
		<div className='container'>
			<div className='main'>
				<h1 className='title'>Achieve Your Goal</h1>
				{isAuth ? (
					<button className='btn btn-info' onClick={logout}>
						Logout
					</button>
				) : (
					<p></p>
				)}
				<br></br>
				******
				<Route
					exact
					path='/'
					render={() => <Landing isAuth={isAuth} setIsAuth={setIsAuth} />}
				/>
				<Route path='/register' component={CreateAccount} />
				<ProtectedRoute path='/dashboard' component={Dashboard} auth={isAuth} />
				<ProtectedRoute exact path='/goals' component={Goals} auth={isAuth} />
				<ProtectedRoute
					path='/daily'
					component={DailyChecklist}
					auth={isAuth}
				/>
				<Route path='/goals/:id' component={GoalDetail} />
			</div>
		</div>
	);
}

export default App;
