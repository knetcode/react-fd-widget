import React from 'react'
import { useState, useEffect } from 'react'
import Tickets from './Tickets'

const FDApp = ({ API_URL, API_KEY, ADMIN_KEY }) => {
	const [tickets, setTickets] = useState(null)

	const [agents, setAgents] = useState(null)
	const [fields, setFields] = useState(null)
	const [isAddModalOpen, setIsAddModalOpen] = useState(!!false)
	const [isUserModalOpen, setIsUserModalOpen] = useState(!!false)
	const [isResolveModalOpen, setIsResolveModalOpen] = useState(!!false)

	const fetchContent = async (query, key) => {
		key = key || API_KEY
		const res = await fetch(`${API_URL}${query}`, {
			headers: { Authorization: `${key}`, 'Content-Type': 'application/json' },
			method: 'GET',
		})
		const dataObj = await res.json()
		console.log(res)
		return dataObj
	}

	const getTickets = async () => {
		const ticketsFromServer = []
		let i = 1
		const callsFn = async (page) => {
			const ticketsFromServerPart = await fetchContent(`helpdesk/tickets/filter/unresolved?format=json&page=${page}`)
			ticketsFromServerPart.forEach((part) => {
				ticketsFromServer.push(part)
			})
			i++
			ticketsFromServerPart.length === 30 && (await callsFn(i))
		}

		await callsFn(i)

		ticketsFromServer.forEach((ticket) => {
			if (ticket.responder_id === null) {
				ticket.responder_id = 100
			}
		})
		setTickets(ticketsFromServer)
	}

	useEffect(() => {
		getTickets()
		setInterval(() => {
			getTickets()
		}, 60000)
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])

	useEffect(() => {
		const getAgents = async () => {
			const agentsFromServer = await fetchContent('agents.json', ADMIN_KEY)
			setAgents(agentsFromServer)
		}
		getAgents()
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])

	useEffect(() => {
		const getFields = async () => {
			const fieldsFromServer = await fetchContent('ticket_fields.json', ADMIN_KEY)
			setFields(fieldsFromServer)
		}
		getFields()
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])

	const putContent = async (query, id, body) => {
		const res = await fetch(`${API_URL}api/v2/${query}/${id}`, {
			body: JSON.stringify(body),
			headers: { Authorization: `${API_KEY}`, 'Content-Type': 'application/json' },
			method: 'PUT',
		})
		const dataObj = await res.json()
		getTickets()
		return dataObj
	}

	const postContent = async (query, body) => {
		const res = await fetch(`${API_URL}/api/v2/${query}`, {
			body: JSON.stringify(body),
			headers: { Authorization: `${API_KEY}`, 'Content-Type': 'application/json' },
			method: 'POST',
		})
		const dataObj = await res.json()
		getTickets()
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
					isAddModalOpen={isAddModalOpen}
					setIsAddModalOpen={setIsAddModalOpen}
					isUserModalOpen={isUserModalOpen}
					setIsUserModalOpen={setIsUserModalOpen}
					isResolveModalOpen={isResolveModalOpen}
					setIsResolveModalOpen={setIsResolveModalOpen}
				/>
			)}
		</div>
	)
}

export default FDApp
