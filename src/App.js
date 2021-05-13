import { useState, useEffect } from 'react'
import { Tab, Tabs } from 'react-materialize'
import AppHeader from './Components/AppHeader'
import AppFooter from './Components/AppFooter'
import FDApp from './Components/FDApp'
import NoKey from './Components/NoKey'

const APP_NAME = 'withIT'
// const API_KEY_Input = 'JDC6SqLNp33yxFf87jmv'
// const API_KEY = `Basic ${window.btoa(API_KEY_Input)}=`
// const API_KEY = null
const API_URL = 'https://itsd-computicket.freshservice.com/'

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
			{!API_KEY && <NoKey setAPI_KEY={setAPI_KEY} API_KEY={API_KEY} />}

			{API_KEY && (
				<Tabs className='red top-tabs'>
					<Tab title='Tickets' className=' white-text '>
						<FDApp API_URL={API_URL} API_KEY={API_KEY} />
					</Tab>
					<Tab title='TAB 2'>TAB 2</Tab>
				</Tabs>
			)}

			<AppFooter />
		</div>
	)
}

export default App
