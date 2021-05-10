import React, { useEffect } from 'react'
import Ticket from './Ticket'
import { FaPlus } from 'react-icons/fa'
import { useState } from 'react'

const Tickets = ({ tickets, agents, FD_URL, pageIndex, setPageIndex, putContent }) => {
	const ticketsArr = tickets.tickets
	const agentsArr = agents.agents

	const loadingAnimation = () => {
		const loader = document.createElement('div')
		loader.classList.add('loader')
		loader.innerHTML = `<h2>Loading...</h2>`
		document.body.appendChild(loader)
		console.log(document.body)
		setTimeout(() => {
			if (document.body.lastElementChild.classList.contains('loader')) {
				document.body.lastElementChild.remove()
			}
		}, 2000)
	}

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
					{agentsArr.map((agent) => (
						<option key={agent.id} value={agent.id}>
							{agent.first_name}
						</option>
					))}
				</select>
			</div>
			{filteredArr.map((ticket) => {
				return (
					<Ticket ticket={ticket} agentsArr={agentsArr} key={ticket.id} FD_URL={FD_URL} putContent={putContent} />
				)
			})}
			<button className='btn-floating btn-large waves-effect waves-light ctk-pink btn-add'>
				<FaPlus />
			</button>
			<button
				id='load-more-btn'
				onClick={() => {
					setPageIndex(pageIndex + 1)
					document.documentElement.scrollTop = 0
					loadingAnimation()
				}}
				className='btn-block ctk-red btn btn-load-more'
			>
				Load More
			</button>
		</div>
	)
}

export default Tickets
