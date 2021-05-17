import React from 'react'
import { useState, useEffect } from 'react'
import Tickets from './Tickets'

const FDApp = ({ API_URL, API_KEY }) => {
	const [tickets, setTickets] = useState(null)
	const [agents, setAgents] = useState(null)
	const [fields, setFields] = useState(null)
	const [isModalOpen, setIsModalOpen] = useState(!!false)
	// console.log(isModalOpen)

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

		if (ticketsFromServer.require_login || ticketsFromServer.status) {
			// console.log('login fail')
			localStorage.setItem('API_KEY', JSON.stringify(null))
			const incorrectKey = document.createElement('div')
			incorrectKey.setAttribute('id', 'incorrect-key')
			incorrectKey.innerHTML = `
				<h1 style="margin-top:10rem; color:#444;">Incorrect API Key</h1>
				<button class="btn ctk-red btn-block" onClick="window.location.reload()">Retry</button>
			`
			if (!document.querySelector('#incorrect-key')) {
				document.querySelector('.app-container').appendChild(incorrectKey)
			}
			return
		}

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
			// console.log('refreshed')
		}, 60000)
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])

	useEffect(() => {
		const getAgents = async () => {
			const agentsFromServer = await fetchContent('agents.json')
			setAgents(agentsFromServer)
		}
		getAgents()
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])

	useEffect(() => {
		const getFields = async () => {
			const fieldsFromServer = await fetchContent('ticket_fields.json')
			setFields(fieldsFromServer)
		}
		getFields()
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])

	const putContent = async (query, id, body) => {
		const res = await fetch(`https://itsd-computicket.freshservice.com/api/v2/${query}/${id}`, {
			body: JSON.stringify(body),
			headers: { Authorization: `${API_KEY}`, 'Content-Type': 'application/json' },
			method: 'PUT',
		})
		const dataObj = await res.json()
		getTickets()
		return dataObj
	}

	const postContent = async (query, body) => {
		const res = await fetch(` https://itsd-computicket.freshservice.com/api/v2/${query}`, {
			body: JSON.stringify(body),
			headers: { Authorization: `${API_KEY}`, 'Content-Type': 'application/json' },
			method: 'POST',
		})
		const dataObj = await res.json()
		// console.log(dataObj)
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
					isModalOpen={isModalOpen}
					setIsModalOpen={setIsModalOpen}
				/>
			)}
		</div>
	)
}

export default FDApp
