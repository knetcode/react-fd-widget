// const getData = async () => {
// 	const res = await fetch(
// 		'https://itsd-computicket.freshservice.com/api/v2/tickets/19111',
// 		{
// 			headers: {
// 				Authorization: 'Basic SkRDNlNxTE5wMzN5eEZmODdqbXY6WA==',
// 				'Content-Type': 'application/json',
// 			},
// 			method: 'GET',
// 		}
// 	);
// 	const data = await res.json();
// };

import Header from './Components/Header';
import TaskList from './Components/TaskList';

function App() {
	return (
		<div className='App'>
			<div className='app-container'>
				<Header />
				<TaskList />
			</div>
		</div>
	);
}

export default App;
