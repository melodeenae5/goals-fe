import './App.css';
import React, { useState } from 'react';
import { Route } from 'react-router-dom';
import Landing from './components/Landing';
import Dashboard from './components/Dashboard';
import Goals from './components/Goals';
import DailyChecklist from './components/DailyChecklist';
import ProtectedRoute from './components/ProtectedRoute';
import CreateAccount from './components/CreateAccount';

function App() {
	const [isAuth, setIsAuth] = useState(false);
	return (
		<div>
			<Route
				exact
				path='/'
				render={() => <Landing isAuth={isAuth} setIsAuth={setIsAuth} />}
			/>
			<Route path='/register' component={CreateAccount} />
			<ProtectedRoute path='/dashboard' component={Dashboard} auth={isAuth} />
		</div>
	);
}

export default App;
