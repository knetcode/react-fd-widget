import { useEffect, useState } from 'react'
import { FaPlus } from 'react-icons/fa'
import NoTicket from './NoTicket'
import Ticket from './Ticket'
import AddModal from './AddModal'
import UserModal from './UserModal'
import ResolveModal from './ResolveModal'

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
	isResolveModalOpen,
	setIsResolveModalOpen,
}) => {
	const agentsArr = agents
	const [ticketsArr, setTicketsArr] = useState(tickets)

	useEffect(() => {
		setTicketsArr(tickets)
	}, [tickets])

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

	const [resolvingTicket, setResolvingTicket] = useState(null)

	useEffect(() => {
		localStorage.setItem('selectedUser', JSON.stringify(selectedUser))
		setSelectedUser(selectedUser)
	}, [selectedUser])

	const [filteredArr, setFilteredArr] = useState(
		ticketsArr.filter((ticket) => ticket.responder_id === selectedUser).sort(comparePriority)
	)

	useEffect(() => {
		setFilteredArr(ticketsArr.filter((ticket) => ticket.responder_id === selectedUser).sort(comparePriority))
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [ticketsArr, selectedUser])

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
							isResolveModalOpen={isResolveModalOpen}
							setIsResolveModalOpen={setIsResolveModalOpen}
							resolvingTicket={resolvingTicket}
							setResolvingTicket={setResolvingTicket}
						/>
					)
				})
			) : (
				<NoTicket />
			)}

			{fields && (
				<AddModal
					fields={fields}
					selectedUser={selectedUser}
					postContent={postContent}
					getTickets={getTickets}
					isAddModalOpen={isAddModalOpen}
					setIsAddModalOpen={setIsAddModalOpen}
				/>
			)}

			<ResolveModal
				putContent={putContent}
				isResolveModalOpen={isResolveModalOpen}
				setIsResolveModalOpen={setIsResolveModalOpen}
				getTickets={getTickets}
				resolvingTicket={resolvingTicket}
				setResolvingTicket={setResolvingTicket}
				postContent={postContent}
			/>

			<button className='btn-floating btn-large ctk-pink btn-add' onClick={() => setIsAddModalOpen(!!true)}>
				<FaPlus />
			</button>
		</div>
	)
}

export default Tickets
