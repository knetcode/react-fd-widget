import { Modal, Button } from 'react-materialize'
import { FaEdit } from 'react-icons/fa'
import { RiCloseCircleFill } from 'react-icons/ri'
import React from 'react'

const UserModal = ({ agentsArr, selectedUser, setSelectedUser, isUserModalOpen, setIsUserModalOpen }) => {
	const getName = () => {
		let displayName
		agentsArr.forEach((agent) => {
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

	const colorPicker = (index) => {
		const colorArr = [
			'#f6a7c1', //0
			'#ff9770', //1
			'#97f2f3', //2
			'#c1cd97', //3
			'#39808f', //4
			'#80b918', //5
			'#e08963', //6
			'#9dabdd', //7
			'#a02c2d', //8
			'#fa6e4f', //9
			'#ffadad', //10
			'#ffd6a5', //11
			'#ffca3a', //12
			'#e8209c', //13
			'#9bf6ff', //14
			'#a0c4ff', //15
			'#bdb2ff', //16
			'#6d6875', //17
			'#5a189a', //18
			'#e5383b', //19
			'#1982c4', //20
		]

		return colorArr[index]
	}

	const getInitials = (id) => {
		let userName

		if (id === 100) {
			return (
				<div className='user-select-initials' style={{ backgroundColor: colorPicker(10) }}>
					<p>UN</p>
				</div>
			)
		}

		agentsArr.forEach((agent) => {
			if (id === agent.agent.user.id) {
				userName = agent.agent.user.name
			}
		})

		const nameArr = userName.split(' ')
		const firstName = nameArr[0].split('')
		const lastName = nameArr[1].split('')

		const firstInitial = firstName.splice(0, 1)
		const lastInitial = lastName.splice(0, 1)

		const color =
			(firstName.length * lastName.length * userName.length) % (firstName.length + lastName.length + userName.length)

		return (
			<div className='user-select-initials' style={{ backgroundColor: colorPicker(color > 20 ? 20 : color) }}>
				{console.log(color)}
				<p>
					{firstInitial}
					{lastInitial}
				</p>
			</div>
		)
	}

	return (
		<div className='user-select'>
			<div className='user-select-selector'>
				<button className='user-btn btn waves-effect waves-light' onClick={() => setIsUserModalOpen(!!true)}>
					{getInitials(selectedUser)}
					<h4>{getName()}</h4>
					<span className='pencil'>
						<FaEdit />
					</span>
				</button>
			</div>
			<Modal
				header='Select a user'
				id='add-modal'
				open={!!isUserModalOpen}
				options={{
					dismissible: false,
				}}
				actions={[
					<Button className='modal-close-btn' flat node='button' onClick={() => setIsUserModalOpen(!!false)}>
						<RiCloseCircleFill />
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
						<div className='user-select-initials' style={{ backgroundColor: '#ffadad' }}>
							<p>UN</p>
						</div>
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
								{getInitials(agent.agent.user.id)}
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
