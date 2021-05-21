import { useEffect, useState } from 'react'
import { FaPlus } from 'react-icons/fa'
import NoTicket from './NoTicket'
import Ticket from './Ticket'
import AddModal from './AddModal'
import UserModal from './UserModal'

const Tickets = ({
	API_URL,
	tickets,
	agents,
	putContent,
	fields,
	postContent,
	getTickets,
	isAddModalOpen,
	setIsAddModalOpen,
	isUserModalOpen,
	setIsUserModalOpen,
}) => {
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

	useEffect(() => {
		localStorage.setItem('selectedUser', JSON.stringify(selectedUser))
		setSelectedUser(selectedUser)
	}, [selectedUser])

	const filteredArr = ticketsArr.filter((ticket) => ticket.responder_id === selectedUser).sort(comparePriority)

	const [pageIndex, setPageIndex] = useState(1)

	useEffect(() => {
		getTickets(pageIndex)
	}, [pageIndex])

	return (
		<div className='tickets'>
			<UserModal
				agents={agents}
				selectedUser={selectedUser}
				setSelectedUser={setSelectedUser}
				agentsArr={agentsArr}
				isUserModalOpen={isUserModalOpen}
				setIsUserModalOpen={setIsUserModalOpen}
			/>

			{filteredArr.length > 0 ? (
				filteredArr.map((ticket) => {
					return (
						<Ticket
							ticket={ticket}
							key={ticket.display_id}
							API_URL={API_URL}
							putContent={putContent}
							getTickets={getTickets}
						/>
					)
				})
			) : (
				<NoTicket />
			)}

			<AddModal
				fields={fields}
				selectedUser={selectedUser}
				postContent={postContent}
				getTickets={getTickets}
				isAddModalOpen={isAddModalOpen}
				setIsAddModalOpen={setIsAddModalOpen}
			/>

			<button className='btn-floating btn-large ctk-pink btn-add' onClick={() => setIsAddModalOpen(!!true)}>
				<FaPlus />
			</button>

			<div className='pagination-wrapper'>
				{pageIndex > 1 && (
					<button
						className='btn-block ctk-red btn'
						onClick={() => {
							setPageIndex((pageIndex) => (pageIndex - 1 < 1 ? 1 : pageIndex - 1))
						}}
					>
						Load Less Page:{pageIndex}
					</button>
				)}

				{ticketsArr.length === 30 && (
					<button
						className='btn-block ctk-red btn'
						onClick={() => {
							setPageIndex((pageIndex) => pageIndex + 1)
						}}
					>
						Load More Page:{pageIndex}
					</button>
				)}
			</div>
		</div>
	)
}

export default Tickets
