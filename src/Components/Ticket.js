const Ticket = ({ ticket, FD_URL, putContent }) => {
	const expand = (e) => {
		e.target.parentElement.previousElementSibling.classList.toggle('expanded')

		if (e.target.parentElement.previousElementSibling.classList.contains('expanded')) {
			e.target.innerText = 'COLLAPSE'
		}

		if (!e.target.parentElement.previousElementSibling.classList.contains('expanded')) {
			e.target.innerText = 'EXPAND'
		}
	}

	// const getAgent = (agentID) => {
	// 	let agentName
	// 	agentsArr.forEach((agent) => {
	// 		if (agentID === agent.id) {
	// 			agentName = agent.first_name
	// 		}
	// 	})
	// 	return agentName
	// }

	// const getStatus = (status) => {
	// 	if (status === 2) {
	// 		return 'Open'
	// 	}
	// 	if (status === 3) {
	// 		return 'Pending'
	// 	}
	// 	if (status === 4) {
	// 		return 'Resolved'
	// 	}
	// 	if (status === 5) {
	// 		return 'Closed'
	// 	}
	// 	if (status === 6) {
	// 		return 'In Progress'
	// 	}
	// }

	// const priorityColor = {
	// 	urgent: {
	// 		color: '#e91414',
	// 		text: 'URGENT',
	// 	},
	// 	high: {
	// 		color: '#ff7a00',
	// 		text: 'HIGH',
	// 	},
	// 	medium: {
	// 		color: '#2a27c5',
	// 		text: 'MEDIUM',
	// 	},
	// 	low: {
	// 		color: '#20e800',
	// 		text: 'LOW',
	// 	},
	// }

	// const setPriorityColor = (priority) => {
	// 	if (priority === 4) {
	// 		return priorityColor.urgent.color
	// 	}
	// 	if (priority === 3) {
	// 		return priorityColor.high.color
	// 	}
	// 	if (priority === 2) {
	// 		return priorityColor.medium.color
	// 	}
	// 	if (priority === 1) {
	// 		return priorityColor.low.color
	// 	}
	// }

	// const setPriorityText = (priority) => {
	// 	if (priority === 4) {
	// 		return priorityColor.urgent.text
	// 	}
	// 	if (priority === 3) {
	// 		return priorityColor.high.text
	// 	}
	// 	if (priority === 2) {
	// 		return priorityColor.medium.text
	// 	}
	// 	if (priority === 1) {
	// 		return priorityColor.low.text
	// 	}
	// }

	const setPriorityColor = (priority) => {
		if (priority === 'Urgent') {
			return '#e91414'
		}
		if (priority === 'High') {
			return '#ff7a00'
		}
		if (priority === 'Medium') {
			return '#2a27c5'
		}
		if (priority === 'Low') {
			return '#20e800'
		}
	}

	const resolveTicket = async (e) => {
		const ticketID = +e.target.value
		// const ticketID = 19092
		const body = {
			helpdesk_ticket: {
				status: 4,
			},
		}
		await putContent('helpdesk/tickets/', ticketID, body)
		window.location.reload()
	}

	const formatDate = (date) => {
		const d = new Date(date).getDate()
		const months = [
			'January',
			'February',
			'March',
			'April',
			'May',
			'June',
			'July',
			'August',
			'September',
			'October',
			'November',
			'December',
		]
		const m = months[new Date(date).getMonth()]
		const displayDate = `${d} ${m}`
		return displayDate
	}

	// console.log(ticket)

	return (
		<div className='ticket z-depth-2'>
			<div className='ticket-header'>
				<div className='ticket-header-left'>
					<a
						href={`${FD_URL}tickets/${ticket.display_id}`}
						target='_blank'
						rel='noreferrer'
						className='ticket-subject'
						// onClick={(e) => linkExternal(e)}
					>
						{ticket.subject}
					</a>
					<h4>ID#{ticket.display_id}</h4>
					{/* <h4>Assigned to {ticket.responder_name}</h4> */}
					<h4>Status: {ticket.status_name}</h4>
				</div>
				<div className='ticket-header-right'>
					<div className='due-date'>
						<h4>Due By</h4>
						<p>{formatDate(ticket.due_by)}</p>
					</div>
					<div className='badge' style={{ backgroundColor: setPriorityColor(ticket.priority_name) }}>
						{ticket.priority_name}
					</div>
				</div>
			</div>

			<div className='ticket-body'>
				<p>{ticket.description}</p>
			</div>

			<div className='ticket-footer'>
				<button
					className='btn ctk-red waves-light waves-effect'
					value={ticket.display_id}
					onClick={(e) => resolveTicket(e)}
				>
					Resolve
				</button>

				<button className='btn transparent waves-effect z-depth-0 text-ctk-pink expanding-btn' onClick={expand}>
					Expand
				</button>
			</div>
		</div>
	)
}

export default Ticket
