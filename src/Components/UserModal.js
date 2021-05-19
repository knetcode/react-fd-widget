import { Modal, Button } from 'react-materialize'
import React from 'react'

const UserModal = ({ agentsArr, selectedUser, setSelectedUser, isUserModalOpen, setIsUserModalOpen }) => {
	const getName = () => {
		let displayName
		agentsArr.forEach((agent) => {
			console.log(agent)
			if (selectedUser === agent.agent.user_id) {
				displayName = agent.agent.user.name
				return
			}

			if (selectedUser === 100) {
				displayName = 'Unassigned'
				return
			}
		})
		return displayName
	}

	return (
		<div className='user-select'>
			<div className='user-select-selector'>
				<button className='btn ctk-red waves-effect waves-light' onClick={() => setIsUserModalOpen(!!true)}>
					Select a user
				</button>
				<h4>{getName()}</h4>
				{/* {console.log(agentsArr)} */}
			</div>
			<Modal
				header='Select a user'
				id='add-modal'
				open={!!isUserModalOpen}
				options={{
					dismissible: false,
				}}
				actions={[
					<Button flat node='button' waves='green' onClick={() => setIsUserModalOpen(!!false)}>
						Close
					</Button>,
				]}
			>
				<ul className='user-select-ul'>
					<li
						className='user-select-li'
						onClick={() => {
							setSelectedUser(100)
							setIsUserModalOpen(!!false)
						}}
					>
						Unassigned
					</li>
					{agentsArr.map((agent) => {
						return (
							<li
								key={agent.agent.user.id}
								className='user-select-li'
								onClick={() => {
									setSelectedUser(agent.agent.user.id)
									setIsUserModalOpen(!!false)
								}}
							>
								{agent.agent.user.name}
							</li>
						)
					})}
				</ul>
			</Modal>
		</div>
	)
}

export default UserModal
