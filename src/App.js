import { useState, useEffect } from 'react'
import { Tab, Tabs } from 'react-materialize'
import AppHeader from './Components/AppHeader'
import FDApp from './Components/FDApp'
import NoKey from './Components/NoKey'

const APP_NAME = 'withIT'

const API_URL = process.env.REACT_APP_API_URL
const ADMIN_KEY = process.env.REACT_APP_ADMIN_KEY

function App() {
	const [API_KEY, setAPI_KEY] = useState(null)

	useEffect(() => {
		if (localStorage.getItem('API_KEY')) {
			const API_KEY_ls = JSON.parse(localStorage.getItem('API_KEY'))
			setAPI_KEY(API_KEY_ls)
		}
	}, [])

	return (
		<div className='app-container'>
			<AppHeader appName={APP_NAME} />
			{!API_KEY && <NoKey setAPI_KEY={setAPI_KEY} API_KEY={API_KEY} API_URL={API_URL} />}

			{API_KEY && (
				<Tabs className='top-tabs container'>
					<Tab title='Tickets'>
						<FDApp API_URL={API_URL} API_KEY={API_KEY} ADMIN_KEY={ADMIN_KEY} />
					</Tab>
					{/* <Tab title='Tab 2'>TAB 2</Tab> */}
				</Tabs>
			)}
		</div>
	)
}

export default App
