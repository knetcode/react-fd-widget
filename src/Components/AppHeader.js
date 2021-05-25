import React from 'react'
import { RiRefreshFill, RiCloseCircleFill } from 'react-icons/ri'
import { FaUserCircle } from 'react-icons/fa'

const AppHeader = ({ appName }) => {
	return (
		<header className='app-header container'>
			{/* <h1>{appName}</h1> */}
			<h1>POGGERS</h1>
			<div className='header-wrapper'>
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
					id='close-app-btn'
					className='app-btn app-btn-close'
					onClick={() => {
						window.close()
					}}
				>
					<RiCloseCircleFill />
				</button>
			</div>
		</header>
	)
}

export default AppHeader
