import './App.css';
import { useRoutes } from 'hookrouter';
import Landing from './components/Landing';
import Dashboard from './components/Dashboard';
import Goals from './components/Goals';
import DailyChecklist from './components/DailyChecklist';

const routes = {
	'/': () => <Landing />,
};
function App() {
	const routeResult = useRoutes(routes);

	return routeResult || <div>404 Not Found</div>;
}

export default App;
