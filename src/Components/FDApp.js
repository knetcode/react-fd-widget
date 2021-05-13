import React from 'react'
import { useState, useEffect } from 'react'
import Tickets from './Tickets'

const FDApp = ({ API_URL, API_KEY }) => {
	const [tickets, setTickets] = useState(null)
	const [agents, setAgents] = useState(null)
	const [fields, setFields] = useState(null)

	const fetchContent = async (query) => {
		const res = await fetch(`${API_URL}${query}`, {
			headers: { Authorization: `${API_KEY}`, 'Content-Type': 'application/json' },
			method: 'GET',
		})
		const dataObj = await res.json()
		return dataObj
	}

	const getTickets = async () => {
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
		// setInterval(() => {
		// 	getTickets()
		// 	console.log('refreshed')
		// }, 60000)
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])

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
		const res = await fetch(`${API_URL}${query}${id}.json`, {
			body: JSON.stringify(body),
			headers: { Authorization: `${API_KEY}`, 'Content-Type': 'application/json' },
			method: 'PUT',
		})
		const dataObj = await res.json()

		return dataObj
	}

	const postContent = async (query, body) => {
		const res = await fetch(`${API_URL}${query}.json`, {
			body: JSON.stringify(body),
			headers: { Authorization: `${API_KEY}`, 'Content-Type': 'application/json' },
			method: 'POST',
		})
		const dataObj = await res.json()
		console.log(dataObj.item.helpdesk_ticket.display_id)
		return dataObj
	}

	return (
		<div className='container'>
			{tickets && agents && (
				<Tickets
					tickets={tickets}
					agents={agents}
					API_URL={API_URL}
					putContent={putContent}
					fields={fields}
					postContent={postContent}
					getTickets={getTickets}
				/>
			)}
		</div>
	)
}

export default FDApp
