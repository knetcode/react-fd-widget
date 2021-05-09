import React from 'react'
import Ticket from './Ticket'
import { FaPlus } from 'react-icons/fa'
import { useState } from 'react'

const Tickets = ({ tickets, agents, FD_URL }) => {
	const ticketsArr = tickets.tickets
	const agentsArr = agents.agents

	const comparePriority = (a, b) => {
		if (a.priority < b.priority) {
			return -1
		} else if (a.priority > b.priority) {
			return 1
		} else {
			return 0
		}
	}

	const [selectedUser, setSelectedUser] = useState(null)

	const filteredArr = ticketsArr.filter((ticket) => ticket.responder_id === selectedUser).sort(comparePriority)

	return (
		<div className='tickets white-text'>
			<div className='tickets-user-select'>
				<label htmlFor='users-drop'>Choose a User:</label>

				<select
					name='users-drop'
					id='users-drop'
					onChange={(e) => {
						setSelectedUser(+e.target.value)
					}}
				>
					<option value=''></option>
					{agentsArr.map((agent) => (
						<option key={agent.id} value={agent.id}>
							{agent.first_name}
						</option>
					))}
				</select>
			</div>
			{filteredArr.map((ticket) => {
				return <Ticket ticket={ticket} agentsArr={agentsArr} key={ticket.id} FD_URL={FD_URL} />
			})}
			<button className='btn-floating btn-large waves-effect waves-light ctk-pink btn-add'>
				<FaPlus />
			</button>
		</div>
	)
}

export default Tickets
