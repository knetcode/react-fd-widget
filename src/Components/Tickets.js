import React from 'react'
import Ticket from './Ticket'
import { FaPlus } from 'react-icons/fa'

const Tickets = ({ tickets, agents, FD_URL }) => {
	const ticketsArr = tickets.tickets
	const agentsArr = agents.agents

	console.log(agentsArr)

	const comparePriority = (a, b) => {
		if (a.priority < b.priority) {
			return -1
		} else if (a.priority > b.priority) {
			return 1
		} else {
			return 0
		}
	}

	ticketsArr.sort(comparePriority)

	return (
		<div className='tickets white-text'>
			<button type='submit' className='btn btn-block'>
				Username Selection
			</button>
			{ticketsArr.map((ticket) => {
				return <Ticket ticket={ticket} agents={agents} key={ticket.id} FD_URL={FD_URL} />
			})}
			<button className='btn-floating btn-large waves-effect waves-light ctk-pink btn-add'>
				<FaPlus />
			</button>
		</div>
	)
}

export default Tickets
