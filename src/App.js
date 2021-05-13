import AppHeader from './Components/AppHeader'
import AppFooter from './Components/AppFooter'
import { Tab, Tabs, Toast } from 'react-materialize'
import Tickets from './Components/Tickets'
import { useState, useEffect } from 'react'

const APP_NAME = process.env.REACT_APP_APP_NAME
const API = {
	URL: process.env.REACT_APP_API_URL,
	KEY: process.env.REACT_APP_API_KEY,
}
const FD_URL = process.env.REACT_APP_FD_URL

function App() {
	// const [pageIndex, setPageIndex] = useState(1)
	const [tickets, setTickets] = useState(null)
	const [agents, setAgents] = useState(null)
	const [fields, setFields] = useState(null)

	const fetchContent = async (query) => {
		const res = await fetch(`${API.URL}${query}`, {
			headers: { Authorization: `${API.KEY}`, 'Content-Type': 'application/json' },
			method: 'GET',
		})
		const dataObj = await res.json()
		return dataObj
	}

	useEffect(() => {
		const getAgents = async () => {
			const agentsFromServer = await fetchContent('/agents.json')
			setAgents(agentsFromServer)
		}
		getAgents()
	}, [])

	useEffect(() => {
		const getFields = async () => {
			const fieldsFromServer = await fetchContent('/ticket_fields.json')
			setFields(fieldsFromServer)
		}
		getFields()
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])

	const putContent = async (query, id, body) => {
		const res = await fetch(`${API.URL}${query}${id}.json`, {
			body: JSON.stringify(body),
			headers: { Authorization: `${API.KEY}`, 'Content-Type': 'application/json' },
			method: 'PUT',
		})
		const dataObj = await res.json()
		// console.log(dataObj)
		return dataObj
	}

	const postContent = async (query, body) => {
		const res = await fetch(`${API.URL}${query}.json`, {
			body: JSON.stringify(body),
			headers: { Authorization: `${API.KEY}`, 'Content-Type': 'application/json' },
			method: 'POST',
		})
		const dataObj = await res.json()
		console.log(dataObj.item.helpdesk_ticket.display_id)
		callToast(dataObj.item.helpdesk_ticket.display_id)
		return dataObj
	}

	const callToast = (message) => {
		return (
			<Toast
				options={{
					html: `Ticket #${message} created`,
				}}
			>
				Toast
			</Toast>
		)
	}

	const getTickets = async () => {
		// const ticketsFromServer = await fetchContent('helpdesk/tickets/filter/all_tickets?format=json')
		const ticketsFromServer = await fetchContent('helpdesk/tickets/filter/unresolved?format=json')
		ticketsFromServer.forEach((ticket) => {
			if (ticket.responder_id === null) {
				ticket.responder_id = 100
			}
		})
		setTickets(ticketsFromServer)
		console.log(ticketsFromServer)
	}

	useEffect(() => {
		getTickets()
		setInterval(() => {
			getTickets()
			console.log('refreshed')
		}, 60000)
	}, [])

	useEffect(() => {
		const getAgents = async () => {
			const agentsFromServer = await fetchContent('/agents.json')
			setAgents(agentsFromServer)
		}
		getAgents()
	}, [])

	// const alltickets = async () => {
	// 	const txlist = await fetchContent('helpdesk/tickets/filter/all_tickets?format=json&page=3')
	// 	console.log(txlist)
	// }

	// alltickets()

	return (
		<div className='app-container'>
			<AppHeader appName={APP_NAME} />
			<Tabs className='red top-tabs'>
				<Tab title='Tickets' className=' white-text '>
					<div className='container'>
						{tickets && agents && (
							<Tickets
								tickets={tickets}
								agents={agents}
								FD_URL={FD_URL}
								// pageIndex={pageIndex}
								// setPageIndex={setPageIndex}
								putContent={putContent}
								fields={fields}
								postContent={postContent}
								getTickets={getTickets}
							/>
						)}
					</div>
				</Tab>
				<Tab title='TAB 2'>TAB 2</Tab>
			</Tabs>
			{/* <Toast
				options={{
					html: `hello`,
				}}
			>
				Toast
			</Toast> */}
			<AppFooter />
		</div>
	)
}

export default App
