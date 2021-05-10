const Ticket = ({ ticket, agentsArr, FD_URL, putContent }) => {
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
		if (priority === 4) {
			return priorityColor.urgent.color
		}
		if (priority === 3) {
			return priorityColor.high.color
		}
		if (priority === 2) {
			return priorityColor.medium.color
		}
		if (priority === 1) {
			return priorityColor.low.color
		}
	}

	const setPriorityText = (priority) => {
		if (priority === 4) {
			return priorityColor.urgent.text
		}
		if (priority === 3) {
			return priorityColor.high.text
		}
		if (priority === 2) {
			return priorityColor.medium.text
		}
		if (priority === 1) {
			return priorityColor.low.text
		}
	}

	const getStatus = (status) => {
		if (status === 2) {
			return 'Open'
		}
		if (status === 3) {
			return 'Pending'
		}
		if (status === 4) {
			return 'Resolved'
		}
		if (status === 5) {
			return 'Closed'
		}
		if (status === 6) {
			return 'In Progress'
		}
	}

	const resolveTicket = async (e) => {
		const ticketID = +e.target.value
		const body = {
			status: 4,
		}
		await putContent('tickets', ticketID, body)
		window.location.reload()
	}

	return (
		<div className='ticket z-depth-2'>
			<div className='ticket-header'>
				<div className='ticket-header-left'>
					<a href={`${FD_URL}tickets/${ticket.id}`} target='_blank' rel='noreferrer' className='ticket-subject'>
						{ticket.subject}
					</a>
					<h4>ID#{ticket.id}</h4>
					{/* <h4>Assigned to {getAgent(ticket.responder_id)}</h4> */}
					{/* <h4>Status: {getStatus(ticket.status)}</h4> */}
				</div>
				<div className='ticket-header-right'>
					<div className='badge' style={{ backgroundColor: setPriorityColor(ticket.priority) }}>
						{setPriorityText(ticket.priority)}
					</div>
				</div>
			</div>

			<div className='ticket-body'>
				<p>{ticket.description_text}</p>
			</div>

			<div className='ticket-footer'>
				<button
					className='btn ctk-red waves-light waves-effect'
					value={ticket.id}
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
