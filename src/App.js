import AppHeader from './Components/AppHeader'
import AppFooter from './Components/AppFooter'
import { Tab, Tabs } from 'react-materialize'
import Tickets from './Components/Tickets'
import { useState, useEffect } from 'react'

const APP_NAME = process.env.REACT_APP_APP_NAME
const API = {
	URL: process.env.REACT_APP_API_URL,
	KEY: process.env.REACT_APP_API_KEY,
}
const FD_URL = process.env.REACT_APP_FD_URL

function App() {
	const [tickets, setTickets] = useState(null)
	const [agents, setAgents] = useState(null)

	const fetchContent = async (query) => {
		const res = await fetch(`${API.URL}${query}`, {
			headers: { Authorization: `${API.KEY}`, 'Content-Type': 'application/json' },
			method: 'GET',
		})
		const dataObj = await res.json()
		return dataObj
	}

	useEffect(() => {
		const getTickets = async () => {
			const ticketsFromServer = await fetchContent('tickets')
			setTickets(ticketsFromServer)
		}

		getTickets()
	}, [])

	useEffect(() => {
		const getAgents = async () => {
			const agentsFromServer = await fetchContent('agents')
			setAgents(agentsFromServer)
		}

		getAgents()
	}, [])

	return (
		<div className='app-container'>
			<AppHeader appName={APP_NAME} />
			<Tabs className='red'>
				<Tab title='Tickets' className=' white-text '>
					<div className='container'>
						{tickets && agents && <Tickets tickets={tickets} agents={agents} FD_URL={FD_URL} />}
					</div>
				</Tab>
				<Tab title='TAB 2'>TAB 2</Tab>
			</Tabs>
			<AppFooter />
		</div>
	)
}

export default App
