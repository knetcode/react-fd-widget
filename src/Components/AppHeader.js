import React from 'react'
import { RiRefreshFill, RiCloseCircleFill } from 'react-icons/ri'
import { FaUserCircle } from 'react-icons/fa'

const AppHeader = ({ appName }) => {
	return (
		<header className='header'>
			<h1>{appName}</h1>
			<button
				id='close-app-btn'
				className='app-btn app-btn-close'
				onClick={() => {
					window.close()
				}}
			>
				<RiCloseCircleFill />
			</button>
			<button
				id='refresh-app-btn'
				className='app-btn app-btn-refresh'
				onClick={() => {
					window.location.reload()
				}}
			>
				<RiRefreshFill />
			</button>

			<button
				id='user-app-btn'
				className='app-btn app-btn-user'
				onClick={() => {
					localStorage.setItem('API_KEY', JSON.stringify(null))
					window.location.reload()
				}}
			>
				<FaUserCircle />
			</button>
		</header>
	)
}

export default AppHeader
