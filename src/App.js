// const getData = async () => {
// 	const res = await fetch('https://itsd-computicket.freshservice.com/api/v2/tickets/19111', {
// 		headers: {
// 			Authorization: 'Basic SkRDNlNxTE5wMzN5eEZmODdqbXY6WA==',
// 			'Content-Type': 'application/json',
// 		},
// 		method: 'GET',
// 	});
// 	const data = await res.json();
// };

import Header from './Components/Header';
import { Tab, Tabs } from 'react-materialize';
import Tickets from './Components/Tickets';

function App() {
	const appName = 'withIT';

	return (
		<div className='app-container'>
			<Header appName={appName} />
			<Tabs className='red'>
				<Tab title='Tickets' className=' white-text'>
					<Tickets />
				</Tab>
				<Tab title='tab2'>Tab2</Tab>
			</Tabs>
		</div>
	);
}

export default App;
