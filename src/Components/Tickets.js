import { useEffect, useState } from 'react'
import NoTicket from './NoTicket'
import Ticket from './Ticket'
import AddModal from './AddModal'

const Tickets = ({ tickets, agents, FD_URL, putContent, fields, postContent, getTickets }) => {
	const ticketsArr = tickets
	const agentsArr = agents

	const comparePriority = (a, b) => {
		if (a.priority < b.priority) {
			return 1
		} else if (a.priority > b.priority) {
			return -1
		} else {
			return 0
		}
	}

	const [selectedUser, setSelectedUser] = useState(
		localStorage.getItem('selectedUser') ? +JSON.parse(localStorage.getItem('selectedUser')) : 100
	)
	useEffect(() => addExpandBtn, [])
	useEffect(() => addExpandBtn, [selectedUser])
	useEffect(() => {
		localStorage.setItem('selectedUser', JSON.stringify(selectedUser))
		setSelectedUser(selectedUser)
	}, [selectedUser])

	const addExpandBtn = () => {
		const paras = document.querySelectorAll('.ticket-body')
		paras.forEach((para) => {
			if (para.scrollHeight > para.clientHeight) {
				para.nextElementSibling.firstElementChild.nextElementSibling.style.display = 'block'
			} else {
				para.nextElementSibling.firstElementChild.nextElementSibling.style.display = 'none'
			}
		})
	}
	window.addEventListener('resize', addExpandBtn)

	const filteredArr = ticketsArr.filter((ticket) => ticket.responder_id === selectedUser).sort(comparePriority)

	return (
		<div className='tickets white-text'>
			<div className='tickets-user-select'>
				<label htmlFor='users-drop'>Choose a User:</label>
				<select
					name='users-drop'
					id='users-drop'
					defaultValue={selectedUser}
					onChange={(e) => {
						setSelectedUser(+e.target.value || e.target.value)
					}}
				>
					<option value='100'>Unassigned</option>
					{agentsArr.map((agent) => {
						return (
							<option key={agent.agent.user.id} value={agent.agent.user.id}>
								{agent.agent.user.name}
							</option>
						)
					})}
				</select>
			</div>

			{filteredArr.length > 0 ? (
				filteredArr.map((ticket) => {
					return (
						<Ticket
							ticket={ticket}
							key={ticket.display_id}
							FD_URL={FD_URL}
							putContent={putContent}
							getTickets={getTickets}
						/>
					)
				})
			) : (
				<NoTicket />
			)}

			<AddModal fields={fields} selectedUser={selectedUser} postContent={postContent} getTickets={getTickets} />
		</div>
	)
}

export default Tickets
