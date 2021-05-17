const Ticket = ({ ticket, API_URL, putContent, getTickets }) => {
	const expand = (e) => {
		e.target.parentElement.previousElementSibling.classList.toggle('expanded')

		if (e.target.parentElement.previousElementSibling.classList.contains('expanded')) {
			e.target.innerText = 'COLLAPSE'
		}

		if (!e.target.parentElement.previousElementSibling.classList.contains('expanded')) {
			e.target.innerText = 'EXPAND'
		}

		document.querySelector(`#tx${ticket.display_id}`).scrollIntoView({ behavior: 'smooth' })
	}

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
		const body = {
			status: 4,
		}
		// console.log(ticketID, body)
		await putContent('tickets', ticketID, body)
		getTickets()
	}

	const formatDate = (date) => {
		const now = new Date()
		const dueDate = new Date(date)
		const d = new Date(date).getDate()
		const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
		const m = months[new Date(date).getMonth()]
		const y = new Date(date).getFullYear()
		const displayDate = `${d} ${m} ${y}`
		if (now > dueDate) {
			return (
				<div className='overdue due-date'>
					<h4>Due By</h4>
					<p>{displayDate}</p>
				</div>
			)
		} else {
			return (
				<div className='due-date'>
					<h4>Due By</h4>
					<p>{displayDate}</p>
				</div>
			)
		}
	}

	return (
		<div id={`tx${ticket.display_id}`} className='ticket z-depth-2'>
			<div className='ticket-header'>
				<div className='ticket-header-top'>
					<a
						href={`${API_URL}tickets/${ticket.display_id}`}
						target='_blank'
						rel='noreferrer'
						className='ticket-subject'
					>
						{ticket.subject}
					</a>
					<div className='badge' style={{ backgroundColor: setPriorityColor(ticket.priority_name) }}>
						{ticket.priority_name}
					</div>
				</div>
				<div className='ticket-header-bottom'>
					<div className='ticket-info'>
						<h4>ID#{ticket.display_id}</h4>
						<h4>Status: {ticket.status_name}</h4>
					</div>
					{formatDate(ticket.due_by)}
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
