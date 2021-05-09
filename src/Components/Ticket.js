import React from 'react'
import { FaExternalLinkAlt } from 'react-icons/fa'

const Ticket = ({ ticket, agents, FD_URL }) => {
	const expand = (e) => {
		e.target.parentElement.previousElementSibling.classList.toggle('expanded')

		if (e.target.parentElement.previousElementSibling.classList.contains('expanded')) {
			e.target.innerText = 'COLLAPSE'
		}

		if (!e.target.parentElement.previousElementSibling.classList.contains('expanded')) {
			e.target.innerText = 'EXPAND'
		}
	}

	const priorityColor = {
		urgent: {
			color: '#e91414',
			text: 'URGENT',
		},
		high: {
			color: '#ff7a00',
			text: 'HIGH',
		},
		medium: {
			color: '#2a27c5',
			text: 'MEDIUM',
		},
		low: {
			color: '#20e800',
			text: 'LOW',
		},
	}

	const setPriorityColor = (priority) => {
		if (priority === 1) {
			return priorityColor.urgent.color
		}
		if (priority === 2) {
			return priorityColor.high.color
		}
		if (priority === 3) {
			return priorityColor.med.color
		}
		if (priority === 4) {
			return priorityColor.low.color
		}
	}

	const setPriorityText = (priority) => {
		if (priority === 1) {
			return priorityColor.urgent.text
		}
		if (priority === 2) {
			return priorityColor.high.text
		}
		if (priority === 3) {
			return priorityColor.med.text
		}
		if (priority === 4) {
			return priorityColor.low.text
		}
	}

	return (
		<div className='ticket z-depth-2'>
			<div className='ticket-header'>
				<div className='ticket-header-left'>
					<h2>{ticket.subject}</h2>
					<h4>ID#{ticket.id}</h4>
					<h4>Assigned {ticket.responder_id}</h4>
				</div>
				<div className='ticket-header-right'>
					<a href={`${FD_URL}tickets/${ticket.id}`} target='_blank' rel='noreferrer'>
						<FaExternalLinkAlt />
					</a>
					<div className='badge' style={{ backgroundColor: setPriorityColor(ticket.priority) }}>
						{setPriorityText(ticket.priority)}
					</div>
				</div>
			</div>

			<div className='ticket-body'>
				<p>{ticket.description_text}</p>
			</div>

			<div className='ticket-footer'>
				<button type='submit' className='btn ctk-red waves-light waves-effect'>
					Resolve
				</button>
				<button type='submit' className='btn transparent waves-effect z-depth-0 text-ctk-pink' onClick={expand}>
					Expand
				</button>
			</div>
		</div>
	)
}

export default Ticket
